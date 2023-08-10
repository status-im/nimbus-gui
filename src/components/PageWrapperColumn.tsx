import { ReactNode } from 'react'
import PageBackground from './PageBackground'
import { YStack } from 'tamagui'

type PageWrapperColumnProps = {
  children: ReactNode
}

const PageWrapperColumn = ({ children }: PageWrapperColumnProps) => {
  return (
    <PageBackground>
      <YStack
        space={'$2'}
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {children}
      </YStack>
    </PageBackground>
  )
}

export default PageWrapperColumn
