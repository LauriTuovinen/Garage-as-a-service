import * as React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import CarDetailsScreen from '../Screens/CarDetailsScreen';
import CarSelectionScreen from '../Screens/CarSelectionScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { light, dark } from "../assets/colors/colors"


const home = 'Home';
const carDetails = 'CarDetails';
const carSelection = 'CarSelection';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function OGNavigation() {

    return (
        <Tab.Navigator
            initialRouteName={home}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === home) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === carDetails) {
                        iconName = focused ? 'speedometer' : 'speedometer-outline'
                    } else if (rn === carSelection) {
                        iconName = focused ? 'car-sport-outline' : 'car-sport-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: light.accent,
                tabBarInactiveTintColor: '#545454',
                labelStyle: { paddingBottom: 4, fontSize: 10 },
                tabBarStyle: { backgroundColor: light.box },
                headerStyle: { backgroundColor: light.accent },
                headerTitleAlign: 'center',
            })}
        >
            <Tab.Screen name={home} component={HomeScreen} />
            <Tab.Screen name={carDetails} component={CarDetailsScreen} />
            <Tab.Screen name={carSelection} component={CarSelectionScreen} />
        </Tab.Navigator>
    )
}

export default function Navigation() {

    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#545454',
                labelStyle: { paddingBottom: 4, fontSize: 10 },
                headerStyle: { backgroundColor: light.box },
                headerTitleAlign: 'center',
            })}
        >
            <Stack.Screen
                name="OGNavigation"
                component={OGNavigation}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}