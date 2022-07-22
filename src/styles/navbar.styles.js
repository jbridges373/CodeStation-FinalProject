import styled from "styled-components";

export const NavbarStyled = styled.div`
  border: solid 1px black;
  padding: 10px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: right;
  }
`;
export const NavItemStyled = styled.div`
  border: solid 1px black;
  padding: 10px;
  font-size: 20px;
  margin: 10px;
  margin-right: 20px;
`;
