import type { BlogPost, BlogTag } from '../types/blog'

export const POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to My Blog',
    slug: 'welcome',
    description:
      'An introduction to this personal blog — a place for short notes, experiments, and things I find interesting.',
    tags: ['Introduction', 'Personal'],
    createdAt: '2025-09-15T12:00:00Z',
    updatedAt: '2025-09-15T12:00:00Z',
    path: '/blog/welcome',
    bannerImage:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Gaming Through the Years',
    slug: 'gaming-journey',
    description:
      'A retrospective on my gaming journey, from retro classics to modern AAA titles. The games that shaped my gaming taste and memories.',
    tags: ['Personal', 'Project'],
    createdAt: '2025-12-06T14:30:00Z',
    updatedAt: '2025-12-06T14:30:00Z',
    path: '/blog/gaming-journey',
    bannerImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop'
  }
]

export const getPostBySlug = (slug?: string): BlogPost | undefined => {
  if (!slug) return undefined
  return POSTS.find(p => p.slug === slug)
}

export const getAllTags = (): { tag: string; count: number }[] => {
  const map = new Map<string, number>()
  for (const p of POSTS) {
    for (const t of p.tags) {
      map.set(t, (map.get(t) ?? 0) + 1)
    }
  }
  return Array.from(map.entries()).map(([tag, count]) => ({ tag, count }))
}

export const getPostsByTag = (tag?: string): BlogPost[] => {
  if (!tag) return POSTS
  // tag comes from URL (string). Our BlogTag is a union of strings — cast safely.
  return POSTS.filter(p => p.tags.includes(tag as BlogTag))
}
