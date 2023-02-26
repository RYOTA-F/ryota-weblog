import type { IMicroCmsUsecaseTag } from './types'
/* Const */
import { API } from '@/const/index'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { IBlogsApiResponse } from '@/types/microCMS/blog'
import { ITagApiResponse } from '@/types/microCMS/tag'
/* Utils */
import { getBreadCrumbDataFromTag } from './utils/getBreadCrumb'
import { getSeoFromTag } from './utils/getSeo'

export class MicroCmsUsecaseTagProd implements IMicroCmsUsecaseTag {
  getTags: IMicroCmsUsecaseTag['getTags'] = async () => {
    const tags = await client.get<ITagApiResponse>({
      endpoint: API.TAG.END_POINT,
      // デフォルトで limitが10件 になるのを解除
      queries: { limit: 9999 },
    })

    return {
      tags: tags.contents,
    }
  }

  getTagById: IMicroCmsUsecaseTag['getTagById'] = async (params) => {
    // タグ情報を取得
    const { contents } = await client.get<ITagApiResponse>({
      endpoint: API.TAG.END_POINT,
      queries: { ids: params.id },
    })

    // 投稿一覧を取得
    const blogs = await client.get<IBlogsApiResponse>({
      endpoint: API.BLOG.END_POINT,
      queries: {
        filters: `tags[contains]${params.id}`,
        offset: params?.offset ? params?.offset : 0,
        // TODO: リミット10件に設定
        limit: 9999,
      },
    })

    // SEO情報を取得
    const seo = getSeoFromTag(contents[0])

    // パンくず情報を取得
    const breadCrumb = getBreadCrumbDataFromTag(contents[0].name)

    return {
      tag: contents[0],
      blogs: blogs.contents,
      breadCrumb,
      seo,
    }
  }
}
