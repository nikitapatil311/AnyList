import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "emart grocery",
  webDir: "out",
  bundledWebRuntime: false,

  server: {
    androidScheme: "http://192.168.0.249:3000",
    cleartext: true,
  },
};

export default config;
