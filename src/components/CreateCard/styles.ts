import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CreateForm = styled.form`
  margin: 0 auto;
  z-index: 2;
  margin-top: 26px;
  max-width: 530px;
  width: 100%;
  position: relative;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  padding: 14px 20px;
  @media (max-width: 800px) {
    border-radius: 25px;
  }
`
export const CreateInputTitle = styled.input`
  background-color: red;
  width: 100%;
  color: #333;
  background: none;
  border: none;
  font-size: 14.2px;
  font-weight: 700;
  &:focus-within {
    outline: none;
  }
`
export const CreateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  img {
    cursor: pointer;
  }
`
export const InputFavoriteWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 0px;
    top: 0px;
    pointer-events: auto;
  }
`
export const CreateInputFavorite = styled.input`
  position: relative;
  z-index: 1;
  cursor: pointer;
  height: 20px;
  width: 22px;
  appearance: none;
  ::placeholder {
    color: {error ? 'red' : '#333')};
  }
  &:checked + svg {
    path {
      transition: all 0.2s;
      fill: #ffa000;
      stroke: #ffa000;
    }
  }
`

export const Line = styled.span`
  background-color: #d9d9d9;
  width: 100%;
  position: absolute;
  height: 1px;
  left: 0px;
  top: 45px;
`

export const CreateTextArea = styled.textarea`
  padding-top: 16px;
  border: none;
  resize: none;
  width: 100%;
  &:focus-within {
    outline: none;
  }
`
export const AddNote = styled(motion.button)`
  background-color: transparent;
  padding: 8px 12px;
  transition: background 0.4s ease;
  border-radius: 3px;
  cursor: pointer;
  float: right;
  &:hover {
    background-color: #f1f1f1;
  }
`