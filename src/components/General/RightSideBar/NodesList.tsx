import { Text } from '@status-im/components'
import { DragIcon, StatusIcon, ChevronRightIcon } from '@status-im/icons'
import { Stack, Tooltip, XStack, YStack } from 'tamagui'
import Icon from '../Icon'

const NodesList = () => {
  return (
    <YStack backgroundColor={'#fff'} padding="18px" borderRadius={25}>
      <Text size={15} color="#647084" weight="semibold">
        Nodes
      </Text>
      <YStack padding="$2" space="$3">
        {Array.from(Array(3).keys()).map(e => {
          return (
            <XStack
              alignContent="center"
              alignItems="center"
              justifyContent="space-between"
              width={'250px'}
              backgroundColor={'#FAFBFC'}
              borderRadius={15}
            >
              <XStack
                space="$3"
                alignContent="center"
                alignItems="center"
                padding="8px"
              >
                <DragIcon size={20} color="#09101C"></DragIcon>
                <StatusIcon size={20}></StatusIcon>
                <YStack>
                  <Text size={15} weight="semibold">
                    Nickname {e}
                  </Text>
                  <Text size={13} color="#647084">
                    Validators
                  </Text>
                </YStack>
              </XStack>

              <Tooltip>
                <Tooltip.Trigger>
                  <Stack padding="3px">
                    <ChevronRightIcon size={20}></ChevronRightIcon>
                  </Stack>
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <XStack alignContent="center" alignItems="center" space="$1">
                    <Icon
                      src="icons/tooltipIcon.png"
                      width={22}
                      height={22}
                    ></Icon>
                    <YStack space="$2">
                      <Text size={15} weight="semibold">
                        Client Name
                      </Text>
                      <Text size={15} weight="semibold">
                        Host Name
                      </Text>
                    </YStack>
                  </XStack>
                </Tooltip.Content>
              </Tooltip>
            </XStack>
          )
        })}
      </YStack>
    </YStack>
  )
}
export default NodesList
