const path = require('path')
const {mergeConfig} =   require('vite')
const {vanillaExtractPlugin} =  require("@vanilla-extract/vite-plugin")

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return mergeConfig(config,{
      resolve: {
        alias: [
          {
            find: '@creight/ui',
            replacement: path.resolve(__dirname, '../../../packages/ui/'),
          },
        ],
      },
      plugins: [vanillaExtractPlugin()]
    })
  },
}
