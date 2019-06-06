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
  height: 100vh;
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
  border-radius: 15px;
`;
