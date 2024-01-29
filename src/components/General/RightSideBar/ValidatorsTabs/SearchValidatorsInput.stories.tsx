import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import SearchValidatorsInput from './SearchValidatorsInput'

const meta = {
  title: 'General/SearchValidatorsInput',
  component: SearchValidatorsInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchValidatorsInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: { searchValue: string }) => {
  const [searchValue, setSearchValue] = useState(args.searchValue)

  return (
    <SearchValidatorsInput
      searchValue={searchValue}
      changeSearchValue={setSearchValue}
    />
  )
}

Default.args = {
  searchValue: '',
}
