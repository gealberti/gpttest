import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now().toString(), text, completa: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const tasksAtualizadas = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completa: !task.completa };
      }
      return task;
    });
    setTasks(tasksAtualizadas);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleTask(item.id)}>
      <View style={[styles.task, item.completa && styles.taskCompleta]}>
        <Text style={[styles.taskText, item.completa && styles.taskCompletaText]}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  const ordTasks = () => {
    const tasksCompletas = tasks.filter((task) => task.completa);
    const tasksNCompletas = tasks.filter((task) => !task.completa);
    return [...tasksNCompletas, ...tasksCompletas];
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite uma tarefa" onSubmitEditing={({ nativeEvent }) => addTask(nativeEvent.text)} />
      <FlatList data={ordTasks()} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    marginBottom: 20,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b4a7d6',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: '100%',
  },
  taskCompleta: {
    backgroundColor: '#e6e6e6',
    textDecorationLine: 'line-through',
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
});

export default TasksScreen;