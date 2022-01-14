import { useEffect, useState } from 'react';
import { SingleCard } from 'components';
import 'App.css';

const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
];

export type Card = {
  id: number;
  src: string;
};

type Cards = Card[];

function App() {
  const [cards, setCards] = useState<Cards>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne?.src === choiceTwo?.src) {
        console.log('It matches');
        resetTurn();
      } else {
        console.log('Did not matches');
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button type="button" onClick={shuffleCards}>
        New Game
      </button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} {...{ card, handleChoice }} />
        ))}
      </div>
    </div>
  );
}

export default App;
