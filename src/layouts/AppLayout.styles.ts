import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.palette.background.default};
  display: flex;
  flex-direction: column;
`

export const MainContent = styled.main`
  padding-top: 1rem;
  flex: 1;
`
