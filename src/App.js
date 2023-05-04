import React, { useState } from 'react';
import './style.css';
import Books from './books.js';

export default function App() {
  const data = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'React',
    },
  ];

  const [SelectData, setSelectData] = useState();

  const onClickHandler = (e) => {
    setSelectData(e);
  };

  return (
    <div>
      <h1>Welcome {SelectData}</h1>
      <Books data={data} onClickHandler={(e) => onClickHandler(e)} />
    </div>
  );
}
