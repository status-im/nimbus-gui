import { PinnedMessage } from '@status-im/components'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function PinnedNotification() {
  const pinnedMessage = useSelector((state: RootState) => state.pinnedMessage.pinnedMessage)
  console.log(pinnedMessage)
  return (
    <>
      {pinnedMessage && pinnedMessage.pinned && (
        <PinnedMessage
          messages={[
            {
              id: pinnedMessage.id,
              reactions: {},
              pinned: pinnedMessage.pinned,
              text: pinnedMessage.text,
            },
          ]}
        />
      )}
    </>
  )
}

export default PinnedNotification
