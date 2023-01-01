export interface IBlogsApiResponse {
  contents: IBlog[]
  totalCount: number
  offset: number
  limit: number
}

export interface IBlogDetailApiResponse {
  contents: IBlog[]
}

export interface IBlogCardData {
  title: string
  description: string
  image: string
  url: string
}

export interface IBlog {
  id: string
  title: string
  description: string
  body: string
  image: IBlogImage
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  categories: IBlogCaterory[]
  oldPublishedAt?: string
}

export interface IBlogImage {
  url: string
  height: number
  width: number
}

export interface IBlogCaterory {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  posts: {
    id: string
  }[]
}

export type IBlogCard = Pick<IBlog, 'title' | 'image' | 'publishedAt'> & {
  url: string
}
