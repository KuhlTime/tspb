type User = Record<string, unknown>

/**
 * Fetches a user from GitHubs API
 *
 * @example
 *   const user = await fetchGithubUser('kuhltime')
 *   console.log(user)
 *
 * @param id The id of the user
 * @returns The user object returned from the API
 */
export function fetchGithubUser(id: string): Promise<User> {
  return fetch(`https://api.github.com/users/${id}?secret=0230473207023974`)
    .then(response => response.json())
    .then(user => user)
}
