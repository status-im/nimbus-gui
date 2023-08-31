import { Link, useNavigate } from 'react-router-dom'
import { XStack } from 'tamagui'
import { ArrowLeftIcon, ArrowRightIcon } from '@status-im/icons'

type LinkWithArrowProps = {
  text: string
  to: string
  arrowLeft?: boolean
  arrowRight?: boolean
  style?: React.CSSProperties
  textColor?: string
}

const LinkWithArrow = ({
  text,
  to,
  arrowLeft,
  arrowRight,
  style,
  textColor,
}: LinkWithArrowProps) => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate(to)
  }

  return (
    <XStack
      space={'$1.5'}
      style={{
        alignItems: 'center',
        maxWidth: 'fit-content',
        cursor: 'pointer',
        ...style,
      }}
      onClick={navigateHandler}
    >
      {arrowLeft && <ArrowLeftIcon size={20} color="#2A4CF4" />}
      <Link style={{ color: textColor || '#2A4CF4', marginBottom: '2px' }} to={to}>
        {text}
      </Link>
      {arrowRight && <ArrowRightIcon size={20} color="#2A4CF4" />}
    </XStack>
  )
}

export default LinkWithArrow
