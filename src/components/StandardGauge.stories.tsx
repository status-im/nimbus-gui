import type { Meta, StoryObj } from '@storybook/react'

import StandardGauge from './StandardGauge'

const meta = {
  title: 'General/StandardGauge',
  component: StandardGauge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ height: '25vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StandardGauge>

export default meta
type Story = StoryObj<typeof meta>

export const WithDataPoints: Story = {
  args: {
    data: [
      { id: '1', color: 'red', label: 'Red', value: 42 },
      { id: '2', color: 'blue', label: 'Blue', value: 1337 },
    ],
  },
}

export const WithoutDataPoints: Story = {
  args: {
    data: [],
  },
}
