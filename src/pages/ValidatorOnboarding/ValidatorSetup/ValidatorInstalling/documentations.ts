import { LINUX, MAC, WINDOWS } from '../../../../constants'

type DocumentationItem =
  | { type: 'code'; content: string }
  | { type: 'link'; content: string }
  | { type: 'text'; content: string }

type ExecClientData = {
  icon: string
  general: string
  documentation: Record<string, DocumentationItem[]>
}

type Documentation = Record<string, ExecClientData>

export const DOCUMENTATIONS: Documentation = {
  Nethermind: {
    icon: '/icons/nethermind-circle.png',
    general: 'General text for all platforms',
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
  Besu: {
    icon: '/icons/hyperledger-besu-circle.png',
    general: 'General text for all platforms',
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
  Geth: {
    icon: '/icons/gethereum-mascot-circle.png',
    general: 'General text for all platforms',
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
  Erigon: {
    icon: '/icons/erigon-circle.png',
    general: 'General text for all platforms',
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
  Nimbus: {
    icon: '/icons/NimbusDisabled.svg',
    general: 'General text for all platforms',
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
}
