import 'dotenv/config';

export default {
  name: 'ExpoFirebaseStarter',
  slug: 'expo-firebase',
  privacy: 'public',
  platforms: ['ios', 'android'],
  version: '0.15.0',
  orientation: 'portrait',
  icon: './assets/flame.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#F57C00',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  android: {
    package: 'com.khalil.ExpoFirebaseStarter',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.khalil.ExpoFirebaseStarter',
  },
  extra: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  },
};
