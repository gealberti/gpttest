import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [crm, setCrm] = useState('');
  const [uf, setUf] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>
      <Text style={styles.subtitle}>Preencha os campos abaixo para se cadastrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#B0B0B0"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInputMask
        type={"cel-phone"}
        options={{
          maskType: "BRL",
          withDDD: true,
          dddMask: "(99) ",
        }}
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#B0B0B0"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="CRM"
        placeholderTextColor="#B0B0B0"
        keyboardType="numeric"
        value={crm}
        onChangeText={setCrm}
      />
      <TextInput
        style={styles.input}
        placeholder="UF"
        placeholderTextColor="#B0B0B0"
        maxLength={2}
        value={uf}
        onChangeText={setUf}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir Senha"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        value={repetirSenha}
        onChangeText={setRepetirSenha}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C7384',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#0C7384',
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#0C7384',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroScreen;
