import "react-native-url-polyfill/auto";
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { Provider } from "react-redux";
import { store } from "./store";


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            animation: "slide_from_left",
            animationTypeForReplace: "push"
          }}
        name="Home" 
        component={HomeScreen} />
        <Stack.Screen 
         options={{
          animation: "slide_from_right",
          animationTypeForReplace: "push"
         }}
        name="Restaurant" 
        component={RestaurantScreen} />
          <Stack.Screen 
         options={{
           presentation: 'modal',
           headerShown: false,
           animation: "slide_from_bottom",
           animationTypeForReplace: "push"
         }}
        name="Basket" 
        component={BasketScreen} />
        <Stack.Screen 
         options={{
           presentation: 'fullScreenModal',
           headerShown: false,
           animation: "slide_from_bottom",
           animationTypeForReplace: "push"
         }}
        name="PreparingOrder" 
        component={PreparingOrderScreen} />
        <Stack.Screen 
         options={{
           presentation: 'fullScreenModal',
           headerShown: false,
           animation: "slide_from_bottom",
           animationTypeForReplace: "push"
         }}
        name="Delivery" 
        component={DeliveryScreen} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({});
 