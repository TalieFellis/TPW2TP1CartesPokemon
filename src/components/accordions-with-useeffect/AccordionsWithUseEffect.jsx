import { useState, useEffect } from "react";
import AccordionWithUseEffect from "../accordion-with-useeffect/Accordion";
import "./Accordions.css";

const NO_ACCORDION_SELECTED = 0;

const AccordionsWithUseEffect = () => {
  const [active, setActive] = useState(NO_ACCORDION_SELECTED);

  const onMouseEnter = (index) => {
    setActive(index);
  };

  const onMouseLeave = () => {
    setActive(NO_ACCORDION_SELECTED);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest(".accordion")) {
      return;
    }
    setActive(NO_ACCORDION_SELECTED);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="accordions" >
      <AccordionWithUseEffect
        value={1}
        active={active}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Shed Skin
      </AccordionWithUseEffect>
      
    </div>
  );
};

export default AccordionsWithUseEffect;
