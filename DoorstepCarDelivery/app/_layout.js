import { Stack } from "expo-router";

//Added screenOptions to hide basic index header here
export default function RootLayout() {
  return <Stack
        screenOptions={{headerShown: false}}
         />;
}
