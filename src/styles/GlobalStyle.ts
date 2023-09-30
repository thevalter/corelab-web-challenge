import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
:root {
  /* max-width: 1100px; */
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
  min-height:100vh;
  margin: 0 auto;

}
textarea{
    font-family:inherit;
  }

body {
  background: #F0F2F5;
}

a {
  color: inherit;
  text-decoration: none;
}
button{
  border: none;
}
ul{
  list-style: none;
}

.inValid::placeholder{
  color: red;
}

.valid::placeholder{
  color: '#333';
}

`

export const MainContainer = styled.main`
  padding-bottom: 100px;
  padding-inline: 25px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`