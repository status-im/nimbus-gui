import { DividerLine, InformationBox, Text } from '@status-im/components'
import { PlaceholderIcon } from '@status-im/icons'
import { YStack } from 'tamagui'
import { useState } from 'react'

import ValidatorRequest from './ValidatorRequest'
import Validators from './Validators'
import ConnectWallet from './ConnectWallet'

const Deposit = () => {
  const [isInfoBoxVisible, setIsInfoBoxVisible] = useState(true)
  const [validatorCount, setValidatorCount] = useState(0)
  const validatorRequests = [1, 2]

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
      <Validators
        validatorCount={validatorCount}
        addValidatorHandler={addValidatorHandler}
        changeValidatorCountHandler={changeValidatorCountHandler}
      />
      <DividerLine />
      {validatorRequests.map((_, index) => (
        <ValidatorRequest key={index} />
      ))}
      {isInfoBoxVisible && (
        <InformationBox
          message="Your Validator balances currently require a deposit. If you have already made a deposit using Launchpad please wait until the transaction is posted on execution layer to continue."
          variant="error"
          onClosePress={onCloseInfoBox}
          icon={<PlaceholderIcon size={16} />}
        />
      )}
      <ConnectWallet />
    </YStack>
  )
}

export default Deposit
