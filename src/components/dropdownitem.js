import React, { useState } from 'react';

const DropdownItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-dropdown-item">
      <div className="faq-question" onClick={toggleDropdown}>
        {question}
        <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}><i className="fas fa-angle-down mg-3"></i></span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default DropdownItem;