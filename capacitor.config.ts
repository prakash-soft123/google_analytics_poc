import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.google.analytics',
  appName: 'google_analytics_poc',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
