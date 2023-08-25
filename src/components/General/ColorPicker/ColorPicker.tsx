import { XStack } from 'tamagui'
import { CustomPicker } from 'react-color'
import './ColorPicker.css'

type ColorPickerProps = {
  setChosenColor: (a: string) => void
}

const ColorPicker = ({ setChosenColor }: ColorPickerProps) => {
  const colors = [
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
  ]

  return (
    <>
      <XStack my={10} width="80%" flexWrap="wrap">
        {colors.map((color, i) => (
          <button
            key={i}
            type="button"
            className="color-picker-button"
            onClick={() => setChosenColor(color)}
            style={{ background: color, color: color }}
          ></button>
        ))}
      </XStack>
    </>
  )
}

export default CustomPicker(ColorPicker)
