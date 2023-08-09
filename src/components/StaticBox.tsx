import React, { ReactNode, CSSProperties } from 'react'

import MyResponsiveLine from './StandardLineChart'
import ShadowBox from './ShadowBox'
import IconText from './IconText'
import { Paragraph, Separator, Text, XStack, YStack } from 'tamagui'

interface StatisticBoxProps {
  title: string
  memory: string
  stateIcon: string
  stateText: string
  additionalStateText?: string
  children?: ReactNode
  svgDataURL?: string
  imageUrl?: string
  style?: CSSProperties
}

const StatisticBox: React.FC<StatisticBoxProps> = ({
  title,
  memory,
  stateIcon,
  stateText,
  additionalStateText,
  children,
  ...props
}) => {
  return (
    <ShadowBox {...props} style={{ maxWidth: '284px', maxHeight: '136px' }}>
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative', // Make XStack a positioning context
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <MyResponsiveLine />
          </div>

          <YStack space={'$3'}>
            <Paragraph color={'#09101C'} size={'$6'} fontWeight={'600'}>
              {title}
            </Paragraph>
            <Paragraph color={'#09101C'} size={'$8'} fontWeight={'700'}>
              {memory}
            </Paragraph>
          </YStack>
          {children}
        </XStack>
        <Separator borderColor={'#e3e3e3'} />
        <XStack space={'$4'} style={{ padding: '10px 16px 10px 16px' }}>
          <IconText icon={stateIcon}>{stateText}</IconText>
          {additionalStateText && <Text color={'#E95460'}>{additionalStateText}</Text>}
        </XStack>
      </YStack>
    </ShadowBox>
  )
}

export default StatisticBox
