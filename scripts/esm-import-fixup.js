import fs from 'fs'

// Load all files in the dist/esm/**/*.js
function readFilesDeep(path) {
  const files = []

  if (!fs.existsSync(path)) {
    console.log(`Path ${path} does not exist. Skipping...`)
    return files
  }

  fs.readdirSync(path).forEach(file => {
    const filePath = `${path}/${file}`
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      files.push(...readFilesDeep(filePath))
    } else {
      files.push(filePath)
    }
  })

  return files
}

const regex = /(?<=(export|import).*?(?=from)from ')(([^'])*)/gm

for (const filePath of readFilesDeep('dist/esm')) {
  let content = fs.readFileSync(filePath, 'utf8')
  content = content.replace(regex, '$2.js')
  fs.writeFileSync(filePath, content, 'utf8')
}

for (const filePath of readFilesDeep('dist/cli')) {
  let content = fs.readFileSync(filePath, 'utf8')
  content = content.replace(regex, '$2.js')
  fs.writeFileSync(filePath, content, 'utf8')
}
