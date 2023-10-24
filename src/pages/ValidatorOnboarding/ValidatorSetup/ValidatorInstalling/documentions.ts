import { LINUX, MAC, WINDOWS } from '../../../../constants'

type DocumentationItem =
  | { type: 'code'; content: string }
  | { type: 'link'; content: string }
  | { type: 'text'; content: string }

export const DOCUMENTATION: Record<string, Record<string, DocumentationItem[]>> = {
  Nethermind: {
    [MAC]: [{ type: 'text', content: 'Text for mac' }],
    [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
    [LINUX]: [{ type: 'text', content: 'Text for linux' }],
  },
  Besu: {
    [MAC]: [{ type: 'text', content: 'Text for mac' }],
    [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
    [LINUX]: [{ type: 'text', content: 'Text for linux' }],
  },
  Geth: {
    [MAC]: [{ type: 'text', content: 'Text for mac' }],
    [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
    [LINUX]: [{ type: 'text', content: 'Text for linux' }],
  },
  Erigon: {
    [MAC]: [{ type: 'text', content: 'Text for mac' }],
    [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
    [LINUX]: [{ type: 'text', content: 'Text for linux' }],
  },
  Nimbus: {},
}
