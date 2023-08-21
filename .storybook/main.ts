import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',

  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
    'storybook-dark-mode',
    'storybook-addon-react-router-v6',
  ],

  docs: {
    autodocs: 'tag',
  },

  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = process.env.BASE_URL || './'
    }

    return config
  },
}

export default config
