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
`;

const Content = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 1px 4px black;
  border-radius: 5px;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Score = styled.div`
  flex-grow: 1;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const TitleScore = styled.span`
  color: #951B00;
  font-size: 30px;
`;

const Players = styled.span`
  color: black;
`;

const Instruction = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Paragraph = styled.div`
  width: 100%;
  color:#A7A6A6;
  font-size: 30px;
`;

const Options = styled.div`
  flex:1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Result = styled.h1`
  font-size: 30px;
  color: black;
`

const Choice = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const Text = styled(TitleScore)`
  color: #951B00;
`;


class App extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      score:{
        pc:0,
        player:0
      },
      options:[{'text':'Piedra', 'color': '#CCCCCC'}, {'text':'Papel', 'color':'#FFFFFF'},{'text':'Tijera','color':'#5F92EA'}],
      choice:'',
      pcChoice:'',
      winner:''
    }
  }

  handleClick(element){
    const choice = element.target.value;
    let pc = Math.floor((Math.random() * this.state.options.length));
    pc = this.state.options[pc].text;
    this.setState({
      choice,
      pcChoice:pc
    })

    if (choice === pc) {
      this.setState({winner:'Empate'})
    }else {
      let score = {...this.state.score}
      if ((choice === 'Piedra' && pc === 'Tijera') || (choice === 'Papel' && pc === 'Piedra') || (choice === 'Tijera' && pc === 'Papel')) {
        score.player += 1
        this.setState({
          winner:'Ganaste!!!!',
          score
        })

      }
      else {
        score.pc += 1
        this.setState({
          winner:'Perdiste :(',
          score
        })
      }
    }

  }

  render() {
    const { score :{ player, pc }, options, choice, pcChoice, winner } = this.state
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
          <Options>
            <Paragraph>Elige tu jugada</Paragraph>
            {options.map((option,i) => {
              return(
                <Button key={`button${i}`} color={option.color} text={option.text} handleClick={this.handleClick} />)}
              )
            }
          </Options>
          <Choice>
            <Text>Elegiste: <label>{choice}</label> </Text>
            <Text>La PC eligiò: <label>{pcChoice}</label></Text>
            <Text>{winner}</Text>
          </Choice>
        </Content>
      </Container>
    );
  }
}

export default App;
