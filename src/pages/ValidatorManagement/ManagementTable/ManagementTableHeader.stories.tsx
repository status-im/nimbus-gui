import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import ManagementTableHeader from './ManagementTableHeader'

const meta = {
  title: 'ValidatorManagement/ManagementTableHeader',
  component: ManagementTableHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementTableHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const [isAllSelected, setIsAllSelected] = useState(false)

  const handleSelectAll = () => {
    setIsAllSelected(state => !state)
  }

  return (
    <ManagementTableHeader
      validatorsAmount={4}
      isAllSelected={isAllSelected}
      handleSelectAll={handleSelectAll}
    />
  )
}

Default.args = {
  isAllSelected: false,
  validatorsAmount: 4,
  handleSelectAll: () => {},
}
