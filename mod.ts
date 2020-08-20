import { readLines } from 'https://deno.land/std/io/mod.ts'

const tils: TILs = {}
let count: number = 0

async function readFiles(dirName: string, path: string): Promise<void> {
  tils[dirName] = []
  for await (const { isFile, name } of Deno.readDir(path)) {
    if (isFile && name.endsWith('.md')) {
      const file: Deno.File = await Deno.open(`${path}/${name}`)
      const firstLine: IteratorResult<string, any> = await readLines(
        file
      ).next()
      file.close()

      const title: string = firstLine?.value.replace(/^#*/, '').trim()

      const deepCopy: Array<TIL> = tils[dirName].map((text: any) => ({
        ...text,
      }))
      tils[dirName] = [...deepCopy, { title, fileName: name }]
    }
  }
}

for await (const { isDirectory, name } of Deno.readDir('./'))
  isDirectory && !name.startsWith('.') && (await readFiles(name, `./${name}`))
for (const category in tils) count += tils[category].length

const categories: string[] = Object.keys(tils).sort()
//prettier-ignore
const readme: string = 
  `# TIL - Today I Learned 🤤

  ---
    
  Trying to keep a collection of short texts about things I've learned. TIL (Today I Learned). Inspired on [jbranchaud/til](https://github.com/jbranchaud/til) list.
  > (pt-BR) Tentando manter uma lista de pequenos textos sobre as coisas que aprendi. HEA (Hoje Eu Aprendi 😅). Inspirado na lista [jbranchaud/til](https://github.com/jbranchaud/til).

  _${count} TILs and counting...?_ 🙈

  I also made a [script](./mod.ts) to generate the \`README.md\` file, maybe it's usefull for your list:
  \`\`\`zsh
  $ deno run --allow-read --allow-write mod.ts
  \`\`\`

  ---
    
  ### Categories
  ${categories
    .map((category: string) => `* [${category}](#${category.toLowerCase()})\n`)
    .join('')}
  
  ---

  ${categories
    .map(
      (category) =>
        `## ${category}
      ${tils[category]
        .map((text: any) => `- [${text.title}](${category}/${text.fileName})\n`)
        .join('')}`
    )
    .join('')}

  `
  // Replace all consecutive white spaces that are not a line break
  .replace(/[^\S\r\n]+/g, ' ')
  // Trim white spaces in each line
  .replace(/^[^\S\r\n]+|[^\S\r\n]+$/gm, '')
  // Replace multiple line break
  .replace(/\n{3,}/g, '\n\n')
  // Prevent start/end line break
  .trim()

const encoder: TextEncoder = new TextEncoder()
await Deno.writeFile('./README.md', encoder.encode(readme))

// Types
interface TILs {
  [key: string]: Array<TIL>
}
type TIL = {
  title: string
  fileName: string
}
