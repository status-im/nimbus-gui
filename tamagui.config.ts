import { config } from '@tamagui/config';
import { createTamagui } from 'tamagui';

export default createTamagui(config);

// export type AppConfig = typeof appConfig
// declare module 'tamagui' {
//   interface TamaguiCustomConfig extends AppConfig { }
// }
// export default appConfig
