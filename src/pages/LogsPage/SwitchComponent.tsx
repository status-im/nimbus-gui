import { Switch } from 'tamagui'
type SwitchComponentProps = {
  value: boolean
  setValue: (value: boolean) => void
}

const SwitchComponent = ({ value, setValue }: SwitchComponentProps) => {
  const handleCheckedChange = () => {
    setValue(!value)
  }
  return (
    <Switch
      size="$1"
      style={{
        backgroundColor: value ? '#4360df' : 'grey',
        border: 'none',
      }}
      checked={value}
      onCheckedChange={handleCheckedChange}
    >
      <Switch.Thumb
        style={{
          right: 0,
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
