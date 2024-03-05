import { Text } from '@status-im/components'

import styles from '../../pages/ValidatorOnboarding/Deposit/deposit.module.css'

const ChainParity = () => {
  return (
    <>
      <Text size={15} weight="regular" color={'#647084'}>
        Awaiting chain parity
      </Text>
      <div className={styles['chain-parity-img-container']}>
        <img
          src="/images/chain-parity.png"
          alt="Chain parity"
          style={{ width: '100%' }}
        />
      </div>
    </>
  )
}

export default ChainParity
