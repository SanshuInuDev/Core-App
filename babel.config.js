module.exports = function (api) {
  api.cache(true);
  return {
<<<<<<< HEAD
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"]
=======
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: ["react-native-iconify/plugin"],
>>>>>>> ed3159b7d106a8718cc5dc9080f6a2746ed04823
  };
};