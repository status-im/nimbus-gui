import type { Meta, StoryObj } from '@storybook/react'

import UptimeChart from './UptimeChart'

const meta = {
    title: 'Dashboard/UptimeChart',
    component: UptimeChart,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        Story => (
            <div style={{ height: '20vh', width: '50vh' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
} satisfies Meta<typeof UptimeChart>

export default meta
type Story = StoryObj<typeof meta>

export const WithoutLabels: Story = {
    args: {
        data: [
            {
                pv: 1,
                pa: 1,
            },
            {
                pv: 0,
                pa: 0,
            },
            {
                pv: 0,
                pa: 0,
            },
            {
                pv: 0,
                pa: 1,
            },
            {
                pv: 0,
                pa: 0,
            },
            {
                pv: 1,
                pa: 0,
            },
            {
                pv: 0,
                pa: 1,
            },
        ]

    },
}
