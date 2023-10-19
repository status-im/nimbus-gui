import { useState } from 'react'
import { XStack, YStack } from 'tamagui'
import { Avatar, Checkbox, Text } from '@status-im/components'
import { VerifiedIcon, ContactIcon } from '@status-im/icons'

import { getFormattedValidatorAddress } from '../../../../utilities'

type ValidatorListItemProps = {
  name: string
  validatorAddress: string
  isAvatarChipIncluded?: boolean
  isVerified?: boolean
  selected?: boolean
}

const ValidatorListItem = ({
  name,
  validatorAddress,
  selected,
  isAvatarChipIncluded,
  isVerified,
}: ValidatorListItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isSelected, setIsSelected] = useState(selected)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  const handleClick = () => setIsSelected(!isSelected)

  const backgroundColor = isSelected || isHovered ? 'rgba(42, 74, 245, 0.05)' : 'transparent'

  return (
    <XStack
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      justifyContent="space-between"
      alignItems="center"
      style={{
        padding: '6px 8px',
        borderRadius: '12px',
        backgroundColor,
      }}
      width="90%"
    >
      <XStack alignItems="center">
        <Avatar
          type="user"
          size={32}
          name={name}
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
          <XStack space={'$1'} alignItems="center">
            <Text size={13} weight={'semibold'}>
              {name}
            </Text>
            {isVerified && <VerifiedIcon size={20} />}
            {isAvatarChipIncluded && <ContactIcon size={20} />}
          </XStack>
          <Text size={13}>{getFormattedValidatorAddress(validatorAddress)}</Text>
        </YStack>
      </XStack>
      {isSelected && <Checkbox id="" variant="outline" size={20} selected={isSelected} />}
    </XStack>
  )
}

export default ValidatorListItem
