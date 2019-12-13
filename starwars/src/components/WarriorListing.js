import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
`

const Card = styled.div`
  width: 250px;
  margin: 10px;
  margin-bottom: 20px;
  border: 1px solid #A16944;
  border-radius: 5px;
  box-shadow: 5px 5px #473730;
`

const WarriorListing = (props) => {
  return (
    <Container>
      <Card>
        <h2>Name: {props.name}</h2>
        <h2>Height: {props.height}</h2>      
        <h2>Gender: {props.gender}</h2>
      </Card>
    </Container>
  )
}

export default WarriorListing; 