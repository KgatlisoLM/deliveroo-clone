import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import tw from "twrnc";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../Slices/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();


  useEffect(() => {
        dispatch(setRestaurant({
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        }))
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);



  return (
  <>
    <BasketIcon/>
    <ScrollView
     showsVerticalScrollIndicator={false}
  
    >
      <View>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          style={tw`w-full h-56 bg-gray-300 p-4`}
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}
        >
          <ArrowLeftIcon size={20} color={"#00CCBB"} />
        </TouchableOpacity>
      </View>

      <View style={tw`bg-white`}>
        <View style={tw`px-4 pt-4`}>
          <Text style={tw`text-3xl font-bold`}>{title}</Text>
          <View style={tw`flex-row gap-x-2 my-1`}>

            <View style={tw`flex-row items-center gap-x-1`}>
              <StarIcon color={"green"} opacity={0.5} size={22} />
              <Text style={tw`text-xs text-gray-500`}>
                <Text style={tw`text-green-500`}>{rating}</Text> &#x2022; {genre}
              </Text>
            </View>

            <View style={tw`flex-row items-center gap-x-1`}>
              <MapPinIcon color={"gray"} opacity={0.4} size={22} />
              <Text style={tw`text-xs text-gray-500`}>
                <Text style={tw`text-gray-500`}>Nearby</Text> &#x2022; {address}
              </Text>
            </View>
          </View>
          <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
        </View>
          <TouchableOpacity
          style={tw`flex-row items-center gap-x-2 p-4 border-gray-200 border-y border-solid border-2`}>
             <QuestionMarkCircleIcon color={"gray"} opacity={0.5} size={22}/>
             <Text style={tw`pl-2 flex-1 text-base font-bold`}>
                Have a food allergy?
             </Text>
              <ChevronRightIcon  size={20} color={"#00CCBB"} />
          </TouchableOpacity>
      </View>
      <View style={tw`pb-30`}>
          <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>
             Menu
          </Text>

          {/* dish rows */}
          {dishes.map(dish =>(
            <DishRow
             key={dish._id}
             id={dish._id}
             name={dish.name}
             description={dish.short_description}
             price={dish.price}
             image={dish.image}
            />
          ))}

      </View>
    </ScrollView>
    </>);
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
