import type { FC } from 'react'
import { CircularProgress } from '@mui/material'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
`

const LoadingText = styled.div`
  color: ${props => props.theme.palette.text.secondary};
  font-size: 0.875rem;
  margin-top: 1rem;
  
  /* Subtle pulse animation */
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
  
  animation: pulse 2s ease-in-out infinite;
`

const StyledCircularProgress = styled(CircularProgress)`
  color: ${props => props.theme.palette.primary.main};
`

const LoadingMessage = styled.span`
  font-family: ${props => props.theme.typography.fontFamily};
  font-weight: 400;
`

const messages = [
  "Almost there...",
  "Just a moment...",
  "Loading your content...",
  "Making things perfect...",
  "Brewing some magic..."
]

const LoadingScreen: FC = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]

  return (
    <LoadingContainer>
      <StyledCircularProgress size={40} thickness={4} />
      <LoadingText>
        <LoadingMessage>{message}</LoadingMessage>
      </LoadingText>
    </LoadingContainer>
  )
}

export default LoadingScreen