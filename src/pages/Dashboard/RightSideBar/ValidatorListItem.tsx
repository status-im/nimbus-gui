import { XStack, YStack } from 'tamagui'
import { Avatar, Checkbox, Text } from '@status-im/components'
import { VerifiedIcon, ContactIcon } from '@status-im/icons'

const ValidatorListItem = () => {
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      style={{
        padding: '6px 8px',
        borderRadius: '12px',
        backgroundColor: 'rgba(42, 74, 245, 0.05);',
      }}
      width="90%"
    >
      <XStack alignItems="center">
        <Avatar
          type="user"
          size={32}
          name="1"
          backgroundColor="$red-50"
          colorHash={[
            [3, 30],
            [2, 10],
            [4, 0],
            [5, 28],
            [4, 13],
            [4, 15],
          ]}
        />
        <YStack pl="8px">
          <Text size={13} weight={'semibold'}>
            Validator 1
            <VerifiedIcon size={20} /> <ContactIcon size={20} />
          </Text>
          <Text size={13}>Validator 1</Text>
        </YStack>
      </XStack>
      <Checkbox id="" variant="outline" size={20} selected />
    </XStack>
  )
}

export default ValidatorListItem
