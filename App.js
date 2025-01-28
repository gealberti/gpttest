import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import MainScreen from './src/screens/MainScreen';
import FormScreen from './src/screens/FormScreen';


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Image
        source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fflat-illustration-of-a-male-doctor-vector_13312862.html&psig=AOvVaw1qDe9hQSpnePPiu41HTT5c&ust=1737825990532000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDegLnwjosDFQAAAAAdAAAAABAR' }} 
        style={styles.image}
      />
      <Text style={styles.titleText}>Conheça a mentoria EducAIdoc</Text>
      <Text style={styles.descriptionText}>
        Conte com uma poderosa inteligência artificial especializada para ajudá-lo em tempo real na tomada de decisões.
      </Text>
      <TouchableOpacity
        style={styles.accessButton}
        onPress={() => navigation.navigate('Login')} // Corrigido para corresponder ao nome do Stack.Screen
      >
        <Text style={styles.accessButtonText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}> {/* Corrigido */}
        <Text style={styles.registerText}>Não possui conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Form" component={FormScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C7384',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Inter',
    textAlign: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Inter',
    textAlign: 'center',
    marginBottom: 20,
  },
  accessButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
  },
  accessButtonText: {
    color: '#0C7384',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
  registerText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Inter',
    textDecorationLine: 'underline',
  },
});

export default App;