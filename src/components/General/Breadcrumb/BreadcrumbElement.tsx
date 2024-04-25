import { Text } from '@status-im/components'
import { ChevronRightIcon } from '@status-im/icons'
import { XStack } from 'tamagui'

type BreadcrumbElementProps = {
  element: string
  isLastElement: boolean
}

const BreadcrumbElement = ({
  element,
  isLastElement,
}: BreadcrumbElementProps) => {
  return (
    <XStack space={'$2'} alignItems="center">
      <Text size={15} color={isLastElement ? '' : '#647084'}>
        {element}
      </Text>
      {isLastElement === false && (
        <ChevronRightIcon size={20} color="#647084" />
      )}
    </XStack>
  )
}

export default BreadcrumbElement
