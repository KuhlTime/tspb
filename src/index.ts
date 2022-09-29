type User = Record<string, unknown>

export function fetchGithubUser(id: string): Promise<User> {
  return fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(user => user)
}
