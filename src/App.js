import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Components/Button'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #711400;
`

const Content = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 1px 4px black;
  border-radius: 5px;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Score = styled.div`
  flex-grow: 1;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const TitleScore = styled.span`
  color: #951B00;
  font-size: 30px;
`

const Players = styled.span`
  color: black;
`

const Instruction = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Paragraph = styled.div`
  color:#A7A6A6;
  font-size: 30px;
`


class App extends Component {
  constructor(){
    super()
    this.state = {
      score:{
        pc:0,
        player:0
      },
      options:['Piedra', 'Papel','Tijera']
    }
  }
  render() {
    const { player, pc } = this.state.score
    return (
      <Container>
        <Content>
          <Header>
            <Instruction>
              <Paragraph>Juega Piedra, Papel o Tijera</Paragraph>
            </Instruction>
            <Score>
              <TitleScore>Score</TitleScore>
              <Players>{`Tù: ${player}`}</Players>
              <Players>{`PC: ${pc}`}</Players>
            </Score>
          </Header>
        </Content>
      </Container>
    );
  }
}

export default App;
