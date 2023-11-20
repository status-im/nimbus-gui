import { Switch } from "tamagui"

const SwitchComponent = () => {
  return (
    <Switch
      size="$1"
      style={ { backgroundColor: 'grey'} }
      checked={false}
      onCheckedChange={() =>(console.log(a))}
    >
      <Switch.Thumb
        style={{
          right: 7,
          bottom: 3,
          backgroundColor: '#fff',
          height: '16px',
          width: '16px',
        }}
      />
    </Switch>
  )
}

export default SwitchComponent