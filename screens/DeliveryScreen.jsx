import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../Slices/restaurantSlice";
import tw from "twrnc";
import Constants from "expo-constants";
import { XMarkIcon } from "react-native-heroicons/solid";
import MapView, {Marker} from 'react-native-maps';
import * as Progress from "react-native-progress"

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurants = useSelector(selectRestaurant);

  return (
    <View style={tw`bg-[#00CCBB] flex-1`}>
      <SafeAreaView style={[styles.androidSafeView, tw`z-50`]}>
        <View style={tw`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text style={tw`font-light text-white text-lg`}>Order Help</Text>
        </View>
        <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-lg`}>
          <View style={tw`flex-row justify-between`}>
            <View>
              <Text style={tw`text-lg text-gray-400`}>Estimated Arrival</Text>
              <Text style={tw`text-3xl font-bold`}>20-35 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              style={tw`h-20 w-20`}
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true}/>
          <Text style={tw`mt-3 text-gray-500`}>
            Your order at {restaurants.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>
        
     <MapView 
       initialRegion={{
         latitude: restaurants.lat,
         longitude: restaurants.long,
         latitudeDelta: 0.005,
         longitudeDelta: 0.005,
       }}
       style={tw`flex-1 -mt-10 z-0`}
       mapType="mutedStandard"
     >
      <Marker 
        coordinate={{
            latitude: restaurants.lat,
            longitude: restaurants.long
        }}
         title={restaurants.title}
         description={restaurants.short_description}
         identifier="origin"
        pinColor="#00CCBB"
        />
    </MapView>
      <SafeAreaView style={tw`bg-white flex-row items-center gap-x-5 h-28`}>
         <Image
           source={{
             uri: "https://links.papareact.com/wru"
           }}
           style={tw`h-12 w-12 bg-gray-300 p-4 rounded-full ml-5`}
         />
         <View style={tw`flex-1`}>
            <Text style={tw`text-lg`}>
                 User Test
            </Text>
            <Text style={tw`text-gray-400`}>Your Driver</Text>
         </View>
         <Text style={tw`text-[#00CCBB] text-xl mr-5 font-bold`}>Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  androidSafeView: {
    paddingTop: Constants.statusBarHeight,
  },
});
