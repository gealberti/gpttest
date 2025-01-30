import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function ForgotPassScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        navigation.navigate('NewPassword'); // Envia para a tela de nova senha
      }, 1500);
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Exibir mensagem de sucesso após envio */}
      {!isSubmitted ? (
        <>
          <Text style={styles.title}>Insira o e-mail cadastrado</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail ou Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail ou telefone"
              placeholderTextColor="#B0B0B0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Botão Próximo */}
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Enviar email</Text>
          </TouchableOpacity>

         
        </>
      ) : (
        <Text style={styles.successMessage}>
          Entre no link que enviamos para seu e-mail para alterar sua senha!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333', // Cinza escuro
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#555555', // Cinza médio
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 5,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#333333', // Cinza escuro para manter o padrão
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    color: '#FFFFFF',
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#1E90FF', // Azul claro para contraste
  },
  successMessage: {
    fontSize: 18,
    color: '#1E90FF',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ForgotPassScreen;
