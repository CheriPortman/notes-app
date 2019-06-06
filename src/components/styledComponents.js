import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  margin-top: 0;
  font-size: 4em;
`;

export const Wrapper = styled.section`
  background-color: yellow;
`;

export const Form = styled.form`
  border: 3px solid black;
  width: 50vw;
  margin: auto;
  padding: 3em;
  background-color: #8FBC8F;
  border-radius: 8px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  display: block;
  background-color: lightgray;
  height: 2em;
`;

export const Textarea = styled.input`
  height: 10em;
  width: 90%;
  background-color: lightgray;
`;

export const Button = styled.button`
  background-color: lilac;
  height: 2em;
  border-radius: 5px;
  font-family: fantasy;
  float: right;
`;

export const Li = styled.li`
  border: 1px solid black;
  width: 90vw;
  margin: 1em;
  padding: 15px 22px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
`;
  
export const Ul = styled.ul`
  list-style: none;
`;

//PT = Title <p>
export const PT = styled.p`
  font-weight: bold;
`;
