import { fetchGithubUser } from '../src/index'

describe('#fetchGithubUser() using async/await', () => {
  it('should load user data', async () => {
    const data = await fetchGithubUser('kuhltime')
    expect(data).toBeDefined()
  })
})
