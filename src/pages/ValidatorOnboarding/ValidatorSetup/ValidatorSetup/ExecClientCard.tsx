import { Stack, XStack, YStack } from 'tamagui'
import { Text } from '@status-im/components'
import { useDispatch, useSelector } from 'react-redux'

import Icon from '../../../../components/General/Icon'
import { selectClient } from '../../../../redux/ValidatorOnboarding/ClientSetup/slice'
import { RootState } from '../../../../redux/store'

type ExecClientCardProps = {
  name: string
  icon: string
  isComingSoon?: boolean
}

const ExecClientCard = ({ name, icon, isComingSoon }: ExecClientCardProps) => {
  const dispatch = useDispatch()
  const selectedClient = useSelector(
    (state: RootState) => state.execClient.selectedClient,
  )
  const isSelected = selectedClient === name

  return (
    <YStack
      style={{
        backgroundColor: isSelected ? '#2A4AF50D' : 'none',
        border: isComingSoon
          ? '1px solid #F5F6F8'
          : isSelected
          ? '1px solid #2A4AF5'
          : '1px solid #DCE0E5',
        borderRadius: '16px',
        padding: '12px 16px',
        cursor: 'pointer',
        width: '100%',
        minWidth: '150px',
      }}
      space={'$8'}
      onPress={() => {
        dispatch(selectClient(name))
      }}
    >
      <Stack>
        <Text
          size={19}
          weight={'semibold'}
          color={isComingSoon ? '#DCE0E5' : ''}
        >
          {name}
        </Text>
        {isComingSoon && (
          <XStack
            style={{
              backgroundColor: '#2A4AF5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3px 6px',
              borderRadius: '67px',
            }}
          >
            <Text size={11} color="#fff">
              COMING SOON
            </Text>
          </XStack>
        )}
      </Stack>
      <Icon src={icon} width={100} height={100} />
    </YStack>
  )
}

export default ExecClientCard
