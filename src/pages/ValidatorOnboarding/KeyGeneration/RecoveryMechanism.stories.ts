import type { Meta, StoryObj } from '@storybook/react'

import RecoveryMechanism from './RecoveryMechanism'
import { KEY_FILES } from '../../../constants'

const meta = {
  title: 'ValidatorOnboarding/RecoveryMechanism',
  component: RecoveryMechanism,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RecoveryMechanism>

export default meta
type Story = StoryObj<typeof meta>

export const Page: Story = {
  args: {
    recoveryMechanism: KEY_FILES,
    handleRecMechanismChange: () => {},
  },
}
