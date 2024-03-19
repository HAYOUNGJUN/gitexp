import paperImg from './assets/paper.png';
import rockImg from './assets/rock.png';
import scissorsImg from './assets/scissors.png';

export const CHOICES = {
  rock: {
    name: 'Rock',
    imgPath: rockImg,
    value: 0,
  },
  scissors: {
    name: 'Scissors',
    imgPath: scissorsImg,
    value: 1,
  },
  paper: {
    name: 'Paper',
    imgPath: paperImg,
    value: 2,
  },
};

export const RESULTS = {
  tie: 0,
  win: 1,
  lose: -1,
};
