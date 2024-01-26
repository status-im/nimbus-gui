import { Stack } from 'tamagui'
import { InformationBox } from '@status-im/components'
import { CloseCircleIcon } from '@status-im/icons'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'

type CopyPastedNotificationProps = {
  isSmallScreen?: boolean
}

const CopyPastedNotification = ({ isSmallScreen }: CopyPastedNotificationProps) => {
  const isCopyPastedPhrase = useSelector(
    (state: RootState) => state.keyGeneration.isCopyPastedPhrase,
  )

  return (
    <>
      {isCopyPastedPhrase && (
        <Stack
          style={{
            width: '100%',
            position: isSmallScreen ? 'static' : 'absolute',
            marginTop: isSmallScreen ? '12px' : '0',
          }}
        >
          <InformationBox
            message="You have copy and pasted the entire Recovery Phrase. Please ensure you have secured it appropriately prior to continuing."
            variant="error"
            icon={<CloseCircleIcon size={20} />}
          />
        </Stack>
      )}
    </>
  )
}

export default CopyPastedNotification
