import React from 'react';

const Books = (props) => {
  const data = props.data;
  return (
    <div>
      {data.map((item) => (
        <div>
          {item.name}
          <div onClick={() => props.onClickHandler(item.name)}>Click</div>
        </div>
      ))}
      <div></div>
    </div>
  );
};


export default Books;
