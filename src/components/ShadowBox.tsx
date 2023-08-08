import { Stack, styled } from 'tamagui'

const ShadowBox = styled(Stack, {
  boxSizing: 'border-box',
  borderRadius: '16px',
  boxShadow: '0px 4px 20px 0px rgba(9, 16, 28, 0.08)',
  width: '100%',
})

export default ShadowBox
