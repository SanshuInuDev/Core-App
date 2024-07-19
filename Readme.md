# Sanshu Mobile App

![status badge](https://badgen.net/badge/status/in_dev/yellow)

### Run Demo

- `npm` to install dependencies
```sh
npm install
```
- Fill `.env.template` and save as `.env`
```shell
EXPO_PUBLIC_SERVER_URL = 
EXPO_PUBLIC_COINGECKO_API = 
EXPO_PUBLIC_CRYPTOPANIC_API =
EXPO_PUBLIC_WEB3AUTH_CLIENT_ID = 
EXPO_PUBLIC_WALLET_CONNECT_PROJECT_ID = 
EXPO_PUBLIC_SUPABASE_URL = 
EXPO_PUBLIC_SUPABASE_API_KEY = 
```
- Install EAS CLI
```sh
- npm install -g eas-cli
```
- Log in or sign up for an Expo account
```sh
- eas login
```
- Initialize and link the project to EAS
```sh
- eas init
```
- Configure project for EAS Build
```sh
- eas build:configure
```
- Create a build for the development profile
```sh
- eas build --platform android --profile development
```
- start development app with emulator
```sh
- npm start
- npx expo start
```
- press `a` key to continue ruinning