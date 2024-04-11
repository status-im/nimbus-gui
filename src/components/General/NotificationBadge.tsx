import { NotificationBadgeIcon } from '@status-im/icons'

const NotificationBadge = () => {
  return (
    <NotificationBadgeIcon
      size={20}
      style={{
        position: 'absolute',
        right: -7,
        top: -5.5,
      }}
    />
  )
}

export default NotificationBadge
