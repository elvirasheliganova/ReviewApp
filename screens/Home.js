
import React, { useState } from 'react';

import { FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native';




export default function HomeScreen({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' }, 
  ]);
 

  return (
    <View style={styles.container}>
     
      <FlatList
     data={reviews}
     renderItem={({item})=>(
       <TouchableOpacity
       onPress={() => navigation.navigate('Review Details', item)} >
         <Text>{item.title}</Text>
       </TouchableOpacity>
      )}
      />
      </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
