import './style.css';
import populateList from './populateList';

const placeholders = [
  {
    name: 'Name',
    score: 100,
  },
  {
    name: 'Name',
    score: 20,
  },
  {
    name: 'Name',
    score: 50,
  },
  {
    name: 'Name',
    score: 78,
  },
];

populateList(placeholders);
