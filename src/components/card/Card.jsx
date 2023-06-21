import React from 'react'
import "./Card.css";
import Image from '../image/image';

const Card = () => {
  return <article className='card'>
    <Image />
    <CardTitle />
    <CardBody />
  </article>
}

export default Card