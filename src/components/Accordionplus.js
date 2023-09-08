import React, { useState } from 'react';

const Accordionplus = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordionplus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordionplus">
      <div className="accordionplus-header" onClick={toggleAccordionplus}>
        <p>{title}</p><span className={`icon ${isOpen ? 'minus' : 'plus'}`}>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordionplus-content">{content}</div>}
    </div>
  );
};

export default Accordionplus;