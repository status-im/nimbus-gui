import { Text } from '@status-im/components'
import { ChevronRightIcon } from '@status-im/icons'
import { XStack } from 'tamagui'

type BreadcrumbBarProps = {
  breadcrumbList: string[]
}

const Breadcrumb = ({ breadcrumbList }: BreadcrumbBarProps) => {
  return (
    <XStack space={'$2'} alignItems="center">
      {breadcrumbList.map((item, index) => {
        const isNotLast = index !== breadcrumbList.length - 1
        return (
          <XStack space={'$2'} alignItems="center" key={index}>
            <Text size={15} color={isNotLast ? '#647084' : ''}>
              {item}
            </Text>
            {isNotLast && <ChevronRightIcon size={20} color="#647084" />}
          </XStack>
        )
      })}
    </XStack>
  )
}

export default Breadcrumb
