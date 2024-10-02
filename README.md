# Shared Components Setup for Vite React and Expo App

At the time of writing this, this project is a simple setup for sharing components between a **Vite React app** using `react-router` and an **Expo app** using `expo-router`. 

The shared components all reside within the **Expo app** and are imported into the **Vite app**, where `react-native-web` is used to render them in a browser environment.

## Installation

To get started, you can install all the necessary dependencies for both the Vite and Expo apps.

1. Open a terminal and navigate to the root directory of the project.
2. Run the following command to install all dependencies:
   ```bash
   npm install
    ```

## Running the Vite App (Browser)

To run the Vite React app in your browser, use the following command:
```bash
npm run dev
```

## Running the Expo App (Mobile Device)

To test the Expo app on a mobile device, the easiest way is to use the **Expo Go** app:

1. Install the **Expo Go** app on your mobile device from the App Store or Google Play.
2. Open a terminal and navigate to the root directory of the project.
3. Run the following command to start the Expo development server:
   ```bash
   npm run expo
4. After running the command, a QR code will appear in the terminal.
5. Open the Expo Go app on your mobile device and scan the QR code. This will allow you to test the Expo app on your device.