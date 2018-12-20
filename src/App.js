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
  height: 80px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Score = styled.div`
  flex-grow: 1;
  display:flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
`

const TitleScore = styled.div`
  color: #951B00;
`

const Instruction = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Paragraph = styled.div`
  
`


class App extends Component {
  render() {
    const  options =  ['Piedra', 'Papel','Tijera'];
    return (
      <Container>
        <Content>
          <Header>
            <Instruction>
                <label>asdf</label>
                <label>asdf</label>
            </Instruction>
            <Score>
              <TitleScore>Score</TitleScore>
              <label>asdf</label>
            </Score>
          </Header>
        </Content>
      </Container>
    );
  }
}

export default App;
