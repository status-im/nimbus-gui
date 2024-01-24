import OSCard from './OSCard'
import { LINUX, MAC, WINDOWS } from '../../../../constants'
import styles from './InstallLayout.module.css'

const cards = [
  { name: MAC, icon: '/icons/apple-logo.svg' },
  { name: LINUX, icon: '/icons/linux-logo.svg' },
  { name: WINDOWS, icon: '/icons/windows-logo.svg' },
]

type OSCardsProps = {
  selectedOS: string
  handleOSCardClick: (os: string) => void
}
const OSCards = ({ selectedOS, handleOSCardClick }: OSCardsProps) => {
  return (
    <div className={styles.osCardsContainer}>
      {cards.map(card => (
        <div
          key={card.name}
          className={`${styles.osCard} ${selectedOS === card.name ? styles.osCardSelected : ''}`}
          onClick={() => handleOSCardClick(card.name)}
        >
          <OSCard key={card.name} icon={card.icon} name={card.name} />
        </div>
      ))}
    </div>
  )
}

export default OSCards
