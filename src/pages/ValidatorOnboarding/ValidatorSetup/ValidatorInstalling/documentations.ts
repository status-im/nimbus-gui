import { LINUX, MAC, WINDOWS } from '../../../../constants'

type DocumentationItem =
  | { type: 'code'; content: string }
  | { type: 'link'; content: string }
  | { type: 'text'; content: string }

type ExecClientData = {
  icon: string
  general?: string
  documentation: Record<string, DocumentationItem[]>
}

type Documentation = Record<string, ExecClientData>

export const DOCUMENTATIONS: Documentation = {
  Nethermind: {
    icon: '/icons/nethermind-circle.png',
    general:
      'Ethereum’s long awaited shift from Proof of Work (POW) to Proof of Stake (POS) known as The Merge happened on September 15, 2022 and came with fundamental changes to the network. The most notable change is the addition of the Beacon chain (Consensus layer) which replaced Proof of Work mining. It is coordinating and pseudorandomly selecting block producers from the pool of stakers / validators in a way that makes it extremely difficult for validators to coordinate attacks on the network. The Merge changed how operators run nodes on the Ethereum blockchain. A node now needs two clients that work together as a pair. In addition to the Execution Layer client (e.g. Nethermind) you need a Consensus Layer client that connects to the Beacon chain and runs the POS algorithm. This guide will show you everything you need to know to operate an Ethereum node. It will show how to connect to the Goerli, Sepolia and Chiado test networks as well. An easy way to run both CL and EL clients is by using Sedge. Sedge is a setup tool for PoS network/chain validators and nodes. Currently, Sedge supports multiple Linux distributions and MacOS.',
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
  Besu: {
    icon: '/icons/hyperledger-besu-circle.png',
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
  Geth: {
    icon: '/icons/gethereum-mascot-circle.png',
    general:
      'There are several ways to install Geth, including via a package manager, downloading a pre-built bundle, running as a docker container or building from downloaded source code. On this page the various installation options are explained for several major operating systems. Users prioritizing ease of installation should choose to use a package manager or prebuilt bundle. Users prioritizing customization should build from source. It is important to run the latest version of Geth because each release includes bugfixes and improvements over the previous versions. The stable releases are recommended for most users because they have been fully tested. A list of stable releases can be found here. Instructions for updating existing Geth installations are also provided in each section.',
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
  Erigon: {
    icon: '/icons/erigon-circle.png',
    general:
      "In order to use Erigon, the software has to be installed first. There are several ways to install Erigon, depending on the operating system and the user's choice of installation method, e.g. using a package manager, container or building from source.",
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
  Nimbus: {
    icon: '/icons/NimbusDisabled.svg',
    documentation: {
      [MAC]: [{ type: 'text', content: 'Text for mac' }],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
}
