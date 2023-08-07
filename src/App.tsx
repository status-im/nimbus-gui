 
 
import {   TamaguiProvider } from 'tamagui'
import './App.css'
import {  Provider as StatusProvider  } from '@status-im/components'
import { ResponsivePie } from '@nivo/pie'

import config from '../tamagui.config'
const data  = [
  {
    "id": "php",
    "label": "php",
    "value": 127,
    "color": "hsl(236, 70%, 50%)"
  },
  {
    "id": "javascript",
    "label": "javascript",
    "value": 540,
    "color": "hsl(249, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 240,
    "color": "hsl(72, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 435,
    "color": "hsl(122, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 197,
    "color": "hsl(186, 70%, 50%)"
  }
]
interface Data {
  id: string;
  label: string;
  value: number;
  color: string;
}
interface MyPieProps {
  data: Data[];
}


const MyResponsivePie = (props:MyPieProps) => {

  const {data}= props;
return(
  <>
  <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      // borderWidth={1}
      // borderColor={{
      //   from: 'color',
      //   modifiers: [
      //     [
      //       'darker',
      //       0.2
      //     ]
      //   ]
      // }}
      // arcLinkLabelsSkipAngle={10}
      // arcLinkLabelsTextColor="#333333"
      // arcLinkLabelsThickness={2}
      // arcLinkLabelsColor={{ from: 'color' }}
      // arcLabelsSkipAngle={10}
      // arcLabelsTextColor={{
      //     from: 'color',
      //     modifiers: [
        //         [
          //             'darker',
          //             2
          //         ]
          //     ]
          // }}
          // defs={[
            //     {
              //         id: 'dots',
              //         type: 'patternDots',
              //         background: 'inherit',
              //         color: 'rgba(255, 255, 255, 0.3)',
              //         size: 4,
              //         padding: 1,
              //         stagger: true
              //     },
              //     {
                //         id: 'lines',
      //         type: 'patternLines',
      //         background: 'inherit',
      //         color: 'rgba(255, 255, 255, 0.3)',
      //         rotation: -45,
      //         lineWidth: 6,
      //         spacing: 10
      //     }
      // ]}
      // fill={[
        //     {
          //         match: {
            //             id: 'ruby'
            //         },
      //         id: 'dots'
      //     },
      //     {
        //         match: {
          //             id: 'c'
          //         },
          //         id: 'dots'
          //     },
          //     {
      //         match: {
        //             id: 'go'
        //         },
        //         id: 'dots'
        //     },
        //     {
          //         match: {
            //             id: 'python'
            //         },
            //         id: 'dots'
            //     },
            //     {
              //         match: {
                //             id: 'scala'
                //         },
                //         id: 'lines'
                //     },
                //     {
                  //         match: {
                    //             id: 'lisp'
                    //         },
                    //         id: 'lines'
                    //     },
                    //     {
                      //         match: {
                        //             id: 'elixir'
                        //         },
                        //         id: 'lines'
                        //     },
                        //     {
                          //         match: {
                            //             id: 'javascript'
                            //         },
                            //         id: 'lines'
                            //     }
                            // ]}
                            // legends={[
                              //     {
                                //         anchor: 'bottom',
                                //         direction: 'row',
                                //         justify: false,
                                //         translateX: 0,
                                //         translateY: 56,
                                //         itemsSpacing: 0,
                                //         itemWidth: 100,
                                //         itemHeight: 18,
                                //         itemTextColor: '#999',
                                //         itemDirection: 'left-to-right',
                                //         itemOpacity: 1,
                                //         symbolSize: 18,
                                //         symbolShape: 'circle',
                                //         effects: [
      //             {
      //                 on: 'hover',
      //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        />
    </>)
    }
 

function App() {
  
  return (
    <TamaguiProvider config={config}>
      <StatusProvider >
<div style={{height:'504px'}}>

<MyResponsivePie data={data}/>
</div>
      </StatusProvider>
    </TamaguiProvider>
  )
}

export default App
