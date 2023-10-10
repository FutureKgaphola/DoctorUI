import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopDoctors from './screens/TopDoctors';
import Home from './screens/Home';
import * as Font from "expo-font";
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();
const options={title:'',headerShown: false};

export default function App() {
  const [fontsLoaded, setfont] = useState(null);
  let customFonts = {
    NunitoRegular: require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf")
    
  };
  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setfont(true);
  }
  useEffect(() => {
    loadFontsAsync();
  }, []);
  if (!fontsLoaded) {
    return null; //equivalent to returning the splashscreen
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={options}/>
        <Stack.Screen name="TopDoctors" component={TopDoctors} options={options}/>
      </Stack.Navigator>
    </NavigationContainer>
    
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
