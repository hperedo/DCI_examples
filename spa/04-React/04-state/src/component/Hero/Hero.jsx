import { useState } from 'react';
import sculptureList from './data';
import './HeroStyles.scss';

export default function Hero() {
  let [index, setIndex] = useState(0);

  let sculpture = sculptureList[index];

  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <div className="container">
      <div className="content">
        <h1>
          {sculpture.name} by {sculpture.artist}
        </h1>
        <h2>
          {index + 1} of {sculptureList.length}
        </h2>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>{sculpture.description}</p>
        <button onClick={handleClick}>NEXT</button>
      </div>
    </div>
  );
}
