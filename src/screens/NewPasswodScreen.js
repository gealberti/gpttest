import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function ForgotPassScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
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
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Botão Próximo */}
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>

          {/* Link para Login */}
          <Text style={styles.loginText}>
            Já possui uma conta? <Text style={styles.loginLink} onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
          </Text>
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
    backgroundColor: '#D3D3D3', // Fundo cinza
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
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 5,
  },
  button: {
    width: '100%',
    backgroundColor: '#008080',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
  successMessage: {
    fontSize: 18,
    color: '#008080',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ForgotPassScreen;
