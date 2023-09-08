import React from "react";
import useOpenController from "../components/useOpenController";

export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = useOpenController(false);
  console.log(section);
  return (
    <div className={`accordion-container ${isOpen ? "open" : ""}`}>
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
      <div className="underline"></div>
    </div>
  );
};

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className={`expendable-column ${isOpen ? "open" : ""}`} onClick={toggle}>
      <div>
        {question} <span><i className="fas fa-angle-down mg-3"></i></span>
      </div>
    </div>
  );
};

export const TextSection = ({ text }) => {
  return (
    <div className="text-container">
      <div>{text}</div>
    </div>
  );
};
