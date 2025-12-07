import type { FC } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Typography, Chip } from '@mui/material'
import {
  BlogPostContainer,
  BannerContainer,
  BlogPostHeader,
  BlogPostTitle,
  MetaContainer,
  TagsContainer,
  Content
} from './BlogPost.styles'

import { getPostBySlug } from '../../data/posts'

const BlogPost: FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/" replace />
  }

  return (
    <BlogPostContainer elevation={0}>
      {post.bannerImage && <BannerContainer $bannerImage={post.bannerImage} />}
      <BlogPostHeader>
        <BlogPostTitle variant="h1">{post.title}</BlogPostTitle>
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
            <Chip key={tag} label={tag} size="small" color="primary" />
          ))}
        </TagsContainer>
      </BlogPostHeader>

      <Content>
        <Typography variant="body1">
          This is a sample blog post content. In a real application, this would be populated with
          rich text content from your CMS or markdown files.
        </Typography>
      </Content>
    </BlogPostContainer>
  )
}

export default BlogPost
