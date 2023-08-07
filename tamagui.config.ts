import { config } from '@tamagui/config'
import { Text, View } from 'react-native'

import { createTamagui, setupReactNative } from '@tamagui/core'

setupReactNative({ Text, View })

const appConfig = createTamagui(config)
export type AppConfig = typeof appConfig
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
export default appConfig
