// Imports
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native"

// Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import FeedScreen from './screens/FeedScreen'

// Tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  const [catName, setCatName] = useState("");

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#B3541E',
          tabBarInactiveTintColor: '#5A5A5A',
          tabBarStyle: {
                backgroundColor: '#F7F3EB',
              },
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >

        {/* HOME TAB */}
        <Tab.Screen
          name="Home"    
          options={{
            title: 'Home',
            tabBarAccessibilityLabel: 'Home tab',
            tabBarIcon: () => <Text style={{ fontSize: 22 }}>🏠</Text>,
          }}
        >
          {() => <HomeScreen catName={catName} />}
          
        </Tab.Screen>

        {/* FEED TAB */}
        <Tab.Screen 
          name="Feed" 
          component={FeedScreen}
          options={{ title: 'Feed Log', tabBarIcon: () => <Text>📝</Text> }}
        />
        {/* PROFILE TAB */}
        <Tab.Screen
          name="Profile"
          options={{
            title: 'Profile',
            tabBarAccessibilityLabel: 'Profile tab',
            tabBarIcon: () => <Text style={{ fontSize: 22 }}>🐈</Text>
          }}
        >
          {() => (
            <ProfileScreen
              catName={catName}
              setCatName={setCatName}
            />
          )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

