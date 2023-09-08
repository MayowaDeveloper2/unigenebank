import React from "react";
import { data } from "../components/data";
import { Accordion } from "../components/Accordion"

const Userguides = () => {
  return (
    <div className="my-mother xs-down-8">
    <div className=''>
      <div className="box">
        <div className="xs-down-13 down-8 centered"><h1>Userguides</h1></div>
      </div>  
      
      <div>
        {data.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Userguides;