import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          senha: password, 
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Main'); // Redireciona para a tela principal
      } else {
        Alert.alert('Erro', data.message || 'Usuário ou senha incorretos!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos entrar</Text>
      <Text style={styles.subtitle}>Bem-vindo de volta. Faça o seu login aqui!</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          placeholderTextColor="#B0B0B0"
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

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

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
    backgroundColor: '#333333',
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
    backgroundColor: '#555555',
    borderRadius: 8,
    padding: 15,
    color: '#FFFFFF',
    marginBottom: 15,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555555',
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
    color: '#333333',
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


//===============BACKUP DE QUANDO ERA SÓ FRONT =================

// import React, { useState } from 'react';
// import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// export function LoginScreen() {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isPasswordHidden, setIsPasswordHidden] = useState(true);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Vamos entrar</Text>
//       <Text style={styles.subtitle}>Bem-vindo de volta. Faça o seu login aqui!</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="E-mail ou Telefone"
//         placeholderTextColor="#B0B0B0"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.passwordInput}
//           placeholder="Senha"
//           placeholderTextColor="#B0B0B0"
//           secureTextEntry={isPasswordHidden}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity
//           style={styles.toggleVisibility}
//           onPress={() => setIsPasswordHidden(!isPasswordHidden)}
//         >
//           <Text style={styles.toggleVisibilityText}>{isPasswordHidden ? '👁️' : '🙈'}</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
//         <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.loginButton}
//         onPress={() => navigation.navigate('Main')}
//       >
//         <Text style={styles.loginButtonText}>Entrar</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
//         <Text style={styles.registerText}>
//           Não possui conta? <Text style={styles.registerLink}>Cadastre-se</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#333333', // Cinza escuro
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#555555', // Cinza médio
//     borderRadius: 8,
//     padding: 15,
//     color: '#FFFFFF',
//     marginBottom: 15,
//   },
//   passwordContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#555555', // Cinza médio
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   passwordInput: {
//     flex: 1,
//     padding: 15,
//     color: '#FFFFFF',
//   },
//   toggleVisibility: {
//     paddingHorizontal: 10,
//   },
//   toggleVisibilityText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
//   forgotPassword: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginBottom: 30,
//     textDecorationLine: 'underline',
//   },
//   loginButton: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     width: '100%',
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   loginButtonText: {
//     color: '#333333', // Cinza escuro para combinar
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   registerText: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   registerLink: {
//     fontWeight: 'bold',
//     textDecorationLine: 'underline',
//   },
// });

// export default LoginScreen;
