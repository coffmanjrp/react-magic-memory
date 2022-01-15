import { FC } from 'react';
import { Card } from 'App';
import './SingleCard.css';

type Props = {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
};

const SingleCard: FC<Props> = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} alt="card front" className="front" />
        <img
          src="/img/cover.png"
          alt="card back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
