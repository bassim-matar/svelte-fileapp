import { readdirSync, writeFileSync, readFileSync, statSync } from 'fs'
import { join } from 'path'
import type { Plugin } from 'vite'

function readSchemasRecursively(dir: string): unknown[] {
  const schemas: unknown[] = []
  const files = readdirSync(dir)
  for (const file of files) {
    if (file.startsWith('.')) continue
    const filePath = join(dir, file)
    const stat = statSync(filePath)
    if (stat.isDirectory()) {
      schemas.push(...readSchemasRecursively(filePath))
    } else if (file.endsWith('.schema.json')) {
      const content = readFileSync(filePath, 'utf-8')
      schemas.push(JSON.parse(content))
    }
  }
  return schemas
}

function generateSchemasFile(schemasDir: string, outputFile: string): void {
  const schemas = readSchemasRecursively(schemasDir).sort((a, b) => {
    const aTitle = (a as { title?: string }).title ?? ''
    const bTitle = (b as { title?: string }).title ?? ''
    return aTitle.localeCompare(bTitle)
  })
  writeFileSync(outputFile, JSON.stringify(schemas, null, 2))
}

export function bundleSchemas(schemasDir: string, outputFile: string): Plugin {
  return {
    name: 'bundle-schemas',
    configResolved() {
      generateSchemasFile(schemasDir, outputFile)
    },
  }
}
