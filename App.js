import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInPage from "./page/signIn";
import LogInPage from "./page/logIn";
import forgetpwPage from "./page/forgetpw";
import newpwPage from "./page/newpw";
import mainPage from "./page/main";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const MealsNavigator = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <MealsNavigator.Navigator initialRouteName="MAIN"
        screenOptions={{
          headerStyle: { backgroundColor: "#2a9454", },
          headerTintColor: "white",
        }}
      >
        <MealsNavigator.Screen name="MAIN" component={mainPage} />

        <MealsNavigator.Screen name="LOG-IN" component={LogInPage} />
        <MealsNavigator.Screen name="SIGN-UP" component={SignInPage}
          options={({ route }) => ({
            // title: route.params.categoryTitle.toString(),
            headerStyle: { backgroundColor: "#4285e9" }, headerTintColor: "white",
          })} />
        <MealsNavigator.Screen name="FORGOT PASSWORD" component={forgetpwPage} />
        <MealsNavigator.Screen name="NEW PASSWORD" component={newpwPage} />

      </MealsNavigator.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
