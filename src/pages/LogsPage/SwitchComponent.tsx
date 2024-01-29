import { Switch } from 'tamagui'
type SwitchComponentProps = {
  timestamps: boolean
  setTimestamps: (timestamps: boolean) => void
}

const SwitchComponent = ({
  timestamps,
  setTimestamps,
}: SwitchComponentProps) => {
  const handleCheckedChange = () => {
    setTimestamps(!timestamps)
  }
  return (
    <Switch
      size="$1"
      style={{
        backgroundColor: timestamps ? '#4360df' : 'grey',
        border: 'none',
      }}
      checked={timestamps}
      onCheckedChange={handleCheckedChange}
    >
      <Switch.Thumb
        style={{
          right: 7,
          bottom: 3,
          backgroundColor: '#fff',
          height: '18px',
          width: '18px',
        }}
      />
    </Switch>
  )
}

export default SwitchComponent
