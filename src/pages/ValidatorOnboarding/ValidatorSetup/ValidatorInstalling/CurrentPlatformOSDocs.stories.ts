import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import CurrentPlatformOSDocs from './CurrentPlatformOSDocs'
import { MAC } from '../../../../constants'
import { DOCUMENTATIONS } from './documentations'

const meta = {
  title: 'ValidatorOnboarding/CurrentPlatformOSDocs',
  component: CurrentPlatformOSDocs,
  tags: ['autodocs'],
  decorators: [withRouter()],
} satisfies Meta<typeof CurrentPlatformOSDocs>

export default meta
type Story = StoryObj<typeof meta>

export const GethGeneral: Story = {
  args: {
    content: DOCUMENTATIONS['Geth'].general,
  },
}

export const GethMacOS: Story = {
  args: {
    content: DOCUMENTATIONS['Geth'].documentation[MAC],
  },
}
