import product from './product/add'

describe('test jest install', () => {
  it('should return 4 ', () => {
    expect(product(1, 2)).toBe(3)
  })
})