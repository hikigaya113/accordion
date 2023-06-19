// New code start

import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Who  are you ?",
    text: " This is Rahul Singh Bisht, A BTech graduate, from KIET Group of institution, a new born front end Developer ",
  },
  {
    title: "Which sports person you like most ?",
    text: "I am a true MSDIAN and also love to see RONALDO to show his magic with football",
  },

  {
    title: "Where do you live ?",
    text: "I am from the Land of God, Uttrakhand.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordian">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number"> {num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title"> {title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
