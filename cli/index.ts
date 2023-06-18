#!/usr/bin/env node
import { fetchGithubUser } from '../src/index'

// Get the first argument
const usernameArgument = process.argv[2]

// If there is no argument, exit the process
if (!usernameArgument) {
  console.log('Please provide a username')
  process.exit(1)
}

const user = await fetchGithubUser(usernameArgument)
console.log(user)
