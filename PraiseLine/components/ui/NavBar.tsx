import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname(); // Gets the current route (e.g., '/', '/live', '/notes')

  // Helper to check if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.title}>PraiseLine</Text>
      <View style={styles.navLinks}>
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
          <Text style={[styles.link, isActive('/') && styles.activeLink]}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(tabs)/live')}>
          <Text style={[styles.link, isActive('/(tabs)/live') && styles.activeLink]}>LIVE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(tabs)/notes')}>
          <Text style={[styles.link, isActive('/(tabs)/notes') && styles.activeLink]}>NOTES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(tabs)/settings')}>
          <Text style={[styles.link, isActive('/(tabs)/settings') && styles.activeLink]}>SETTINGS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  navLinks: { flexDirection: 'row', gap: 15 },
  link: { fontSize: 14, color: '#888' },
  activeLink: { color: '#000', fontWeight: 'bold', textDecorationLine: 'underline' }
});