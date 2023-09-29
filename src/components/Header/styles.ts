import styled from 'styled-components'

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    gap: 30px;
    height: 70px;
    width: 100%;
    padding-inline: 20px;
    box-shadow: 0px 1px 7px 0px rgba(149, 149, 149, 0.25);

    img {
    cursor: pointer;
    }
`
export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`
export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 530px;
  width: 100%;
  padding: 8px 9px;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
`
export const Input = styled.input`
  background-color: #ffffff;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 14;
  ::placeholder {
    color: #9a9a9a;
    font-size: 14px;
  }
  &:focus{
    outline: 0;
    box-shadow: 0 0 0 0;
  }
`