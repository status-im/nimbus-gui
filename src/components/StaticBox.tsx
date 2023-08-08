import React, { ReactNode, CSSProperties } from 'react'
import { Paragraph, Separator, Text, XStack, YStack } from 'tamagui'
import { styled } from 'tamagui'
import { Image } from 'tamagui'

interface IconProps {
  source: string
  width?: number
  height?: number
}

const Icon: React.FC<IconProps> = ({ source, width = 16, height = 16, ...props }) => {
  return <Image {...props} source={{ uri: source }} width={width} height={height} />
}

interface IconTextProps {
  icon: string
  text: string
  fontWeight?: string
}

const IconText: React.FC<IconTextProps> = ({ icon, text, ...props }) => {
  return (
    <XStack
      style={{
        alignItems: 'center',
      }}
      space={'$2'}
    >
      <Icon source={icon} width={16} height={16} />
      <Paragraph {...props} color={'#000000'}>
        {text}
      </Paragraph>
    </XStack>
  )
}
const DivComponent: React.FC = props => <div {...props} />
const ShadowBox = styled(DivComponent, {
  boxSizing: 'border-box',
  borderRadius: '16px',
  boxShadow: '0px 4px 20px 0px rgba(9, 16, 28, 0.08)',
  width: '100%',
})

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
    <ShadowBox {...props}>
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: '8px 16px',
            position: 'relative', // Make XStack a positioning context
          }}
        >
          {/* Here add chart */}

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
          <IconText icon={stateIcon} text={stateText} fontWeight={'bold'} />
          {additionalStateText && <Text color={'#E95460'}>{additionalStateText}</Text>}
        </XStack>
      </YStack>
    </ShadowBox>
  )
}

export default StatisticBox
