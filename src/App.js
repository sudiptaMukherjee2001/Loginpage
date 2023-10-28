import React from 'react'
import { Container } from './Component/Styled/Container.styles'
import Maincontent from './Component/Maincontent'
import { ThemeProvider } from 'styled-components'
function App() {
  const themes = {

  }
  return (
    <ThemeProvider theme={themes}>
      <>
        <Container>
          <Maincontent />
        </Container>
      </>
    </ThemeProvider>

  )
}

export default App