import type { FC } from 'react'
import { Chip } from '@mui/material'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import type { BlogPost } from '../types/blog'
import {
  Card,
  Article,
  CardContent,
  CardTitle,
  StyledLink,
  MetaInfo,
  MetaItem,
  TagsContainer,
  Description,
  ReadMoreLink,
  TagLink
} from './BlogCard.styles'

interface BlogCardProps {
  post: BlogPost
  isCompact?: boolean
}

const BlogCard: FC<BlogCardProps> = ({ post, isCompact = false }) => {
  return (
    <Card as="li" elevation={0} $bannerImage={post.bannerImage}>
      <Article $isCompact={isCompact}>
        <CardContent>
          <StyledLink to={post.path}>
            <CardTitle variant="h2">{post.title}</CardTitle>
          </StyledLink>
          <MetaInfo>
            <MetaItem>
              <KeyboardDoubleArrowDownIcon color="inherit" sx={{ fontSize: 16 }} aria-hidden />
              <span>Created: {new Date(post.createdAt).toLocaleDateString()}</span>
            </MetaItem>

            <MetaItem>
              <KeyboardDoubleArrowUpIcon color="inherit" sx={{ fontSize: 16 }} aria-hidden />
              <span>Updated: {new Date(post.updatedAt).toLocaleDateString()}</span>
            </MetaItem>
          </MetaInfo>
          <TagsContainer>
            {post.tags.map(tag => (
              <TagLink key={tag} to={`/blog/tag/${encodeURIComponent(tag)}`}>
                <Chip label={tag} size="small" color="primary" />
              </TagLink>
            ))}
          </TagsContainer>
          <Description variant="body1">{post.description}</Description>
          <ReadMoreLink to={post.path}>Read more →</ReadMoreLink>
        </CardContent>
      </Article>
    </Card>
  )
}

export default BlogCard
