import { XStack } from 'tamagui'
import Tag from '../General/Tag'

const NimbusLogo = () => {
  return (
    <XStack
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      space={'$2'}
    >
      <img src={'/icons/marks.svg'} alt="marks" />
      <img src={'/icons/nimbus.svg'} alt="marks" />
      <Tag text="BETA" />
    </XStack>
  )
}

export default NimbusLogo
