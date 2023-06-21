import React from 'react'
import "./Card.css";
import Image from '../image/Image';
import CardTitle from '../card-title/CardTitle';
import Accordion from '../accordion/Accordion';

const Card = () => {
  return <article className='card'>
    <Image />
    <CardTitle />
    <Accordion />
  </article>
}

export default Card