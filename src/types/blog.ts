export type BlogTag = 
  | 'Personal' 
  | 'Tech' 
  | 'Travel' 
  | 'Thoughts' 
  | 'Introduction' 
  | 'Project' 
  | 'Tutorial'

export interface BlogPost {
  id: string
  title: string
  slug: string
  description: string
  tags: BlogTag[]
  createdAt: string
  updatedAt: string
  path: string
}