import { Tabs } from 'expo-router';
import Header from '../../components/ui/NavBar';
import NavBar from '../../components/ui/NavBar';

export default function TabLayout() {
  return (
    <>
      <NavBar />
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" />
        {/* Your other tabs go here */}
      </Tabs>
    </>
  );
}