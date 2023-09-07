import type { Meta, StoryObj } from '@storybook/react'

import ActivationValidatorSetup from './ActivationValidatorSetup'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
    title: 'ValidatorOnboarding/ActivationValidatorSetup',
    component: ActivationValidatorSetup,

    tags: ['autodocs'],
    decorators: [withRouter()],
} satisfies Meta<typeof ActivationValidatorSetup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
