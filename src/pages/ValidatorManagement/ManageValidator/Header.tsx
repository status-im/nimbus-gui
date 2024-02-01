import { XStack } from 'tamagui'
import Titles from '../../../components/General/Titles'
import { PopupIcon } from '@status-im/icons'
const Header = () => {
  return (
    <XStack justifyContent="space-between" alignItems="center" padding="30px">
      <XStack alignItems="end">
        <Titles title="Manage Validator" titleSize={27} subtitle="" />
      </XStack>
      <PopupIcon size={20} />
    </XStack>
  )
}
export default Header
