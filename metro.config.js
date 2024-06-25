// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
<<<<<<< HEAD
=======
const { withNativeWind } = require('nativewind/metro');
>>>>>>> ed3159b7d106a8718cc5dc9080f6a2746ed04823

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

<<<<<<< HEAD
module.exports = config;
=======
module.exports = withNativeWind(config, { input: './app/global.css' });
>>>>>>> ed3159b7d106a8718cc5dc9080f6a2746ed04823
