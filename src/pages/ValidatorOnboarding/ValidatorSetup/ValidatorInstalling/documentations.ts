import { LINUX, MAC, WINDOWS } from '../../../../constants'

type ExecClientData = {
  icon: string
  general: string
  documentation: Record<string, string>
}

type Documentation = Record<string, ExecClientData>

export const DOCUMENTATIONS: Documentation = {
  Nethermind: {
    icon: '/icons/nethermind-circle.png',
    general:
      'Ethereum’s long awaited shift from Proof of Work (POW) to Proof of Stake (POS) known as The Merge happened on September 15, 2022 and came with fundamental changes to the network. The most notable change is the addition of the Beacon chain (Consensus layer) which replaced Proof of Work mining. It is coordinating and pseudorandomly selecting block producers from the pool of stakers / validators in a way that makes it extremely difficult for validators to coordinate attacks on the network. The Merge changed how operators run nodes on the Ethereum blockchain. A node now needs two clients that work together as a pair. In addition to the Execution Layer client (e.g. Nethermind) you need a Consensus Layer client that connects to the Beacon chain and runs the POS algorithm. This guide will show you everything you need to know to operate an Ethereum node. It will show how to connect to the Goerli, Sepolia and Chiado test networks as well. An easy way to run both CL and EL clients is by using Sedge. Sedge is a setup tool for PoS network/chain validators and nodes. Currently, Sedge supports multiple Linux distributions and MacOS.',
    documentation: {
      [MAC]: 'Text for mac',
      [WINDOWS]: 'Text for windows',
      [LINUX]: 'Text for linux',
    },
  },
  Besu: {
    icon: '/icons/hyperledger-besu-circle.png',
    general: '',
    documentation: {
      [MAC]: 'Text for mac',
      [WINDOWS]: 'Text for windows',
      [LINUX]: 'Text for linux',
    },
  },
  Geth: {
    icon: '/icons/gethereum-mascot-circle.png',
    general: [
      {
        type: 'text',
        content:
          'There are several ways to install Geth, including via a package manager, downloading a pre-built bundle, running as a docker container or building from downloaded source code. On this page the various installation options are explained for several major operating systems. Users prioritizing ease of installation should choose to use a package manager or prebuilt bundle. Users prioritizing customization should build from source. It is important to run the latest version of Geth because each release includes bugfixes and improvements over the previous versions. The stable releases are recommended for most users because they have been fully tested. A list of stable releases can be found',
      },
      {
        type: 'link',
        content: 'here',
        to: 'https://github.com/ethereum/go-ethereum/releases',
      },
      {
        type: 'text',
        content:
          '. Instructions for updating existing Geth installations are also provided in each section.',
      },
    ],
    documentation: {
      [MAC]: [
        {
          type: 'text',
          content:
            'The easiest way to install go-ethereum is to use the Geth Homebrew tap. The first step is to check that Homebrew is installed. The following command should return a version number.',
        },
        {
          type: 'code',
          content: ['brew -v'],
        },
        {
          type: 'text',
          content:
            'If a version number is returned, then Homebrew is installed. If not, Homebrew can be installed by following the instructions here. With Homebrew installed, the following commands add the Geth tap and install Geth:',
        },
        {
          type: 'code',
          content: ['brew tap ethereum/ethereum', 'brew install ethereum'],
        },
        {
          type: 'text',
          content:
            "The previous command installs the latest stable release. Developers that wish to install the most up-to-date version can install the Geth repository's master branch by adding the --devel parameter to the install command:",
        },
        {
          type: 'code',
          content: ['brew install ethereum --devel'],
        },
        {
          type: 'text',
          content:
            'These commands install the core Geth software and the following developer tools: clef, devp2p, abigen, bootnode, evm, and rlpdump. The binaries for each of these tools are saved in /usr/local/bin/. The full list of command line options can be viewed here or in the terminal by running geth --help.',
        },
        {
          type: 'text',
          content:
            'Updating an existing Geth installation to the latest version can be achieved by stopping the node and running the following commands:',
        },
        {
          type: 'code',
          content: ['brew update', 'brew upgrade', 'brew reinstall ethereum'],
        },
        {
          type: 'text',
          content:
            'When the node is started again, Geth will automatically use all the data from the previous version and sync the blocks that were missed while the node was offline.',
        },
      ],
      [WINDOWS]: [{ type: 'text', content: 'Text for windows' }],
      [LINUX]: [{ type: 'text', content: 'Text for linux' }],
    },
  },
  Erigon: {
    icon: '/icons/erigon-circle.png',
    general:
      "In order to use Erigon, the software has to be installed first. There are several ways to install Erigon, depending on the operating system and the user's choice of installation method, e.g. using a package manager, container or building from source.",
    documentation: {
      [MAC]: 'Text for mac',
      [WINDOWS]: 'Text for windows',
      [LINUX]: 'Text for linux',
    },
  },
  Nimbus: {
    icon: '/icons/NimbusDisabled.svg',
    general: '',
    documentation: {
      [MAC]: 'Text for mac',
      [WINDOWS]: 'Text for windows',
      [LINUX]: 'Text for linux',
    },
  },
}
