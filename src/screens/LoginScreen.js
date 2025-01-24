import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos entrar</Text>
      <Text style={styles.subtitle}>Bem-vindo de volta.\nFaça o seu login aqui!</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail ou Telefone"
        placeholderTextColor="#A9D0D6"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          placeholderTextColor="#A9D0D6"
          secureTextEntry={isPasswordHidden}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.toggleVisibility}
          onPress={() => setIsPasswordHidden(!isPasswordHidden)}
        >
          <Text style={styles.toggleVisibilityText}>{isPasswordHidden ? '👁️' : '🙈'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {}}
      >
<Text style={styles.loginButtonText} onPress={() => { 
  console.log("Botão clicado");
  navigation.navigate('Main');
}}>
  Entrar
</Text>      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.registerText}>
          Não possui conta? <Text style={styles.registerLink}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C7384',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#1A8CA2',
    borderRadius: 8,
    padding: 15,
    color: '#FFFFFF',
    marginBottom: 15,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A8CA2',
    borderRadius: 8,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    color: '#FFFFFF',
  },
  toggleVisibility: {
    paddingHorizontal: 10,
  },
  toggleVisibilityText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#0C7384',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  registerLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
