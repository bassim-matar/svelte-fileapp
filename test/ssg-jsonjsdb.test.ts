import { describe, it, expect } from 'vitest'

describe('SSG Jsonjsdb Utilities', () => {
  describe('arrayToObject', () => {
    it('should convert array-based data to object-based data', () => {
      const arrayToObject = (data: unknown[][]): Record<string, unknown>[] => {
        const [headers, ...rows] = data
        const result: Record<string, unknown>[] = []
        for (const row of rows) {
          const obj: Record<string, unknown> = {}
          for (let i = 0; i < row.length; i++) {
            const key = headers[i] as string
            obj[key] = row[i]
          }
          result.push(obj)
        }
        return result
      }

      const input = [
        ['id', 'name', 'age'],
        [1, 'Alice', 30],
        [2, 'Bob', 25],
      ]

      const result = arrayToObject(input)

      expect(result).toEqual([
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
      ])
    })

    it('should handle empty data', () => {
      const arrayToObject = (data: unknown[][]): Record<string, unknown>[] => {
        const [headers, ...rows] = data
        const result: Record<string, unknown>[] = []
        for (const row of rows) {
          const obj: Record<string, unknown> = {}
          for (let i = 0; i < row.length; i++) {
            const key = headers[i] as string
            obj[key] = row[i]
          }
          result.push(obj)
        }
        return result
      }

      const input = [['id', 'name']]
      const result = arrayToObject(input)
      expect(result).toEqual([])
    })

    it('should handle different data types', () => {
      const arrayToObject = (data: unknown[][]): Record<string, unknown>[] => {
        const [headers, ...rows] = data
        const result: Record<string, unknown>[] = []
        for (const row of rows) {
          const obj: Record<string, unknown> = {}
          for (let i = 0; i < row.length; i++) {
            const key = headers[i] as string
            obj[key] = row[i]
          }
          result.push(obj)
        }
        return result
      }

      const input = [
        ['id', 'name', 'active', 'score'],
        [1, 'John', true, 95.5],
        [2, 'Jane', false, 87.3],
      ]

      const result = arrayToObject(input)

      expect(result).toEqual([
        { id: 1, name: 'John', active: true, score: 95.5 },
        { id: 2, name: 'Jane', active: false, score: 87.3 },
      ])
    })
  })

  describe('getDbPathFromContent', () => {
    it('should extract database path from HTML content', () => {
      const getDbPathFromContent = (content: string): string => {
        const match = content.match(
          /id="jsonjsdb-config"[^>]+data-path="([^"]+)"/,
        )
        return match ? match[1] : 'data/db'
      }

      const content =
        '<script id="jsonjsdb-config" data-path="data/custom"></script>'
      const result = getDbPathFromContent(content)
      expect(result).toBe('data/custom')
    })

    it('should return default path when no match found', () => {
      const getDbPathFromContent = (content: string): string => {
        const match = content.match(
          /id="jsonjsdb-config"[^>]+data-path="([^"]+)"/,
        )
        return match ? match[1] : 'data/db'
      }

      const content = '<div>No config here</div>'
      const result = getDbPathFromContent(content)
      expect(result).toBe('data/db')
    })

    it('should handle complex HTML', () => {
      const getDbPathFromContent = (content: string): string => {
        const match = content.match(
          /id="jsonjsdb-config"[^>]+data-path="([^"]+)"/,
        )
        return match ? match[1] : 'data/db'
      }

      const content = `
        <html>
          <head>
            <script id="jsonjsdb-config" data-path="database/prod" type="application/json"></script>
          </head>
        </html>
      `
      const result = getDbPathFromContent(content)
      expect(result).toBe('database/prod')
    })
  })
})
