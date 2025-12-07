import styled from 'styled-components'
import { Paper, Typography } from '@mui/material'

export const BannerContainer = styled.div<{ $bannerImage?: string }>`
  width: 100%;
  height: 300px;
  margin: -2rem -2rem 2rem -2rem;
  border-radius: 8px 8px 0 0;
  background-image: ${props => (props.$bannerImage ? `url('${props.$bannerImage}')` : 'none')};
  background-size: cover;
  background-position: center;
  filter: grayscale(25%);
  opacity: 0.15;
  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: 0.25;
  }
`

export const BlogPostContainer = styled(Paper)`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;

  &:hover ${BannerContainer} {
    opacity: 0.25;
  }
`

export const BlogPostHeader = styled.header`
  margin-bottom: 2rem;
`

export const BlogPostTitle = styled(Typography)`
  margin-bottom: 1rem;
`

export const MetaContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.palette.text.secondary};
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`

export const Content = styled.div`
  line-height: 1.75;
  font-size: 1.125rem;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
  }
`
