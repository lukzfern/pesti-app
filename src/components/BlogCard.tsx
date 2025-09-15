import type { FC } from 'react'
import { Chip } from '@mui/material'
import type { BlogPost } from '../types/blog'
import {
  Card,
  CardTitle,
  StyledLink,
  MetaInfo,
  TagsContainer,
  Description,
  ReadMoreLink
} from './BlogCard.styles'

interface BlogCardProps {
  post: BlogPost
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <Card as="li" elevation={0}>
      <StyledLink to={post.path}>
        <CardTitle variant="h2">
          {post.title}
        </CardTitle>
      </StyledLink>
      <MetaInfo>
        <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
        <span>Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
      </MetaInfo>
      <TagsContainer>
        {post.tags.map(tag => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            color="primary"
          />
        ))}
      </TagsContainer>
      <Description variant="body1">
        {post.description}
      </Description>
      <ReadMoreLink to={post.path}>
        Read more →
      </ReadMoreLink>
    </Card>
  )
}

export default BlogCard