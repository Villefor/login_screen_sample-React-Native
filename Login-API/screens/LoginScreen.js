import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const API_ENDPOINT = 'https://coretoolshomologaapi.redeinova.com.br/api/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      // Validate inputs
      if (email.length < 5 || password.length < 5) {
        Alert.alert('Validation Error', 'Email and password must be at least 5 characters.');
        return;
      }

      // Make API request
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: email,
          senha: password,
        }),
      });

      if (response.ok) {
        // Login successful
        Alert.alert('Success', 'Login successful!');
        // You can navigate to another screen or perform additional actions here
      } else {
        // Handle incorrect password
        Alert.alert('Error', 'Incorrect email or password. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#0F2027', '#203A43', '#2C5364']} style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.passwordIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialCommunityIcons name={showPassword ? 'eye-off' : 'eye'} size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: loading ? '#aaa' : '#237A57' }]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Login'}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderRadius: 4,  
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordIcon: {
    padding: 10,
  },
  button: {
    marginTop: '10%',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0,
    backgroundColor: '#237A57',
    borderColor: 'transparent',
    display: 'flex',
    fontFamily: 'JetBrains Mono, monospace',
    height: 48,
    justifyContent: 'center',
    lineHeight: 1,
    listStyle: 'none',
    overflow: 'hidden',
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;

