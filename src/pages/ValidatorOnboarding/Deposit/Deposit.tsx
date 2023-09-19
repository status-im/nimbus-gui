import { Avatar, Button, DividerLine, InformationBox, Input, Text } from '@status-im/components'
import { PlaceholderIcon, AddIcon, ChevronDownIcon } from '@status-im/icons'
import { Stack, XStack, YStack } from 'tamagui'
import { useState } from 'react'
import ValidatorRequest from './ValidatorRequest'

const Deposit = () => {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(true)
  const [validatorCount, setValidatorCount] = useState(0)

  const addValidatorHandler = () => {
    setValidatorCount((state: number) => state + 1)
  }

  const changeValidatorCountHandler = (e: any) => {
    if (!isNaN(e.target.value)) {
      setValidatorCount(Number(e.target.value))
    }
  }

  const onCloseInfoBox = () => {
    setIsInfoBoxVisible(false)
  }

  return (
    <YStack space={'$2'} style={{ width: '100%', padding: '16px 32px', alignItems: 'start' }}>
      <Text size={19} weight={'semibold'}>
        Deposit Funds
      </Text>
      <XStack justifyContent={'space-between'} width={'80%'}>
        <Stack space={'$2'}>
          <Text size={15} weight="regular" color={'#647084'}>
            Connect you Wallet to stake required ETH for new validators
          </Text>
          <Input
            icon={<AddIcon size={16} style={{ cursor: 'pointer' }} onClick={addValidatorHandler} />}
            style={{ fontWeight: 'bold' }}
            value={validatorCount.toString()}
            onChange={changeValidatorCountHandler}
          />
        </Stack>
        <YStack space={'$2'}>
          <Text size={15} weight={'semibold'} color="#09101C">
            ETH
          </Text>
          <Text size={27} weight={'semibold'} color="#09101C">
            64
          </Text>
        </YStack>
        <YStack space={'$2'}>
          <XStack style={{ justifyContent: 'space-between' }}>
            <Text size={15} weight={'semibold'} color="#09101C">
              USD
            </Text>
            <ChevronDownIcon size={16} color={'#919191'} />
          </XStack>
          <Text size={27} weight={'semibold'} color="#09101C">
            $4,273 USD
          </Text>
        </YStack>
      </XStack>
      <DividerLine />
      <ValidatorRequest />
      <ValidatorRequest />
      {isInfoBoxVisible && (
        <InformationBox
          message="Your Validator balances currently require a deposit. If you have already made a deposit using Launchpad please wait until the transaction is posted on execution layer to continue."
          variant="error"
          onClosePress={onCloseInfoBox}
          icon={<PlaceholderIcon size={16} />}
        />
      )}
      <Text size={19} weight={'semibold'}>
        Connect Wallet
      </Text>
      <XStack space={'$2'} alignItems={'center'}>
        <Avatar
          type="icon"
          size={32}
          icon={<img src={'/icons/eth-logo.svg'} alt="eth-logo" style={{ width: '100%' }} />}
        />
        <Button>Connect Wallet</Button>
      </XStack>
    </YStack>
  )
}

export default Deposit
