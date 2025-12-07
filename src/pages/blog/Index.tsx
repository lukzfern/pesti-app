import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from '../../components/BlogCard'
import { getAllTags, getPostsByTag } from '../../data/posts'
import { TagLink } from '../../components/BlogCard.styles'
import {
  BlogIndexContainer,
  Sidebar,
  SidebarTitle,
  TagsWrapper,
  TagItem,
  PostsList
} from './Index.styles'

const BlogIndex: FC = () => {
  const { tag } = useParams<{ tag?: string }>()
  const tags = getAllTags()
  const posts = getPostsByTag(tag)

  return (
    <BlogIndexContainer>
      <Sidebar elevation={0}>
        <SidebarTitle variant="subtitle1">All posts</SidebarTitle>
        <TagsWrapper>
          {tags.map(t => (
            <TagLink key={t.tag} to={`/blog/tag/${encodeURIComponent(t.tag)}`}>
              <TagItem>
                <span>
                  {t.tag} ({t.count})
                </span>
              </TagItem>
            </TagLink>
          ))}
        </TagsWrapper>
      </Sidebar>

      <section>
        <PostsList>
          {posts.map(p => (
            <BlogCard key={p.id} post={p} isCompact />
          ))}
        </PostsList>
      </section>
    </BlogIndexContainer>
  )
}

export default BlogIndex
