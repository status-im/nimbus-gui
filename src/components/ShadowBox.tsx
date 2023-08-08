import { Stack, styled } from 'tamagui'

const ShadowBox = styled(Stack, {
  style: { boxSizing: 'border-box', boxShadow: '0px 4px 20px 0px rgba(9, 16, 28, 0.08)' },
  borderRadius: '16px',
  width: '100%',
})

export default ShadowBox
