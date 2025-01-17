import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '@env';
import Markdown from 'react-native-markdown-display';

const openai = new OpenAI({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true });

export function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (userMessage) => {
    const userMessageObj = {
      id: uuid.v4(),
      text: userMessage,
      createdAt: new Date(),
      user: { id: 1, name: 'You' },
    };

    setMessages((prevMessages) => [userMessageObj, ...prevMessages]);
    setInput('');
    setIsTyping(true);

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: userMessage },
        ],
        model: 'gpt-4o-mini',
      });

      const aiMessage = {
        id: uuid.v4(),
        text: completion.choices[0].message.content,
        createdAt: new Date(),
        user: { id: 2, name: 'AI Assistant', avatar: 'https://placeimg.com/140/140/any' },
      };

      setMessages((prevMessages) => [aiMessage, ...prevMessages]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const renderMessage = ({ item }) => {
    const isUser = item.user.id === 1;
    return (
      <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.aiMessage]}>
        <Markdown style={{ body: { color: isUser ? 'white' : '#333', fontSize: 16 } }}>
          {item.text}
        </Markdown>
        <Text style={styles.timestamp}>{item.createdAt.toLocaleTimeString()}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        inverted
        contentContainerStyle={styles.messageList}
      />

      {isTyping && <Text style={styles.typingIndicator}>AI is typing...</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={input}
          onChangeText={setInput}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => input.trim() && sendMessage(input.trim())}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f8',
  },
  messageList: {
    padding: 10,
  },
  messageContainer: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 12,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userMessage: {
    backgroundColor: '#2596be',
    alignSelf: 'flex-end',
  },
  aiMessage: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    borderColor: '#e6e6e6',
    borderWidth: 1,
  },
  timestamp: {
    fontSize: 10,
    color: '#999',
    marginTop: 5,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#2596be',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  typingIndicator: {
    padding: 10,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
  },
});

export default ChatScreen;
