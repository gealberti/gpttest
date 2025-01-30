import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, subtitle, time, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
      <Text style={styles.cardTime}>{time}</Text>
    </TouchableOpacity>
  );
};

export function MainScreen({ navigation }) {
  const data = [
    {
      id: '1',
      title: 'Dúvida 1',
      subtitle: 'Clínico Geral',
      time: 'Solicitado há 18 min',
    },
    {
      id: '2',
      title: 'Dúvida 2',
      subtitle: 'Pediatra',
      time: 'Solicitado há 10 min',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá! Bom dia,</Text>
        <Text style={styles.name}>Yarah Ferreira</Text>
        <Text style={styles.role}>MENTORADO</Text>
      </View>

      <Text style={styles.sectionTitle}>Mentorias</Text>

      {/* Botão Novo Chat */}
      <TouchableOpacity
        style={styles.newChatButton}
        onPress={() => navigation.navigate('Form')}
      >
        <Text style={styles.newChatText}>Novo Chat</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            time={item.time}
            onPress={() => navigation.navigate('Chat')}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FC',
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: '#333333',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greeting: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  role: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginVertical: 16,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6C757D',
    marginVertical: 8,
  },
  cardTime: {
    fontSize: 12,
    color: '#6C757D',
  },
  newChatButton: {
    backgroundColor: '#333333',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  newChatText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MainScreen;
