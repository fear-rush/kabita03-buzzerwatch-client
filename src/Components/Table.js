import React from 'react'

const Table = (props) => {
    return(
      <div>
        <table className="table table-striped">
            <thead className="bg-green-primary text-white">
              <tr>
                <th scope="col">Tweets Raw</th>
                <th scope="col">Sentiment</th>
                <th scope="col">Percentage</th>
              </tr>
            </thead>
            <tbody>
                {props.data.map((data,i)=>(
                    <tr key={i}>
                        <td style={{textAlign:'left'}}>{data.raw}</td>
                        <td>{data.sentiment}</td>
                        <td>{data.percentage}%</td>
                    </tr>
                ))}
              
            </tbody>
          </table>
          </div>
    )
}

export default Table