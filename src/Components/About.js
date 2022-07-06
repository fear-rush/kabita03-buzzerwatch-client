import React from "react";
import Logo from '../assets/logo.png'


const About = () => {
    return(
        <div className="container py-5 About">
            <img src={Logo} alt="BuzzerWatch" className="w-25"/>
            <div className="mt-4 px-5">
                Menjelang pendaftaran pemilihan umum di tahun 2022, semakin banyak aktor politik yang memanfaatkan echo chamber di sosial media. Pemanfaatan echo-chamber tersebut memunculkan banyak buzzer di sosial media Twitter yang menyebarkan propaganda atau agenda dari suatu tokoh politik. Oleh karena itu kami menyusun sebuah aplikasi website yang dapat memudahkan masyarakat dalam mengetahui sentimen dari topik yang ada di sosial media twitter.
            </div>     
        </div>
    )
}

export default About