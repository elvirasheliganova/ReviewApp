
import React from 'react';

import {  StyleSheet, Text,  View } from 'react-native';





export default function ReviewDetailsScreen({ route, navigation }) {

  const item = route.params;
  return (
    <View style={styles.container}>
      <Text>{ item.title }</Text>
      <Text>{ item.body }</Text>
      <Text>{ item.rating }</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
