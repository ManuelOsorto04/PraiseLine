import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Header() {
  const router = useRouter();

  /*return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>My App</Text>
      <View style={styles.navLinks}>
        <TouchableOpacity onPress={() => router.push('/(tabs)')}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/live')}><Text>LIVE</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/notes')}><Text>NOTES</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/settings')}><Text>SETTINGS</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );*/
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  navLinks: { flexDirection: 'row', gap: 10 }
});