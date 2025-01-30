import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '@env';

const openai = new OpenAI({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true });

export function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([
    { id: uuid.v4(), text: 'Olá, tudo bem?', time: '10:26', user: 'bot' },
    { id: uuid.v4(), text: 'Bem-vindo(a) à mentoria da Educado!', time: '10:26', user: 'bot' },
    { id: uuid.v4(), text: 'Alertamos para que não compartilhe dados pessoais e imagens...', time: '10:26', user: 'bot' },
    { id: uuid.v4(), text: 'Depois de iniciado o atendimento, se não houver interação após 2 horas, o atendimento será encerrado.', time: '10:26', user: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: uuid.v4(),
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      user: 'user',
    };

    setMessages((prevMessages) => [userMessage, ...prevMessages]);
    setInput('');
    setIsTyping(true);

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: 'Você é um assistente médico que fornece informações úteis.' },
          { role: 'user', content: userMessage.text },
        ],
        model: 'gpt-4o-mini',
      });

      const aiMessage = {
        id: uuid.v4(),
        text: completion.choices[0].message.content,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        user: 'bot',
      };

      setMessages((prevMessages) => [aiMessage, ...prevMessages]);
    } catch (error) {
      console.error('Erro ao obter resposta da OpenAI:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const renderMessage = ({ item }) => {
    const isUser = item.user === 'user';
    return (
      <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.botMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.timestamp}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>JA</Text>
          <Text style={styles.headerSubtitle}>Cardiologia</Text>
        </View>
      </View>

      {/* Lista de mensagens */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        inverted
        contentContainerStyle={styles.messageList}
      />

      {/* Indicador de digitação */}
      {isTyping && <ActivityIndicator style={styles.typingIndicator} size="small" color="#333333" />}

      {/* Botão "Encerrar chamado" */}
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Encerrar chamado</Text>
      </TouchableOpacity>

      {/* Campo de entrada de mensagem */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escreva aqui..."
          value={input}
          onChangeText={setInput}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  attentionButton: {
    backgroundColor: '#333333', // Cinza escuro
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  attentionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  messageList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
    marginVertical: 5,
  },
  botMessage: {
    backgroundColor: '#D1D1D1', // Cinza claro
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#E4E4E4', // Outro tom de cinza claro
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    color: '#333333', // Cinza escuro
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
    marginTop: 5,
  },
  typingIndicator: {
    padding: 10,
    textAlign: 'center',
  },
  closeButton: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#D00000',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F0F0F0',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#333333', // Cinza escuro
    borderRadius: 20,
    padding: 10,
  },
});

export default ChatScreen;
