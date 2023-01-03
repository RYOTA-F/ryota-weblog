import { FC } from 'react'
/* Components */
import BlogDetailHeader from '@/components/assembles/BlogDetailHeader'
import BlogBody from '@/components/presentationals/BlogBody'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { BlogDetailWrapper } from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

export type TBlogDetail = Omit<IBlog, 'breadCrumb'>

const BlogDetail: FC<TBlogDetail> = ({
  title,
  description,
  body,
  image,
  publishedAt,
  oldPublishedAt,
  categories,
  tags,
  tableOfContents,
}) => {
  return (
    <BlogDetailWrapper aria-label={ARIA_LABEL.BLOG_DETAIL}>
      <BlogDetailHeader
        title={title}
        description={description}
        image={image}
        categories={categories}
        tags={tags}
        publishedAt={oldPublishedAt ? oldPublishedAt : publishedAt}
        tableOfContents={tableOfContents}
      />
      <BlogBody body={body} />
    </BlogDetailWrapper>
  )
}

export default BlogDetail
export * from './const'
