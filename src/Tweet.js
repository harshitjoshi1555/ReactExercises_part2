// Tweet.jsx
import React from 'react';

const Tweet = ({ username, name, date, message }) => {
  const tweetStyle = {
   
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: '#86FCD8',
  };

  const headerStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const dateStyle = {
    color: '#888',
    fontSize: '0.8em',
  };

  return (
    <div style={tweetStyle}>
      <div style={headerStyle}>{name} (@{username})</div>
      <div>{message}</div>
      <div style={dateStyle}>{date}</div>
    </div>
  );
};

export default Tweet;
