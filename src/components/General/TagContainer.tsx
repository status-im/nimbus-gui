import { Tag } from '@status-im/components'
import { XStack } from 'tamagui'
import './TagContainer.css'
import { ConnectionIcon, AddSmallIcon, SwapIcon } from '@status-im/icons'
import { useNavigate } from 'react-router'

type TagContainerProps = {
  selectedTag: 'pair' | 'create' | 'connect'
}

const TagContainer = ({ selectedTag }: TagContainerProps) => {
  const navigate = useNavigate()

  const onPressConnect = () => {
    navigate('/connect-device')
  }

  const onPressPair = () => {
    navigate('/pair-device')
  }

  const onPressCreate = () => {
    navigate('/create-local-node')
  }

  return (
    <XStack space={'$2'} alignItems="center" className="tag-container">
      {selectedTag === 'connect' ? (
        <Tag
          selected={selectedTag === 'connect'}
          icon={ConnectionIcon}
          label="Connect"
          size={32}
          onPress={onPressConnect}
        />
      ) : null}
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
