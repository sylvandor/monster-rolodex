import React from "react";
import Card from "./card/card.component";

import './card-list.styles.css'
import {Monster} from "../../App";

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({monsters}:CardListProps) =>
  <div className={'card-list'}>
    {monsters
      .map(monster => (
        <Card monster={monster}/>
      ))
    }
  </div>

export default CardList;