import { Stack } from 'tamagui'

type BackgroundImageProps = {
  background: string
}

const BackgroundImage = ({ background }: BackgroundImageProps) => {
  return (
    <Stack
      style={{
        boxShadow: 'inset 100px 0px 100px white',
        width: '650px',
        height: '100vh',
        background: `url(${background}) no-repeat`,
      }}
    />
  )
}

export default BackgroundImage
