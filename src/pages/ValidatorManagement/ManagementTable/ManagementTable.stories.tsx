import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import ManagementTable from './ManagementTable'
import { VALIDATOR_TABS_MANAGEMENT } from '../../../constants'

const meta = {
  title: 'ValidatorManagement/ManagementTable',
  component: ManagementTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ManagementTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const [searchValue, setSearchValue] = useState('')

  const changeSearchValue = (os: string) => {
    setSearchValue(os)
  }

  return (
    <ManagementTable
      tab={VALIDATOR_TABS_MANAGEMENT[0]}
      searchValue={searchValue}
      changeSearchValue={changeSearchValue}
    />
  )
}

Default.args = {
  tab: VALIDATOR_TABS_MANAGEMENT[0],
  searchValue: '',
  changeSearchValue: () => {},
}
