import { describe, expect, it } from 'vitest'
import { add } from '../src'

describe('add', async () => {
  it('Should add numbers', () => {
    const sum = add(1, 2)
    expect(sum).toEqual(3)
  })
})
