import type { FC } from 'react'
import type { BlogPost } from '../types/blog'
import BlogCard from '../components/BlogCard'
import { HomeContainer, HomeTitle, BlogList } from './Home.styles'

const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to My Blog',
    slug: 'welcome',
    description: 'An introduction to my personal blog and what you can expect to find here. Join me on this journey of sharing thoughts, experiences, and learnings.',
    tags: ['Introduction', 'Personal'],
    createdAt: '2025-09-15T12:00:00Z',
    updatedAt: '2025-09-15T12:00:00Z',
    path: '/blog/welcome'
  }
]

const Home: FC = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        Latest Posts
      </HomeTitle>
      <BlogList>
        {MOCK_POSTS.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </BlogList>
    </HomeContainer>
  )
}

export default Home