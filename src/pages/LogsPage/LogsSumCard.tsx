import { Text } from '@status-im/components'
import { Separator,  XStack, YStack } from 'tamagui'
import IconText from '../../components/General/IconText'
import Icon from '../../components/General/Icon'
import DashboardCardWrapper from '../Dashboard/DashboardCardWrapper'

const LogsSumCard = () => {
  return (
    <DashboardCardWrapper>
      <YStack
        style={{
          borderRadius: '16px',
          border: 'none',
          backgroundColor: '#fff',
          flexGrow: '1',
          minWidth: '320px',
        }}
      >
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative',
            flexGrow: '1',
          }}
        >
          <YStack space={'$3'} width={'100%'}>
            <XStack justifyContent="space-between" width={'100%'}>
              <Text size={27} weight={'semibold'} >
                Critical
              </Text>
              <Text size={15} weight={'semibold'}>
                {'>'}
              </Text>
            </XStack>
            <XStack justifyContent="space-between" width={'100%'}>
              <Text size={27} weight={'semibold'}>
                16
              </Text>
              <Text size={19} weight={'semibold'} color="#84888E">
                Per Minute
              </Text>
            </XStack>
          </YStack>
        </XStack>
        <Separator borderColor={'#e3e3e3'} style={{ marginTop: 'auto' }} />
        <XStack space={'$4'} style={{ padding: '10px 16px' }}>
          <IconText icon={<Icon src="icons/active.svg" width={16} />} weight={'semibold'}>
            {'Good'}
          </IconText>
        </XStack>
      </YStack>
    </DashboardCardWrapper>
  )
}

export default LogsSumCard
