import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {

  const navigation = useNavigation();


  return (
    <TouchableOpacity 
     onPress={() => {
          navigation.navigate('Restaurant', {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
          })
     }}
    style={tw`bg-white mr-3 shadow`}>
       <Image
         source={{
            uri: urlFor(imgUrl).url()
         }}
         style={[tw`h-36 w-65 rounded-sm`, {resizeMode: 'contain'}]}
       />
       <View style={tw`px-2 pb-4`}>
           <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
           <View style={tw`flex-row items-center gap-x-1`}>
              <StarIcon color={'green'} opacity={0.5} size={22}/>
               <Text style={tw`text-xs text-gray-500`}>
                 <Text style={tw`text-green-500`}>{rating}</Text> &#x2022; {genre}
                </Text>
           </View>

           <View style={tw`flex-row items-center gap-x-1`}> 
             <MapPinIcon color={'gray'} opacity={0.4} size={22}/>
             <Text style={tw`text-xs text-gray-500`}>Nearby &#x2022; {address}</Text>
           </View>
       </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard;

const styles = StyleSheet.create({})