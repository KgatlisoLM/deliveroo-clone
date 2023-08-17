import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
  (async () => {
    await client.fetch(`*[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
      }
    }`).then(data => {
      setFeaturedCategories(data)
    }).catch(error => {
      console.log(error);
    })

    })();
   
  }, []);
 

  return (
    <SafeAreaView style={[styles.androidSafeView, tw`bg-white pt-5`]}>
      {/* header */}
      <View style={tw`flex-row pb-3 items-center mx-4 gap-x-2`}>
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          style={[
            { width: 50, height: 50, resizeMode: "contain" },
            tw`h-7 w-7 bg-gray-300 p-4 rounded-full`,
          ]}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl items-center flex-row`}>
            Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>
        <UserIcon size={35} color={"#00CCBB"} />
      </View>

      {/* Search */}
      <View style={tw`flex-row items-center gap-x-2 pb-2 mx-4`}>
        <View style={tw`flex-1 flex-row gap-x-2 bg-gray-200 p-3 items-center`}>
          <MagnifyingGlassIcon size={20} color={"gray"} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>

      {/* body */}
      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 135,
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured rows */}
        {featuredCategories?.map((category) => (
            <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />

        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  androidSafeView: {
    paddingTop: Constants.statusBarHeight,
  },
});
