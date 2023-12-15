import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import SearchManagement from './SearchManagement'

const meta = {
  title: 'ValidatorManagement/SearchManagement',
  component: SearchManagement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchManagement>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: { searchValue: string }) => {
  const [searchValue, setSearchValue] = useState(args.searchValue)

  return <SearchManagement searchValue={searchValue} changeSearchValue={setSearchValue} />
}

Default.args = {
  searchValue: '',
}
