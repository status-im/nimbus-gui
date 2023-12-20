import { Tag } from '@status-im/components'
import { XStack } from 'tamagui'
import { AddSmallIcon, SwapIcon } from '@status-im/icons'
import { useNavigate } from 'react-router'

import './TagContainer.css'

type TagContainerProps = {
  selectedTag: 'pair' | 'create' | 'connect'
}

const TagContainer = ({ selectedTag }: TagContainerProps) => {
  const navigate = useNavigate()

  const onPressPair = () => {
    navigate('/pair-device')
  }

  const onPressCreate = () => {
    navigate('/create-local-node')
  }

  return (
    <XStack space={'$2'} alignItems="center" className="tag-container">
      <Tag
        selected={selectedTag === 'pair'}
        icon={SwapIcon}
        label="Pair"
        size={32}
        onPress={onPressPair}
      />
      <Tag
        selected={selectedTag === 'create'}
        icon={AddSmallIcon}
        label="Create"
        size={32}
        onPress={onPressCreate}
      />
    </XStack>
  )
}

export default TagContainer
