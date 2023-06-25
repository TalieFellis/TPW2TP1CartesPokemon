import React from 'react'
import "./Card.css";
import Image from '../image/Image';
import CardTitle from '../card-title/CardTitle';
import AccordionsWithUseEffect from '../accordions-with-useeffect/AccordionsWithUseEffect';

const Card = () => {
  return <article className='card'>
    <Image />
    <CardTitle />
    <AccordionsWithUseEffect />
  </article>
}

export default Card;