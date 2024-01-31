import { Text } from '@status-im/components'

const ChainParity = () => {
  return (
    <>
      <Text size={15} weight="regular" color={'#647084'}>
        Awaiting chain parity
      </Text>
      <div style={{ padding: '7.5% 20%' }}>
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
