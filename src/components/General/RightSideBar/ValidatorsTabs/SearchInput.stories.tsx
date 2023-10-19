import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import SearchInput from './SearchInput'

const meta = {
  title: 'General/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: { value: string }) => {
  const [searchValue, setSearchValue] = useState(args.value)

  return <SearchInput value={searchValue} changeSearchValue={setSearchValue} />
}

Default.args = {
  value: '',
}
