import type { Meta, StoryObj } from '@storybook/react'

import ManagementTable from './ManagementTable'
import { VALIDATOR_TABS } from '../../../constants'
import { useState } from 'react'

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
      tab={VALIDATOR_TABS[0]}
      searchValue={searchValue}
      changeSearchValue={changeSearchValue}
    />
  )
}

Default.args = {
  tab: VALIDATOR_TABS[0],
  searchValue: '',
  changeSearchValue: () => {},
}
