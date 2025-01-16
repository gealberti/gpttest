import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title="Vai para Tasks" 
        onPress={ () => navigation.navigate('Tasks')
        }
      />
    </View>
  );
}

export default HomeScreen;