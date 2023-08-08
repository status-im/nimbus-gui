import Icon from './Icon'
import ReactButton from './ReactButton'

type IconButtonProps = {
  children: string
  icon: string
  style?: unknown
  size?: string
  fontSize?: string
  onClick?: () => void
}

const IconButton = ({ icon, children, ...props }: IconButtonProps) => {
  return (
    <ReactButton {...props} icon={<Icon source={icon} />}>
      {children}
    </ReactButton>
  )
}

export default IconButton
