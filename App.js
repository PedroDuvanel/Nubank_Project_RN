// // App.js

// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import HomeScreen from './src/screens/Home'; 

// const App = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <HomeScreen />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F5F5F5', 
//     },
// });

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'; 
import FazerPix from './src/screens/FazerPix'; 

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="FazerPix" component={FazerPix} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;