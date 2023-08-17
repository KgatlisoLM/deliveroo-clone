import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React,  { useEffect, useState }  from 'react';
import CategoryCard from './CategoryCard';
import client from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      await client.fetch(`*[_type == "category"]`).then(data => {
        setCategories(data)
      }).catch(error => {
        console.log(error);
      })
      })();
  }, []);

  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {/* Category Card */}

        {categories.map((category) => (
            <CategoryCard 
            key={category._id}
            imageUrl={category.image}
            title={category.name}
            
            />
        ))}
    
    </ScrollView>
  )
}

export default Categories;

const styles = StyleSheet.create({})