module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-flow',
      '@babel/plugin-syntax-jsx',
    ],
    plugins: [
      'babel-plugin-styled-components',
      '@babel/plugin-proposal-class-properties',
    ]
  }