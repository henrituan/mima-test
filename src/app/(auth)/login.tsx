import { router } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import { sleep } from '@/utils/promise.util';

import { useSession } from '@/contexts/auth.context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { ThemedView } from '@/components/ThemedView';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useSession();

  const handleLogin = async () => {
    setIsLoading(true);

    if (email.toLowerCase() === 'test@askmima.com' && password === 'askmima') {
      signIn();
      await sleep(1000);
      setIsLoading(false);

      router.replace('/');
    } else {
      setIsLoading(false);
      alert('Invalid email or password');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login</ThemedText>
      <ThemedTextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <ThemedTextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isLoading ? 'Loging in ...' : 'Login'}
        disabled={isLoading}
        onPress={handleLogin}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
