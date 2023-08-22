import { Tag } from '@status-im/components'
import { XStack } from 'tamagui'
import './TagContainer.css'
import { ConnectionIcon, AddSmallIcon, SwapIcon } from '@status-im/icons'

type TagContainerProps = {
  selectedTag: 'pair' | 'create' | 'connect'
}

const TagContainer = ({ selectedTag }: TagContainerProps) => {
  return (
    <XStack space={'$2'} alignItems="center" className="tag-container">
      {selectedTag === 'connect' ? (
        <Tag selected={selectedTag === 'connect'} icon={ConnectionIcon} label="Connect" size={32} />
      ) : null}
      <Tag selected={selectedTag === 'pair'} icon={SwapIcon} label="Pair" size={32} />
      <Tag selected={selectedTag === 'create'} icon={AddSmallIcon} label="Create" size={32} />
    </XStack>
  )
}

export default TagContainer
