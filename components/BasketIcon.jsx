import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../Slices/basketSlice';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
 
  const currencyFormatter = (number) => {
    number = new Intl.NumberFormat("en-za", {
      style: "currency",
      currency: "ZAR",
    }).format(number);

    return number;
  };


  if(items.length === 0) return null;

  return (
    <View style={tw`absolute bottom-10 w-full z-50`}>
       <TouchableOpacity 
              onPress={()=> navigation.navigate('Basket')} 
              style={tw`mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center gap-x-2`}>
            <Text style={tw`text-white font-extrabold text-lg bg-[#01A296] py-1 px-2`}>
                {items.length}
             </Text>
            <Text style={tw`flex-1 text-white font-extrabold text-lg text-center`}>
                View Basket
            </Text>
             <Text style={tw`text-lg text-white font-extrabold`}>
                {currencyFormatter(basketTotal)}
            </Text>
       </TouchableOpacity>
    </View>
  )
}

export default BasketIcon;

const styles = StyleSheet.create({});