import React from 'react';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="fields" />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}
