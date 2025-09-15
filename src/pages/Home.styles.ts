import styled from 'styled-components'
import { Typography } from '@mui/material'

export const HomeContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`

export const HomeTitle = styled(Typography).attrs({ variant: 'h1' })`
  font-size: 2rem;
  margin-bottom: 2rem;
`

export const BlogList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`