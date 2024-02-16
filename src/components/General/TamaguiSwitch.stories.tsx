import { useState } from 'react'
import TamaguiSwitch from './TamaguiSwitch'

export default {
  title: 'General/TamaguiSwitch',
  component: TamaguiSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

type TamaguiSwitchTemplateProps = {
  isSwitchOn: boolean | undefined
}

const TamaguiSwitchTemplate = ({ isSwitchOn }: TamaguiSwitchTemplateProps) => {
  const [isSwitchOnState, setIsSwitchOn] = useState(isSwitchOn)

  const handleSwitchChange = () => {
    setIsSwitchOn(state => !state)
  }

  return (
    <TamaguiSwitch
      isSwitchOn={isSwitchOnState}
      onSwitchChange={handleSwitchChange}
    />
  )
}

export const On = () => <TamaguiSwitchTemplate isSwitchOn={true} />

export const Off = () => <TamaguiSwitchTemplate isSwitchOn={false} />
