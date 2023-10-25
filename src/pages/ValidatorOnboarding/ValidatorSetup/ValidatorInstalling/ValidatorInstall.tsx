import { YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { RootState } from '../../../../redux/store'
import { DOCUMENTATIONS } from './documentations'
import { MAC } from '../../../../constants'
import OSCards from './OSCards'

const ValidatorSetupInstall = () => {
  const [selectedOS, setSelectedOS] = useState(MAC)
  const selectedClient = useSelector((state: RootState) => state.execClient.selectedClient)

  const handleOSCardClick = (os: string) => {
    setSelectedOS(os)
  }

  return (
    <YStack style={{ width: '100%', padding: '26px 32px' }}>
      <Text size={27} weight={'semibold'}>
        Validator Setup
      </Text>
      <YStack
        style={{
          border: '2px solid #1B273D0D',
          borderRadius: '16px',
          padding: '19px 16px',
          marginBottom: '4px',
          marginTop: '10px',
        }}
        space={'$2'}
      >
        <Text size={19}>Installing {selectedClient}</Text>
        <Markdown components={{ a: Linkk }}>{DOCUMENTATIONS[selectedClient].general}</Markdown>
        <OSCards selectedOS={selectedOS} handleOSCardClick={handleOSCardClick} />
        <Markdown children={DOCUMENTATIONS[selectedClient].documentation[selectedOS]} />
      </YStack>
    </YStack>
  )
}

const Linkk = (props: any) => {
  return (
    <Link to={props.href} target="_blank">
      {props.children}
    </Link>
  )
}

export default ValidatorSetupInstall
