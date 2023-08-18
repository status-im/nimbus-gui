import { Tag } from '@status-im/components'
import { XStack } from 'tamagui'
import PairIcon from '../Icons/PairIcon'
import CreateIcon from '../Icons/CreateIcon'

const TagContainer = () => {
  return (
    <XStack space={'$2'} alignItems="center" className="tag-container">
      <Tag icon={PairIcon} label="Pair" size={32} />
      <Tag selected icon={CreateIcon} label="Create" size={32} />
    </XStack>
  )
}

export default TagContainer
