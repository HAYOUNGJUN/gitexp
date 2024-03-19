import { useState } from 'react';

import './App.css';
import Box from './components/Box';
import { CHOICES, RESULTS } from './data';

type Choice = {
  name: string;
  imgPath: string;
  value: number;
};

function App() {
  const [userSelect, setUserSelect] = useState<Choice>(CHOICES.rock);
  const [computerSelect, setComputerSelect] = useState<Choice>(CHOICES.rock);
  const [result, setResult] = useState<string>('');

  function handleChoice(userChoice: keyof typeof CHOICES) {
    setUserSelect(CHOICES[userChoice]);
    const computerChoice = getRandomChoice();
    setComputerSelect(computerChoice);
    setResult(getWinner(CHOICES[userChoice], computerChoice));
  }

  function getRandomChoice() {
    const itemArray = Object.keys(CHOICES);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];

    return CHOICES[final as keyof typeof CHOICES];
  }

  function getWinner(user: Choice, computer: Choice) {
    const resVal = user.value - computer.value;

    if (resVal === 0) return 'tie';
    else if (resVal === -1 || resVal === 2) return 'win';
    else if (resVal === 1 || resVal === -2) return 'lose';
    else return 'Error occurred';
  }

  let computerResult: string;

  if (RESULTS[result as keyof typeof RESULTS] === 0) {
    computerResult = 'tie';
  } else {
    const matchedVal = RESULTS[result as keyof typeof RESULTS] * -1;
    computerResult = Object.keys(RESULTS).find(
      (key) => RESULTS[key as keyof typeof RESULTS] === matchedVal
    ) as string;
  }

  return (
    <>
      <div className='main'>
        <Box title='You' imgPath={userSelect.imgPath} result={result} />
        <Box
          title='Computer'
          imgPath={computerSelect.imgPath}
          result={computerResult}
        />
      </div>
      <div className='main'>
        <button onClick={() => handleChoice('scissors')}>가위</button>
        <button onClick={() => handleChoice('rock')}>바위</button>
        <button onClick={() => handleChoice('paper')}>보</button>
      </div>
    </>
  );
}

export default App;
