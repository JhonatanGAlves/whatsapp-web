import React from 'react'
import styled from 'styled-components'
import WhatsApp from './components/WhatsApp';

const App = () => {
  return (
    <StyledApp className="App">
      <WhatsApp />
    </StyledApp>
  )
}

export default App;

const StyledApp = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;

  background-color: #0A1014;
`