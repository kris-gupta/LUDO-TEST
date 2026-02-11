module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '$assets': './src/assets',
          '$redux': './src/redux',
          '$screens': './src/screens',
          '$constants': './src/constants',
          '$helpers': './src/helpers',
          '$components': './src/components',
          '$hooks': './src/hooks',
          '$navigation': './src/navigation',
        },
      },
    ],
    // Worklets plugin should usually come after the resolver
    'react-native-worklets/plugin',
  ],
};
