import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Details from "./screens/Details";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  if (!loaded) return null;
  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    // ⚙️   Manifest: https://exp.host/@neosalvatore/nft Learn more.
    // ⚙️   Project page: https://expo.dev/@neosalvatore/nft?serviceType=classic&distribution=expo-go
    //
  );
};

export default App;

// expo 1,uncover 2,parent 3,nest 4,frost 5,book 6,network
// expo 7,eternal 8,cup 9,badge 10,rent 11,leisure 12,turn
