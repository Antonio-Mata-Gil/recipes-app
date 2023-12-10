# myRecipes App 🍽️

Welcome to the myRecipes application! This is a recipe app developed using Angular, Ionic, and Capacitor. Follow these instructions to convert it into an APK that you can install on Android devices using Android Studio.

## Prerequisites 📋

Ensure you have the following components installed:
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Android Studio](https://developer.android.com/studio)

## Conversion to APK 🚀

- Clone this repository to your local machine:
  ```bash
  git clone https://github.com/your-username/myRecipes.git

## Step 2: Install Dependencies 📦
Navigate to the project folder and install the required dependencies by running:
- cd recipes-app
- npm install

## Step 3: Build the Ionic Application 💻
Ensure you're in the project root directory and execute:
- ionic build

## Step 4: Add Platforms 📱
Run the following command to add the Android platform:
- ionic capacitor add android

## Step 5: Generate APK with Android Studio 🚀
- Open Android Studio.
- On the welcome screen, select "Open an existing Android Studio project" and navigate to the myRecipes/platforms/android project folder.
- Android Studio will load the project. Once loaded, go to "Build" in the menu and select "Build Bundle(s) / APK(s)".
- Choose "Build APK(s)" and Android Studio will generate the APK for you.
- The APK will be generated in the "app/build/outputs/apk/debug" folder in your Android Studio project.

## Step 6: Install the APK on an Android Device 📲
- You can transfer the APK to your Android device and then install it. Ensure you enable installation from unknown sources in your device settings if needed.

That's it! You should now have the myRecipes app installed on your Android device.
