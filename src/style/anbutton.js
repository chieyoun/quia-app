import styled from "styled-components"

const Anbutton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: rgb(115, 98, 255);
  border-radius: 5px;
  border: 0px;
  height: 56px;
  padding: 4px;
  margin: 4px;
  cursor: pointer;
  width: calc(100% - 8px);
  outline: none;
  font-weight: 700;

  &:hover {
    background-color: #a99fee;
  }
`

export default Anbutton;