import { ReactNode } from 'react'
import PageBackground from './PageBackground'
import { XStack } from 'tamagui'
import BackgroundImage from './BackgroundImage'

type PageWrapperShadowProps = {
  backgroundImageSrc: string
  children: ReactNode
}

const PageWrapperShadow = ({ backgroundImageSrc, children }: PageWrapperShadowProps) => {
  return (
    <PageBackground>
      <XStack
        space={'$8'}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {children}
        <BackgroundImage background={backgroundImageSrc} />
      </XStack>
    </PageBackground>
  )
}

export default PageWrapperShadow
