import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import LinkWithArrow from './LinkWithArrow'
import { LANDING } from '../../constants'

const meta = {
  title: 'General/LinkWithArrow',
  component: LinkWithArrow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof LinkWithArrow>

export default meta
type Story = StoryObj<typeof meta>

export const LeftArrow: Story = {
  args: {
    text: 'Learn More',
    to: LANDING,
    arrowLeft: true,
  },
}

export const RightArrow: Story = {
  args: {
    text: 'Learn More',
    to: LANDING,
    arrowRight: true,
  },
}

export const BothArrows: Story = {
  args: {
    text: 'Learn More',
    to: LANDING,
    arrowLeft: true,
    arrowRight: true,
  },
}

export const WithoutArrow: Story = {
  args: {
    text: 'Learn More',
    to: LANDING,
  },
}

export const WithoutText: Story = {
  args: {
    text: '',
    to: LANDING,
    arrowLeft: true,
  },
}

export const WithLongText: Story = {
  args: {
    text: 'This is a very long text that is used to test the component.',
    to: LANDING,
    arrowLeft: true,
  },
}

export const WithCustomStyle: Story = {
  args: {
    text: 'Learn More',
    to: LANDING,
    arrowLeft: true,
    style: { backgroundColor: 'lightgray' },
  },
}
