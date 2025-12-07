import styled from 'styled-components'
import { Typography, Paper } from '@mui/material'

export const BlogIndexContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.5rem;
`

export const Sidebar = styled(Paper)`
  padding: 1.5rem;
  background: color-mix(in srgb, var(--brand-tag-fg, #c9b8ff) 4%, transparent 96%);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  height: fit-content;
  position: sticky;
  top: 2rem;
`

export const SidebarTitle = styled(Typography)`
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--brand-tag-fg, ${props => props.theme.palette.text.primary});
`

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const TagItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.theme.palette.text.primary};
  width: 100%;
  font-size: 0.95rem;
  transition: opacity 0.18s ease;

  &:hover {
    opacity: 0.85;
  }
`

export const PostsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
