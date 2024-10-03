module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native-web$': 'react-native', // Correct alias: mapping react-native-web to react-native
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Include the file extensions you're using
      },
    ],
  ],
};
