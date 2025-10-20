import fs from 'fs/promises'
import path from 'path'

export function updateRouterIndex(pageDir: string) {
  return {
    name: 'update-router-index',
    async buildStart() {
      const routerIndexFile = path.join(pageDir, '.router-index.ts')

      let imports = ''
      let type = `\nimport type { Component } from 'svelte'`
      type += `\ntype RouteConfig = { component: Component<any>; param?: string }\n`
      let content = `\nexport default {`

      const files = await fs.readdir(pageDir)
      for (const file of files) {
        if (!file.endsWith('.svelte')) continue
        const filename = file.replace('.svelte', '')
        const moduleName = filename.split('[')[0]
        const routeName =
          moduleName.charAt(0).toLowerCase() + moduleName.slice(1)
        let param = ''
        if (filename.includes('['))
          param = `, param: "${filename.split('[')[1].split(']')[0]}"`
        const modulePath = `./${filename}.svelte`
        imports += `import ${moduleName} from "${modulePath}"\n`
        content += `\n  ${routeName}: { component: ${moduleName}${param} },`
      }
      content += '\n} as const satisfies Record<string, RouteConfig>\n'
      await fs.writeFile(routerIndexFile, imports + type + content, 'utf8')
    },
  }
}
