import type { Meta, StoryObj } from '@storybook/react'

import ValidatorsMenuWithPrice from './ValidatorsMenuWithPrice'
import { CLIENT_SETUP_SUBTITLE, DEPOSIT_SUBTITLE } from '../../constants'

const meta = {
  title: 'General/ValidatorsMenuWithPrice',
  component: ValidatorsMenuWithPrice,
  tags: ['autodocs'],
} satisfies Meta<typeof ValidatorsMenuWithPrice>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    validatorCount: 2,
    changeValidatorCountHandler: () => {},
    label: DEPOSIT_SUBTITLE,
  },
}

export const ClientSetupLabel: Story = {
  args: {
    validatorCount: 2,
    changeValidatorCountHandler: () => {},
    label: CLIENT_SETUP_SUBTITLE,
  },
}

export const WithLongValidatorCount: Story = {
  args: {
    validatorCount: 2000,
    changeValidatorCountHandler: () => {},
    label: DEPOSIT_SUBTITLE,
  },
}

export const WithoutValidatorCount: Story = {
  args: {
    validatorCount: 0,
    changeValidatorCountHandler: () => {},
    label: DEPOSIT_SUBTITLE,
  },
}

export const WithoutLabel: Story = {
  args: {
    validatorCount: 2,
    changeValidatorCountHandler: () => {},
    label: '',
  },
}

export const WithoutValues: Story = {
  args: {
    validatorCount: 0,
    changeValidatorCountHandler: () => {},
    label: '',
  },
}
