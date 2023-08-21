import { Tag } from '@status-im/components'
import { XStack } from 'tamagui'
import PairIcon from '../Icons/PairIcon'
import CreateIcon from '../Icons/CreateIcon'
import './TagContainer.css'
import ConnectIcon from '../Icons/ConnectIcon'

type TagContainerProps = {
  selectedTag: 'pair' | 'create' | 'connect'
}

const TagContainer = ({ selectedTag }: TagContainerProps) => {
  return (
    <XStack space={'$2'} alignItems="center" className="tag-container">
      <Tag selected={selectedTag === 'connect'} icon={ConnectIcon} label="Connect" size={32} />
      <Tag selected={selectedTag === 'pair'} icon={PairIcon} label="Pair" size={32} />
      <Tag selected={selectedTag === 'create'} icon={CreateIcon} label="Create" size={32} />
    </XStack>
  )
}

export default TagContainer
