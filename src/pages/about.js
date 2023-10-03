import React from 'react';
import logoicons from '../images/logoicons.jpg'

const About = () => {
    return ( <>
    <div className="my-col-6">
        <div>About BME Gene Bank <i className="fas fa-solid fa-circle-arrow-right"/></div>
    </div>
    <div className="my-col-3">
        <div><img src={logoicons} alt=""/></div>
    </div>
    <div className="my-col-6">
        <div className="px10">BME Gene Bank was founded in 2023 under the leadership of the Head of the Department of Biomedical Engineering,
            Dr. Yahaya Suleiman Abimbola and Engr. Mrs T.M. Ajibola.</div>
        <div className="px10 down-1">It was created to address the department's researchers, staff and students inability to perform genetic research
             and create a novel applications in personalized medicine.</div>    
    </div>
    </>

    )
}

export default About;