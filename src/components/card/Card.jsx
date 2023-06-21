import React from 'react'
import "./Card.css";
import Image from '../image/Image';
import CardTitle from '../card-title/CardTitle';

const Card = () => {
  return <article className='card'>
    <Image />
    <CardTitle />
  </article>
}

export default Card