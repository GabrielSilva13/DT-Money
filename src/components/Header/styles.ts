import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 425px) {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const NewTransactionButton = styled.button`
  height: 50px;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  transition: background-color 250ms;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`
