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
        {breadcrumbList.map((item, index) => (
          <XStack space={'$2'} alignItems="center" key={index}>
            <li className="breadcrumb-bar-li">{item}</li>
            {index !== breadcrumbList.length - 1 && (
              <ChevronRightIcon size={20} color="#647084" />
            )}
          </XStack>
        ))}
      </ul>
    </nav>
  )
}

export default BreadcrumbBar
