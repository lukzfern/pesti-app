import type { FC } from 'react'
import type { BlogPost } from '../types/blog'
import BlogCard from '../components/BlogCard'
import {
  HomeContainer,
  BlogList,
  MainInfo,
  MainInfoTitle,
  MainInfoDescription
} from './Home.styles'
import { POSTS } from '../data/posts'

const MOCK_POSTS: BlogPost[] = POSTS

const Home: FC = () => {
  return (
    <HomeContainer>
      <MainInfo>
        <MainInfoTitle>Hi — Lucas here</MainInfoTitle>
        <MainInfoDescription>
          Short notes, experiments and small things I find interesting. Mostly dev-focused—tools,
          tips, and occasional project write-ups.
        </MainInfoDescription>
      </MainInfo>
      <BlogList>
        {MOCK_POSTS.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </BlogList>
    </HomeContainer>
  )
}

export default Home
