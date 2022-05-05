import React from "react";

import './card.styles.css'
import {Monster} from "../../../App";

type CardProps = {
  monster: Monster
}

const Card = ({monster: {name, email, id}}: CardProps) =>
  <div className={'card-container'}>
    <img
      alt={`monster ${name}`}
      src={`https://www.robohash.org/${id}?set=set2&size=180x180`}/>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>

export default Card;