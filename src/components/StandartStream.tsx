import { ResponsiveStream } from '@nivo/stream'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveStream = () => {
  const data = [
    {
      Raoul: 27,
      Josiane: 160,
      Marcel: 41,
      René: 132,
      Paul: 57,
      Jacques: 194,
    },
    {
      Raoul: 62,
      Josiane: 88,
      Marcel: 85,
      René: 167,
      Paul: 179,
      Jacques: 170,
    },
    {
      Raoul: 154,
      Josiane: 194,
      Marcel: 27,
      René: 63,
      Paul: 67,
      Jacques: 49,
    },
    {
      Raoul: 14,
      Josiane: 179,
      Marcel: 186,
      René: 161,
      Paul: 53,
      Jacques: 73,
    },
    {
      Raoul: 10,
      Josiane: 43,
      Marcel: 31,
      René: 186,
      Paul: 151,
      Jacques: 163,
    },
    {
      Raoul: 82,
      Josiane: 39,
      Marcel: 173,
      René: 151,
      Paul: 52,
      Jacques: 167,
    },
    {
      Raoul: 60,
      Josiane: 67,
      Marcel: 23,
      René: 174,
      Paul: 190,
      Jacques: 86,
    },
    {
      Raoul: 53,
      Josiane: 168,
      Marcel: 76,
      René: 128,
      Paul: 118,
      Jacques: 43,
    },
    {
      Raoul: 159,
      Josiane: 22,
      Marcel: 192,
      René: 60,
      Paul: 99,
      Jacques: 135,
    },
  ]
  return (
    <ResponsiveStream
      data={data}
      keys={['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridY={false}
      offsetType="silhouette"
      colors={{ scheme: 'purple_orange' }}
      borderColor={{ theme: 'background' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#2c998f',
          size: 4,
          padding: 2,
          stagger: true,
        },
        {
          id: 'squares',
          type: 'patternSquares',
          background: 'inherit',
          color: '#e4c912',
          size: 6,
          padding: 2,
          stagger: true,
        },
      ]}
      dotSize={8}
      dotColor={{ from: 'color' }}
      dotBorderWidth={2}
      dotBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.7]],
      }}
      isInteractive={false}
      enableStackTooltip={false}
    />
  )
}

export default MyResponsiveStream
