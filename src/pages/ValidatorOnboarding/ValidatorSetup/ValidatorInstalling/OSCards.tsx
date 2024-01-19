import { Stack } from 'tamagui'
import OSCard from './OSCard'
import { LINUX, MAC, WINDOWS } from '../../../../constants'

const cards = [
  { name: MAC, icon: '/icons/apple-logo.svg' },
  { name: LINUX, icon: '/icons/linux-logo.svg' },
  { name: WINDOWS, icon: '/icons/windows-logo.svg' },
]

type OSCardsProps = {
  selectedOS: string
  handleOSCardClick: (os: string) => void
}
import styles from './InstallLayout.module.css'
const OSCards = ({ selectedOS, handleOSCardClick }: OSCardsProps) => {
  return (
    <Stack className={styles.osCardsContainer}>
      {cards.map(card => (
        <Stack
          key={card.name}
          className={`${styles.osCard} ${selectedOS === card.name ? styles.osCardSelected : ''}`}
          onPress={() => handleOSCardClick(card.name)}
        >
          <OSCard key={card.name} icon={card.icon} name={card.name} />
        </Stack>
      ))}
    </Stack>
  )
}

export default OSCards
