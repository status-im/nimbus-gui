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

export const WithMonths: Story = {
    args: {
        data: [
            {
                name: 'Jan',
                pv: 0,
                pa: 0,
            },
            {
                name: 'Feb',
                pv: 0,
                pa: 0,
            },
            {
                name: 'Mar',
                pv: 0,
                pa: 0,
            },
            {
                name: 'Apr',
                pv: 0,
                pa: 0,
            },
            {
                name: 'May',
                pv: 0,
                pa: 0,
            },
            {
                name: 'Aug',
                pv: 0,
                pa: 0,
            },
            {
                name: 'Jun',
                pv: 0,
                pa: 0,
            },
            {
                name: 'Jul',
                pv: 1,
                pa: 0,
            },
            {
                name: 'Sep',
                pv: 0,
                pa: 0,
            },
            {
                name: 'Oct',
                pv: 0,
                pa: 0,
            },
            {
                name: 'Nov',
                pv: 1,
                pa: 1,
            },
            {
                name: 'Dec',
                pv: 1,
                pa: 1,
            },
        ]
    }
}