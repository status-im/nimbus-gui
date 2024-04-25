import { XStack } from 'tamagui'
import BreadcrumbElement from './BreadcrumbElement'

type BreadcrumbProps = {
  breadcrumbList: string[]
}

const Breadcrumb = ({ breadcrumbList }: BreadcrumbProps) => {
  return (
    <XStack space={'$2'} alignItems="center">
      {breadcrumbList.map((element, index) => (
        <BreadcrumbElement
          element={element}
          isLastElement={index === breadcrumbList.length - 1}
        />
      ))}
    </XStack>
  )
}

export default Breadcrumb
