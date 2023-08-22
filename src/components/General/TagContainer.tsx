import { Tag } from '@status-im/components'
import { XStack } from 'tamagui'
import './TagContainer.css'
import { AddSmallIcon, SwapIcon } from '@status-im/icons'

const TagContainer = () => {
  return (
    <XStack space={'$2'} alignItems="center" className="tag-container">
      <Tag icon={SwapIcon} label="Pair" size={32} />
      <Tag selected icon={AddSmallIcon} label="Create" size={32} />
    </XStack>
  )
}

export default TagContainer
