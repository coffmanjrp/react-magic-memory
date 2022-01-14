import { FC } from 'react';
import { Card } from 'App';
import './SingleCard.css';

type Props = {
  card: Card;
};

const SingleCard: FC<Props> = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img src={card.src} alt="card front" className="front" />
        <img src="/img/cover.png" alt="card back" className="back" />
      </div>
    </div>
  );
};

export default SingleCard;
