import { XStack } from 'tamagui'
import { Icon } from './Icon'
import { FormattedText } from './FormattedText'

const InformationBox = ({ icon, textElements }) => {
  return (
    <XStack
      style={{
        border: '2px solid #E7EAEE',
        borderRadius: '12px',
        padding: '11px 16px',
        maxWidth: '590px',
        alignItems: 'start',
      }}
      space={'$2'}
    >
      <Icon source={icon} width={12} height={12} style={{ marginTop: '6px' }} />
      <FormattedText textElements={textElements} color={'#647084'} fontSize={'$3'} />
    </XStack>
  )
}

export default InformationBox
