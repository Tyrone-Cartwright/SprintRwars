import React from 'react';

const WarriorListing = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Height:{props.height}</h2>
      <h2>Hair: {props.hair_color}</h2>
      <h2>Gender: {props.gender}</h2>
    </div>
  )
}

export default WarriorListing; 