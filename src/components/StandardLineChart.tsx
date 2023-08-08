import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = () => {
  const data = [
    {
      id: 'japan',
      color: 'hsl(315, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 34,
        },
        {
          x: 'helicopter',
          y: 60,
        },
        {
          x: 'boat',
          y: 20,
        },
      ],
    },
  ]
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 30 }}
      xScale={{ type: 'point' }}
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
      pointSize={10}
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
