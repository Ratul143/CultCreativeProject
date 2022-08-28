// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobScreen from '../screens/JobScreen';
import {headerTitle} from '../constants/headerTitle';
import {routes} from '../constants/routes';
import {Image, TouchableOpacity} from 'react-native';
import icons from '../constants/icons';
import {AuthContext} from './AuthProvider';
import {windowWidth} from '../utils/Dimentions';

const Stack = createNativeStackNavigator();

function AppStack() {
  const {logout} = React.useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.jobsScreen}
        component={JobScreen}
        options={({}) => ({
          headerShown: true,
          headerTitle: headerTitle.companyName,
          headerTitleContainerStyle: {
            transform: [{translateX: -20}],
          },
          headerBackTitle: null,
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 5}} onPress={() => logout()}>
              <Image
                style={{
                  padding: 10,
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightColor: '#ccc',
                  borderRightWidth: 1,
                  width: 50,
                }}
                resizeMode="contain"
                source={icons.logout}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
