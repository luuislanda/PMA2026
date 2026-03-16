import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Screen1"
          component={Screen1}
          options={{ title: 'Screen 1', tabBarIcon: () => <Text>1️⃣</Text>, tabBarAccessibilityLabel: 'Screen 1 tab' }}
        />
        <Tab.Screen
          name="Screen2"
          component={Screen2}
          options={{ title: 'Screen 2', tabBarIcon: () => <Text>2️⃣</Text>, tabBarAccessibilityLabel: 'Screen 2 tab' }}
        />
        <Tab.Screen
          name="Screen3"
          component={Screen3}
          options={{ title: 'Screen 3', tabBarIcon: () => <Text>3️⃣</Text>, tabBarAccessibilityLabel: 'Screen 3 tab' }}
        />
        <Tab.Screen
          name="Screen4"
          component={Screen4}
          options={{ title: 'Screen 4', tabBarIcon: () => <Text>4️⃣</Text>, tabBarAccessibilityLabel: 'Screen 4 tab' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
