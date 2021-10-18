import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Logo from '../ios_app/components/logo'
import HomePage from './pages/Home'
import DetailPage from './pages/Detail'
import ListPage from './pages/List'
import { SafeAreaView,useSafeAreaInsets } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()



function MyTabBar({ state, descriptors, navigation }) {
  const inset = useSafeAreaInsets();
  return (
    <View style={{ flexDirection: 'row',marginBottom: inset.bottom / 2 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={route.key}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222',textAlign:'center' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, animationEnabled: false }} tabBar={props => <MyTabBar {...props} />} backBehavior="none" >
      <Tab.Screen
        name='首页'
        component={HomePage}
      >
      </Tab.Screen>

      <Tab.Screen
        name='列表'
        component={ListPage}
      >
      </Tab.Screen>
    </Tab.Navigator>
  )
}
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Tab'
          component={BottomTab}
          options={{
            headerTitle: props => <Logo {...props} />
          }}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Detail'
          component={DetailPage}
          options={[{
            title: '详情页',
          }]}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Index;
