import { NavLink } from 'react-router-dom'
import { XStack } from 'tamagui'
import { ChevronRightIcon } from '@status-im/icons'

import { PATHS } from '../../../constants'

type BreadcrumbElementProps = {
  match: any
  breadcrumb: any
  isLastElement: boolean
}

const BreadcrumbElement = ({
  match,
  breadcrumb,
  isLastElement,
}: BreadcrumbElementProps) => {
  if (match.pathname === `${PATHS.MANAGE_VALIDATOR}`) {
    return null
  }

  return (
    <XStack space={'$2'} alignItems="flex-end">
      <NavLink
        key={match.pathname}
        to={match.pathname}
        style={{
          textDecoration: 'none',
          color: isLastElement ? '#09101C' : '#647084',
          fontWeight: 'normal',
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
