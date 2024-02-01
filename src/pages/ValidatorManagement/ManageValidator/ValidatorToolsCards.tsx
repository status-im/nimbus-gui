import { Stack } from 'tamagui'
import ValidatorToolCard from './ValidatorToolCard'

const ValidatorToolsCards = () => {
  const validatorToolsCardsData = [
    ['Deposit Funds', '/icons/download-keystore-backups-icon.svg'],
    ['Stop Validator', '/icons/broken-chain.png'],
    ['Export Validator', '/icons/hand-key.png'],
    ['Exit Validator', '/icons/pig.png'],
  ]
  return (
    <Stack
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '8px',
        padding: '0 30px',
      }}
    >
      {validatorToolsCardsData.map(([name, icon], index) => (
        <ValidatorToolCard key={index} name={name} icon={icon} />
      ))}
    </Stack>
  )
}

export default ValidatorToolsCards
