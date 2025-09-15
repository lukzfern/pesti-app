import type { FC } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Typography, Chip } from '@mui/material'
import type { BlogPost as BlogPostType } from '../../types/blog'
import {
  BlogPostContainer,
  BlogPostHeader,
  BlogPostTitle,
  MetaContainer,
  TagsContainer,
  Content
} from './BlogPost.styles'

const MOCK_POSTS: Record<string, BlogPostType> = {
  'welcome': {
    id: '1',
    title: 'Welcome to My Blog',
    slug: 'welcome',
    description: 'An introduction to my personal blog and what you can expect to find here.',
    tags: ['Introduction', 'Personal'],
    createdAt: '2025-09-15T12:00:00Z',
    updatedAt: '2025-09-15T12:00:00Z',
    path: '/blog/welcome'
  }
}

const BlogPost: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? MOCK_POSTS[slug] : null

  if (!post) {
    return <Navigate to="/" replace />
  }

  return (
    <BlogPostContainer elevation={0}>
      <BlogPostHeader>
        <BlogPostTitle variant="h1">
          {post.title}
        </BlogPostTitle>
        <MetaContainer>
          <Typography variant="body2">
            Created: {new Date(post.createdAt).toLocaleDateString()}
          </Typography>
          <Typography variant="body2">
            Updated: {new Date(post.updatedAt).toLocaleDateString()}
          </Typography>
        </MetaContainer>
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
      </BlogPostHeader>
      
      <Content>
        <Typography variant="body1">
          This is a sample blog post content. In a real application, 
          this would be populated with rich text content from your CMS 
          or markdown files.
        </Typography>
      </Content>
    </BlogPostContainer>
  )
}

export default BlogPost