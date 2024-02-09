import { useState } from 'react'
import { XStack } from 'tamagui'
import { Avatar, Checkbox } from '@status-im/components'

import { colorsTyped } from '../../../../../tokens.ts'
import ValidatorNameAddress from '../../ValidatorNameAddress'

type ValidatorListItemProps = {
  name: string
  validatorAddress: string
  isAvatarChipIncluded?: boolean
  isVerified?: boolean
  isSelected?: boolean
}

const ValidatorListItem = ({
  name,
  validatorAddress,
  isAvatarChipIncluded,
  isVerified,
}: ValidatorListItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  const handleClick = () => setIsSelected(!isSelected)

  return (
    <XStack
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      justifyContent="space-between"
      alignItems="center"
      style={{
        padding: '6px 8px',
        borderRadius: '12px',
        backgroundColor:
          isSelected || isHovered ? 'rgba(42, 74, 245, 0.05)' : '',
        cursor: 'pointer',
      }}
      width="92%"
      onPress={handleClick}
    >
      <XStack alignItems="center" space={'$2'}>
        <Avatar
          type="user"
          size={32}
          name={name}
          backgroundColor={colorsTyped['red-50']}
          colorHash={[
            [2, 9],
            [4, 8],
            [5, 13],
            [11, 20],
          ]}
        />
        <ValidatorNameAddress
          name={name}
          address={validatorAddress}
          isVerified={isVerified}
          isAvatarChipIncluded={isAvatarChipIncluded}
        />
      </XStack>
      {isSelected && (
        <Checkbox id={name} variant="outline" size={20} selected={isSelected} />
      )}
    </XStack>
  )
}

export default ValidatorListItem
