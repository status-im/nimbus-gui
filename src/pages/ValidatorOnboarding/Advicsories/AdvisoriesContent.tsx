import { Text } from '@status-im/components'
import { Link } from 'react-router-dom'
type AdvisoriesContentProps = {
  title: string
  content: string
}
const AdvisoriesContent = ({ title, content }: AdvisoriesContentProps) => {
  return (
    <>
      <Text size={27}>{title}</Text>
      <Text size={13}>{content}</Text>
      <Text size={13}>
        <Link
          to={'https://github.com/ethereum/consensus-specs'}
          style={{ textDecorationLine: 'underline', color: '#484848' }}
        >
          The Ethereum consensus layer specification
        </Link>
      </Text>
      <Text size={13} weight={'semibold'}>
        <Link
          to={'https://github.com/ethereum/consensus-specs'}
          style={{ textDecorationLine: 'underline', color: '#2A4CF4', fontWeight: 'bold' }}
        >
          More on slashing risks
        </Link>
      </Text>
    </>
  )
}
export default AdvisoriesContent
