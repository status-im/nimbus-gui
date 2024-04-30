import { NavLink } from 'react-router-dom'
import { XStack } from 'tamagui'
import { ChevronRightIcon } from '@status-im/icons'

type BreadcrumbElementProps = {
  match: { pathname: string }
  breadcrumb: string | React.ReactNode
  isLastElement: boolean
}

const BreadcrumbElement = ({
  match,
  breadcrumb,
  isLastElement,
}: BreadcrumbElementProps) => {
  return (
    <XStack space={'$2'} alignItems="flex-end">
      <NavLink
        to={match.pathname}
        style={{
          textDecoration: 'none',
          color: isLastElement ? '#09101C' : '#647084',
          fontWeight: isLastElement ? '500' : 'normal',
        }}
      >
        {breadcrumb}
      </NavLink>
      {isLastElement === false && (
        <ChevronRightIcon size={20} color="#647084" />
      )}
    </XStack>
  )
}

export default BreadcrumbElement
