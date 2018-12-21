import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  width: 20%;
  height: 50px;
  background-color: ${props => props.color };
  border:none;
  box-shadow: 1px 1px 2px black;
  margin-top: 20px;
  font-size: 20px;
`;


function Button(props){
  return(
    <ButtonComponent color={props.color} value={props.text} onClick={(element)=>props.handleClick(element)}>
      {props.text}
    </ButtonComponent>
  )
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button;
