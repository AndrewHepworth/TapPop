import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HelloWorld from './helloworld';
import LogoTitle from './logotitle';

import ButtonPage from './buttonpage';
import Animations from './animations';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        margin: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <View style={{margin: 5}}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('HelloWorld', {name: 'Andrew', age: 27})
          }
        />
      </View>

      <Button
        title="Go to buttons"
        onPress={() => navigation.navigate('ButtonPage')}
      />

      <View style={{margin: 5}}>
        <Button
          title="Animations"
          onPress={() => navigation.navigate('Animations')}
        />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'My Home', headerTitle: props => <LogoTitle />}}
        />
        <Stack.Screen
          name="HelloWorld"
          component={HelloWorld}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen name="ButtonPage" component={ButtonPage} />
        <Stack.Screen name="Animations" component={Animations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
