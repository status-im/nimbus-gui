import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { YStack } from 'tamagui'

import { Text } from '@status-im/components'
import DraggableNode from './DragableNode'
interface NodeItem {
  id: string
  content: string
}

const initialNodes: NodeItem[] = [
  { id: 'item-0', content: 'Nickname 0' },
  { id: 'item-1', content: 'Nickname 1' },
  { id: 'item-2', content: 'Nickname 2' },
]

const NodesList = () => {
  const [nodes, setNodes] = useState<NodeItem[]>(initialNodes)

  const moveNode = (dragIndex: number, hoverIndex: number) => {
    const dragNode = nodes[dragIndex]
    const newNodes = [...nodes]
    newNodes.splice(dragIndex, 1)
    newNodes.splice(hoverIndex, 0, dragNode)
    setNodes(newNodes)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <YStack backgroundColor="#fff" padding="18px" borderRadius={25}>
        <Text size={15} color="#647084" weight="semibold">
          Nodes
        </Text>
        {nodes.map((node, index) => (
          <DraggableNode
            key={node.id}
            id={node.id}
            content={node.content}
            index={index}
            moveNode={moveNode}
          />
        ))}
      </YStack>
    </DndProvider>
  )
}

export default NodesList
