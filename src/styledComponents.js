import styled from 'styled-components'

export const Button = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  padding: 8px 15px 8px 15px;
  margin: 8px;
  border: none;
  border-radius: 4px;
  outline: none;
`

export const RulesButton = styled(Button)`
  color: #223a5f;
  background-color: white;
  :hover {
    cursor: pointer;
  }
`

export const CloseButton = styled(Button)`
  border-style: solid;
  border-color: black;
  :hover {
    background-color: rgb(156, 20, 20);
    color: white;
    cursor: pointer;
  }
`

export const PlayAgainButton = styled(Button)`
  background-color: white;
  color: black;
  border-style: none;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`
