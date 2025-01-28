import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function FormScreen({ navigation }) {
  const [gender, setGender] = useState('Masculino');
  const [ageGroup, setAgeGroup] = useState('Criança');
  const [initials, setInitials] = useState('');
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitar mentoria</Text>

      <Text style={styles.label}>Iniciais do Paciente</Text>
      <TextInput
        style={styles.input}
        placeholder="Leo"
        placeholderTextColor="#7A7A7A"
        maxLength={3}
        value={initials}
        onChangeText={setInitials}
      />
      <Text style={styles.helperText}>Utilize apenas 3 caracteres</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.option, gender === 'Masculino' && styles.selectedOption]}
          onPress={() => setGender('Masculino')}
        >
          <Text style={styles.optionText}>Masculino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, gender === 'Feminino' && styles.selectedOption]}
          onPress={() => setGender('Feminino')}
        >
          <Text style={styles.optionText}>Feminino</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.option, ageGroup === 'Adulto' && styles.selectedOption]}
          onPress={() => setAgeGroup('Adulto')}
        >
          <Text style={styles.optionText}>Adulto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, ageGroup === 'Criança' && styles.selectedOption]}
          onPress={() => setAgeGroup('Criança')}
        >
          <Text style={styles.optionText}>Criança</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Anos"
          placeholderTextColor="#7A7A7A"
          keyboardType="numeric"
          value={years}
          onChangeText={setYears}
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="Meses"
          placeholderTextColor="#7A7A7A"
          keyboardType="numeric"
          value={months}
          onChangeText={setMonths}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Especialidade do caso"
        placeholderTextColor="#7A7A7A"
        value={specialty}
        onChangeText={setSpecialty}
      />

      <TextInput
        style={[styles.input, styles.largeInput]}
        placeholder="Descreva o caso"
        placeholderTextColor="#7A7A7A"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Chat')}>
        <Text style={styles.submitButtonText}>Enviar solicitação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  helperText: {
    fontSize: 12,
    color: '#7A7A7A',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  smallInput: {
    flex: 1,
    marginRight: 10,
  },
  largeInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  option: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selectedOption: {
    backgroundColor: '#4A4A4A',
  },
  optionText: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#4A4A4A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormScreen;
