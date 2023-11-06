import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.amapp.app',
  appName: 'MyRecipes',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
