import { Switch } from 'tamagui'

type TamaguiSwitchProps = {
  isSwitchOn: boolean | undefined
  onSwitchChange: (value: boolean) => void
}

const TamaguiSwitch = ({ isSwitchOn, onSwitchChange }: TamaguiSwitchProps) => {
  const switchStyle = isSwitchOn
    ? { backgroundColor: '#2A4AF5' }
    : { backgroundColor: 'grey' }

  return (
    <Switch
      size="$2"
      style={switchStyle}
      checked={isSwitchOn}
      onCheckedChange={onSwitchChange}
      height={24}
      width={36}
      cursor="pointer"
    >
      {isSwitchOn ? (
        <Switch.Thumb width={16} height={16} bottom={-2} right={2} />
      ) : (
        <Switch.Thumb width={16} height={16} bottom={-2} left={2} />
      )}
    </Switch>
  )
}

export default TamaguiSwitch
