import { XStack } from 'tamagui'

import TitleLogo from '../../components/General/TitleLogo'

const ManagementHeader = () => {
  return (
    <XStack style={{ width: '100%', justifyContent: 'space-between' }}>
      <TitleLogo subtitle="Validator Management" />
    </XStack>
  )
}

export default ManagementHeader
