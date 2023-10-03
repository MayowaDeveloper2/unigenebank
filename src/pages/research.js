import React from 'react';
import Accordionplus from '../components/Accordionplus';
import data1 from '../components/dataplus';
import lab from '../images/lab.png';
import research1 from '../images/research1.jpg'
import research2 from '../images/research2.jpg'
import research3 from '../images/research4.jpg'
import research4 from '../images/research5.jpg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Research = () => {
    return ( <>
     <Navbar/> 
     <div className="r-landing">
      <div className="my-mother down-15 centered xs-down-50">
       <div className="my-col-3 centered">
        <div className="y-container bg-blue"><h3 className="white research-lead">Leading the search for tommorow's cures</h3></div>
       </div>
      </div>
    <div>
    </div>
    
    </div>
    <div className="my-col-4 xs-off-1 xs-md-off-1 off-1">
        <h3>Unlock Your World</h3>
        <p>From laboratory study to genetic research to investigations in the field,
           Unilorin Biomedical Engineering students engage in world-class research
           across all disciplines and make groundbraking contributions to their fields.</p>

           <p>With support from a variety of funding sources, students collaborate with
           renowned departmental researchers whose work has been featured in top Journals
           and awarded prestigious grants. Whether you assist your professor or lead your
           own project, you'll receive guidance, support, and the benefit of their expertise.
        </p>
    </div>
    <div className="my-col-6 xs-off-1 xs-md-off-1 down-4 off-1">
      {data1.map((item, index) => (
        <Accordionplus
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
    <div className="my-col-12 bg-black down-4 my-bottom-20">
     <div className="my-col-5 xs-down-8 xs-off-1 off-1">
      <div className="text-white down-5 px30"><i className="fa fa-flask px30"></i><span className="mg-3 bold">Research</span></div>
      <p className="text-white justify down-8">Explore how Unilorin Scientist are decoding the genetic and molecular factors
         underlying biological function and human disease. Here at University of Ilorin,
         Biomedical Engineering department, we are bridging the gap between mouse and human
         data to drive biological discovery and accelerate translation to the clinic.
      </p>
      <p className="text-white justify">With the latest equipment, methodologies, and best in class core services, our highly
         collaborative and diverse research teams are overcoming long standing challenges in 
         a variety of research and diseases area. </p>
     </div>
     <div className="my-col-6 xs-off-1">
      <div><img className="lab" src={lab} alt="alt"/></div>
     </div>
     <div className="xs-off-1 my-col-4 off-1">
      <div><img className='research2' src={research1} alt="research1" /></div>
     </div>
     <div className="xs-off-1 my-col-5 down-3">
      <div><img className='research2 mg-10' src={research2} alt="research1" /></div>
     </div>
     <div className="xs-off-1 my-col-4 off-1">
      <div><img className='research2' src={research3} alt="research1" /></div>
     </div>
     <div className="my-col-5 xs-off-1 down-3">
      <div><img className='research2 mg-10' src={research4} alt="research1" /></div>
     </div>


    </div>
    
    <div className="my-col-12 down-8">
      <div className="xs-off-1 xs-md-off-1 centered"><p className="bold italise">"Ultimately, the key to creating a truly innovative and creative engineering program is to bridge the gap between academia and industry"</p></div>
      <div className="centered"><p className="bold"> – Dr. Suleiman Abimbola Yahaya</p></div>
    </div>
    <Footer/>
    </>

    )
}

export default Research;