import { useState } from 'react'
import { CirclePicker } from 'react-color'
import { XStack } from 'tamagui'

const ColorPicker = () => {
  const [chosenColor, setChosenColor] = useState('#FFFFFF')
  return (
    <XStack my={10}>
      <CirclePicker
        width="80%"
        circleSize={40}
        circleSpacing={12}
        colors={[
          '#2A4AF5',
          '#F6B03C',
          '#7140FD',
          '#2A799B',
          '#EC266C',
          '#1992D7',
          '#FF7D46',
          '#216266',
          '#F66F8F',
          '#C78F67',
          '#CB6256',
        ]}
        color={chosenColor}
        onChange={color => setChosenColor(color.hex)}
      />
    </XStack>
  )
}

export default ColorPicker
