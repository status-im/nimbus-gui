import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = () => {
  const data = [
    {
      id: 'japan',
      color: 'hsl(315, 70%, 50%)',
      data: [
        {
          x: '1',
          y: 15,
        },
        {
          x: '2',
          y: 12,
        },
        {
          x: '3',
          y: 43,
        },
        {
          x: '4',
          y: 20,
        },
        {
          x: '5',
          y: 60,
        },
        {
          x: '6',
          y: 5,
        },
        {
          x: '7',
          y: 15,
        },
        {
          x: '8',
          y: 12,
        },
        {
          x: '9',
          y: 43,
        },
        {
          x: '10',
          y: 20,
        },
        {
          x: '11',
          y: 60,
        },
        {
          x: '12',
          y: 5,
        },
      ],
    },
  ]
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: -75 }}
      xScale={{ type: 'linear', min: 0, max: 12 }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      pointSize={1}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
    />
  )
}
export default MyResponsiveLine
