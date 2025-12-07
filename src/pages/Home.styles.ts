import styled from 'styled-components'
import { Typography } from '@mui/material'

export const HomeContainer = styled.div`
  margin: 2rem auto;
  padding: 0;
`

export const BlogList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const MainInfo = styled.section`
  margin-inline: 300px;
  padding: 1.25rem 0 1.5rem;
  color: ${props => props.theme.palette.text.primary};

  @media (max-width: 768px) {
    margin-inline: 1rem;
    padding: 1rem 0;
  }
`

export const MainInfoTitle = styled(Typography).attrs({ variant: 'h2' })`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`

export const MainInfoDescription = styled(Typography).attrs({ variant: 'body1' })`
  color: ${props => props.theme.palette.text.secondary};
  line-height: 1.6;
`
