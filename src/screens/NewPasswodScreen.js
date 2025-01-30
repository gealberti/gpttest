import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function NewPasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

  const handleResetPassword = () => {
    if (password === confirmPassword && password.length >= 6) {
      navigation.navigate('LoginScreen'); // Redireciona para Login após redefinição
    } else {
      alert('As senhas não coincidem ou são muito curtas!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <Text style={styles.title}>Crie uma nova senha</Text>

      {/* Campo de Senha */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nova Senha</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua nova senha"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={isPasswordHidden}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
            <Ionicons name={isPasswordHidden ? 'eye-off' : 'eye'} size={20} color="#A9A9A9" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Campo de Confirmar Senha */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Repetir Senha</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Repita sua nova senha"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={isConfirmPasswordHidden}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)}>
            <Ionicons name={isConfirmPasswordHidden ? 'eye-off' : 'eye'} size={20} color="#A9A9A9" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão Redefinir */}
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Redefinir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222', // Cinza escuro
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
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#DDDDDD',
    marginBottom: 5,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333', // Cinza médio
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#222222',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewPasswordScreen;
