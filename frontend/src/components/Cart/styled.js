import styled from "styled-components";

export const ComponentCart = styled.div`
display: grid;
gap: 10px;
width: 80rem;
grid-template-columns: repeat(4, 2fr);
text-align: center;
padding: 70px 10px;
margin: 0 auto;
`;

export const ButtonFinalizar = styled.button`
  margin: 20px 16rem;
  width: 170px;
  height: 50px;
  background-color: rgba(4, 173, 120, 0.99);
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  :active {
    background-color: white;
    color: rgba(4, 173, 120, 0.99)
  }
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20rem
`;
