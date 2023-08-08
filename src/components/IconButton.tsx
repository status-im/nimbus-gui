import Icon from './Icon'
import ReactButton from './ReactButton'

type IconButtonProps = {
  icon: string
  children: string
  onClick: () => void
}

const IconButton = ({ icon, children, ...props }: IconButtonProps) => {
  return (
    <ReactButton {...props} icon={<Icon source={icon} />}>
      {children}
    </ReactButton>
  )
}

export default IconButton
