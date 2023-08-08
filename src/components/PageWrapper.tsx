import { Stack, XStack, YStack, styled } from 'tamagui'
import TopBar from './TopBar'
import { ReactNode } from 'react'

const Background = styled(Stack, {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  width: '100vw',
})

type PageWrapperProps = {
  children: ReactNode
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Background>
      <div
        style={{
          border: '4px solid #09101C',
          borderRadius: '30px',
          padding: 0,
          margin: 0,
        }}
      >
        <YStack>
          <TopBar />
          <XStack
            space={'$8'}
            style={{
              background:
                'linear-gradient(180deg, rgba(245,242,254,1) 0%, rgba(255,255,255,1) 100%)',
              width: '100%',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            {children}
          </XStack>
        </YStack>
      </div>
    </Background>
  )
}

export default PageWrapper
