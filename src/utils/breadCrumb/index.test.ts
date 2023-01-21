import { getBreadCrumbDataFromBlog } from '.'
import {
  blogDataChildrenMock,
  resultChildrenMock,
  blogDataParentMock,
  resultParentMock,
} from './__mocks__'

describe('getBreadCrumbDataFromBlog', () => {
  describe('子カテゴリ の場合', () => {
    test('パンくず情報が取得できる', () => {
      const result = getBreadCrumbDataFromBlog(blogDataChildrenMock)
      expect(result).toEqual(resultChildrenMock)
    })
  })

  describe('親カテゴリ の場合', () => {
    test('パンくず情報が取得できる', () => {
      const result = getBreadCrumbDataFromBlog(blogDataParentMock)
      expect(result).toEqual(resultParentMock)
    })
  })
})
