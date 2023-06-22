import React, { useEffect } from "react";
import "./Accordion.css";

const AccordionWithUseEffect = (props) => {

  const classnames = ["accordion"];

  if (props.value === props.active) {
    classnames.push("active");
  }

  const onMouseEnter = () => {
    props.onMouseEnter(props.value);
  };

  const onMouseLeave = () => {
    props.onMouseLeave();
  };

  useEffect(() => {
    // Supprimer la référence à getName ici
  }, [props.active]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classnames.join(" ")}
    >
      <button
        onMouseEnter={onMouseEnter}
        className="accordion__button"
      >
        {props.title}
      </button>
      <div className="accordion__content">{props.children}</div>
    </div>
  );
};

export default AccordionWithUseEffect;
