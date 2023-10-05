import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const whoweare = () => {
    return ( <>
    <Navbar/>    
    <div className="my-mother"></div>
     <div className="xs-down-8 down-2 my-mother bg-blue">
        <div className="my-col-12 off-1 down-1 xs-off-1"><h3 className="about white">ABOUT US</h3></div>
     </div>
    <div className="my-col-6 my-mother off-1 xs-down-3">
        <div className="text-about"><p>BME Gene Bank was founded in 2023 under the leadership of Engr. Mrs. Ajibola and Dr. Suleiman Abimbola, The Head of Biomedical
                                        Engineering department of University of Ilorin Kwara State. A team of 20 final year students class of 2022 participated in this project.</p></div>
        <div className="text-about"><p>Our mission is to discover precise genomic solutions for diseases and empower the global biomedical community
                in the shared quest to improve human health.</p></div>
        <div className="text-about"><p>Our staff, students, researchers have made significant contributions to medical progress, in Genetic Engineering,
                Stem cell therapies and other genetic research.</p></div>
    </div>
    <div className="my-col-6 my-mother off-1">
        <div className="text-about"><h3>EDUCATION</h3></div>
        <div className="text-about"><p>We offer comprehensive educational programs for scientists throughout their careers, from fresher (100 level), sophomore students
                lecturers, to researchers at all experience levels, and for clinical providers interested in incorporating genetics and genomics into 
                their pratices</p></div>
    </div>
    <div className="my-col-6 my-mother off-1">
        <div className="text-about"><h3>RESOURCES</h3></div>
        <div className="text-about"><p>Our database is the No 1 in Africa source for information on genetics and biology. We hold many genetic informations useful for research.</p></div>

    </div>
    <Footer/>
    </>

    )
}

export default whoweare;