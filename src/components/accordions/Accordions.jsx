import { useState } from "react";
import Accordion from "../accordion/Accordion";
import "./Accordions.css";

const NO_ACCORDION_SELECTED = 0;

const Accordions = () => {
  const [active, setActive] = useState(NO_ACCORDION_SELECTED);

  const handleClick = (index) => {
    if (index === active) {
      setActive(NO_ACCORDION_SELECTED);
      return;
    }
    setActive(index);
  };

  return (
    <div className="accordions">
      <Accordion
        value={1}
        active={active}
        onClick={handleClick}
        title="Accordion 1"
      >
        Shed Skin
      </Accordion>
      <Accordion
        value={2}
        active={active}
        onClick={handleClick}
        title="Accordion 2"
      >
        Chlorophyll
      </Accordion>
      <Accordion
        value={3}
        active={active}
        onClick={handleClick}
        title="Accordion 3"
      >
        Tinted Lens
      </Accordion>
      <Accordion
        value={4}
        active={active}
        onClick={handleClick}
        title="Accordion 4"
      >
        Shield Dust
      </Accordion>
      <Accordion
        value={5}
        active={active}
        onClick={handleClick}
        title="Accordion 5"
      >
        Blaze
      </Accordion>
      <Accordion
        value={6}
        active={active}
        onClick={handleClick}
        title="Accordion 1"
      >
        Swift Swim
      </Accordion>
      <Accordion
        value={7}
        active={active}
        onClick={handleClick}
        title="Accordion 2"
      >
        Cute Charm
      </Accordion>
      <Accordion
        value={8}
        active={active}
        onClick={handleClick}
        title="Accordion 3"
      >
        Shed Skin
      </Accordion>
      <Accordion
        value={9}
        active={active}
        onClick={handleClick}
        title="Accordion 4"
      >
        Shed Skin
      </Accordion>
      <Accordion
        value={10}
        active={active}
        onClick={handleClick}
        title="Accordion 5"
      >
        Keen Eye
      </Accordion>
    </div>
  );
};

export default Accordions;