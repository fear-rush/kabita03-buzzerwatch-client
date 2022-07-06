import React, {useState} from "react";
import Campaign from '../assets/campaign.png'
import Table from "./Table";
import { Link } from "react-scroll";
import { PieChart } from 'react-minimal-pie-chart';

const url = 'http://127.0.0.1:5000/twitter'

const options = [
    { title: 'Netral', value: 0, color: '#2196f3', percentage:0},
    { title: 'Positif', value: 0, color: '#4caf50', percentage:0},
    { title: 'Negatif', value: 0, color: '#ffc107', percentage:0},
]

const Hero = () => {
    const Sentiment = (props) => {
        let netral = 0
        let positif = 0
        let negatif = 0
        props.map(data=>{
            if(data.sentiment=="neutral"){
                netral+=1
            }
            if(data.sentiment=='positive'){
                positif+=1
            }
            if(data.sentiment=='negative'){
               negatif+=1
            }
        })
        options.map(opsi=>{
            if(opsi.title=="Netral"){
                opsi.value=netral
                opsi.percentage=(netral/(netral+positif+negatif))*100
            }
            if(opsi.title=='Positif'){
                opsi.value=positif
                opsi.percentage=(positif/(netral+positif+negatif))*100
            }
            if(opsi.title=='Negatif'){
               opsi.value=negatif
               opsi.percentage=(negatif/(netral+positif+negatif))*100
            }
        })
    }
    const [hastag,setHastag] = useState()
    const [data,setData] = useState()
    const [loading, setLoading] = useState(false)
    const send = async ()  => {
        setLoading(true)
        const response = await fetch(url,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({hashtag:hastag})
        })
        const result = await response.json()
        setData(result.data)
        Sentiment(result.data)
        setLoading(false)
    }
    return(
        <div className="container Home">
            <div className="row mt-5">
                <div className="col-md-6 pe-md-5 d-flex flex-column justify-content-center">
                    <div className="fs-2 fw-bold text-start color-black-primary mb-4">Analyze hashtag from Twitter</div>
                    <div className="fs-6 text-start color-black-secondary mb-3">Kenali sentiment dari berbagai topik politik yang sedang hangat dibicarakan pada media sosial Twitter sehingga kita tidak dengan mudah terjebak pada kampanye echo chamber yang di orkestrai oleh Buzzer</div>
                    <div className="d-flex">
                        <input type="text" className="form-control w-50 me-2" onChange={(e)=>setHastag(e.target.value)} placeholder='#hashtag'/>
                        <Link to="Result" offset={-100} className="btn bg-green-primary w-25" style={{cursor:'pointer'}} onClick={()=>send()}>Analyze</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img img-fluid m-4" src={Campaign} alt="BuzzerWatch"/>
                </div>
                <div className="Result">
                {loading?
                    <div className="Loading fs-3 fw-bold">
                        Please wait for a minute
                    </div>:
                    data&&
                        <div>
                            <div className="fs-3 fw-bold my-4">Hasil Analisis Sentiment</div>
                            <PieChart
                                data={options}
                                label={({ dataEntry }) => `${dataEntry.title} : ${dataEntry.percentage}%`}
                                labelStyle={(index) => ({
                                  fill: options[index].color,
                                  fontSize: '2px',
                                  fontFamily: 'sans-serif',
                                })}
                                radius={20}
                                labelPosition={112}
                                viewBoxSize={[100, 78]}
                                style={{marginTop:'-25%'}}
                            />
                            <Table data={data}/>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Hero