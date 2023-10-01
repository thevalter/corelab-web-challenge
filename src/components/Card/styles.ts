import { motion } from 'framer-motion';
import styled from 'styled-components';

type ContainerCardProps = {
    color: string
}
export const ContainerCard = styled(motion.form) <ContainerCardProps>`
max-width: 800px;
min-width: 375px;
min-height: 440px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: ${({ color }) => color || '#fff'};
  transition: background 0.5s ease;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  padding: 14px 20px;
  border-radius: 25px;
  font-size: 14px;
  img {
    cursor: pointer;
  }
  @media (max-width: 400px) {
    max-width: initial;
    min-width: initial;
    min-height: 360px;
  }
`

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  img {
    cursor: pointer;
  }
`
export const CardInput = styled(motion.input)`
  background-color: red;
  width: 100%;
  color: #333;
  background: none;
  border: none;
  font-size: 14px;
  &:focus-within {
    outline: none;
  }
`
export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const CardTextArea = styled(motion.textarea)`
  background-color: inherit;
  padding-top: 20px;
  border: none;
  resize: none;
  width: 100%;
  height: 100%;
  font-size: 14px;
  flex-grow: 1;
  &:focus-within {
    outline: none;
  }
`

export const EditOptions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
`
export const EditColor = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  width: 28.901px;
  height: 28.901px;
  transition: background-color 0.4s ease;
`

export const EditNote = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  width: 28.901px;
  height: 28.901px;
  transition: background-color 0.4s ease;
  :hover {
    background-color: '#E8E8E8';
  }
`
export const CardTitle = styled.p``
export const CardContent = styled(motion.p)`
  flex-grow: 1;
  padding-top: 20px;
`