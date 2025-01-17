import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.welcomeText}>Bem-vindo!</Text>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate('Chat')}
      >
        <Text style={styles.chatButtonText}>Ir para o Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

function ChatScreenWithIntro() {
  return (
    <View style={styles.chatContainer}>
      <Text style={styles.introText}>Olá, isso é um chat por IA, pergunte o que quiser!</Text>
      <ChatScreen />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreenWithIntro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f8',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  chatButton: {
    backgroundColor: '#2596be',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#f7f7f8',
  },
  introText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    color: '#666',
    backgroundColor: '#e6e6e6',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default App;
