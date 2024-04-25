import { Text } from '@status-im/components'
import { ChevronRightIcon } from '@status-im/icons'
import { XStack } from 'tamagui'

import './BreadcrumbBar.css'

type BreadcrumbBarProps = {
  breadcrumbList: string[]
}

const BreadcrumbBar = ({ breadcrumbList }: BreadcrumbBarProps) => {
  return (
    <nav className="breadcrumb-bar-nav">
      <ul className="breadcrumb-bar-ul">
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
      </ul>
    </nav>
  )
}

export default BreadcrumbBar
