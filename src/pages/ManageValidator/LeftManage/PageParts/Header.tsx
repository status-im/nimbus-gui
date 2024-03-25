import { XStack } from 'tamagui'
import { PopupIcon } from '@status-im/icons'

import Titles from '../../../../components/General/Titles'

const Header = () => {
  return (
    <XStack justifyContent="space-between" alignItems="center" padding="30px">
      <XStack alignItems="flex-end">
        <Titles title="Manage Validator" titleSize={27} subtitle="" />
      </XStack>
      <PopupIcon size={20} />
    </XStack>
  )
}
export default Header
