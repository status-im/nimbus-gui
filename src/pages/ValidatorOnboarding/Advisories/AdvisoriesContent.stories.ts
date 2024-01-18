import type { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import AdvisoriesContent from './AdvisoriesContent'
import { ADVISORY_TOPICS } from './Advisories'

const meta = {
  title: 'ValidatorOnboarding/AdvisoriesContent',
  component: AdvisoriesContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof AdvisoriesContent>

export default meta
type Story = StoryObj<typeof meta>

const advisoryTopicsKeys = Object.keys(ADVISORY_TOPICS)
const advisoryTopicsValues = Object.values(ADVISORY_TOPICS)

export const ProofOfStake: Story = {
  args: {
    title: advisoryTopicsKeys[0],
    content: advisoryTopicsValues[0],
  },
}

export const Deposit: Story = {
  args: {
    title: advisoryTopicsKeys[1],
    content: advisoryTopicsValues[1],
  },
}

export const KeyManagement: Story = {
  args: {
    title: advisoryTopicsKeys[2],
    content: advisoryTopicsValues[2],
  },
}

export const BadBehaviour: Story = {
  args: {
    title: advisoryTopicsKeys[3],
    content: advisoryTopicsValues[3],
  },
}

export const Requirements: Story = {
  args: {
    title: advisoryTopicsKeys[4],
    content: advisoryTopicsValues[4],
  },
}

export const Risks: Story = {
  args: {
    title: advisoryTopicsKeys[5],
    content: advisoryTopicsValues[5],
  },
}
