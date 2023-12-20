import { Tag } from '@status-im/components'
import { XStack } from 'tamagui'
import { AddSmallIcon, SwapIcon } from '@status-im/icons'
import { useNavigate } from 'react-router'

export type SelectedTag = 'Pair' | 'Create'

type TagContainerProps = {
  selectedTag: SelectedTag
}

const TAGS = [
  {
    label: 'Pair',
    icon: SwapIcon,
    path: '/pair-device',
  },
  {
    label: 'Create',
    icon: AddSmallIcon,
    path: '/create-local-node',
  },
]

const TagContainer = ({ selectedTag }: TagContainerProps) => {
  const navigate = useNavigate()

  const onPressTag = (path: string) => {
    navigate(path)
  }

  return (
    <XStack space={'$2'} alignItems="center" className="tag-container">
      {TAGS.map(tag => (
        <Tag
          key={tag.label}
          selected={selectedTag === tag.label}
          icon={tag.icon}
          label={tag.label}
          size={32}
          onPress={() => onPressTag(tag.path)}
        />
      ))}
    </XStack>
  )
}

export default TagContainer
