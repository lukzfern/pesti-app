import styled from 'styled-components'
import { Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Card = styled(Paper)`
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.palette.background.paper};
  }
`

export const CardTitle = styled(Typography)`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.palette.primary.main};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`

export const MetaInfo = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.palette.text.secondary};
  margin-bottom: 0.5rem;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

export const Description = styled(Typography)`
  margin-bottom: 1rem;
  line-height: 1.5;
`

export const ReadMoreLink = styled(Link)`
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`