import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import OSCards from './OSCards'
import { MAC } from '../../../../constants'

const meta = {
  title: 'ValidatorOnboarding/OSCards',
  component: OSCards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OSCards>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: { selectedOS: string }) => {
  const [selectedOS, setSelectedOS] = useState(args.selectedOS)

  const handleOSCardClick = (os: string) => {
    setSelectedOS(os)
  }

  return <OSCards selectedOS={selectedOS} handleOSCardClick={handleOSCardClick} />
}

Default.args = {
  selectedOS: MAC,
}
