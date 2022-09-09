import React, { useState } from 'react';
import { NavigationContainer, StackActions,  } from '@react-navigation/native';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import TaxBro_pink from './assets/TaxBro_pink.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, options }} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={options.container} />
        <Stack.Screen name="Password Reset" component={PasswordResetScreen} options={{ headerShown: false, options }} /> 
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={options.container} />
        <Tab.Screen>name="Returns" component={Returns} options={options.container}</Tab.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
  

function LoginScreen({ navigation }) {
  return (<View style={styles.container}>
    <Text style={{ color: "#fff", fontSize: 25, fontWeight: 'bold', }}>Login</Text>
    <Text style={{ Maxheight:90, height:70 }}></Text>
    <Image source={TaxBro_pink} style={{ width: 250, height: 250 }} />
    <Text style={{ color: "#fff", fontSize: 15,  }}>Email Address</Text>
    <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      />
    <Text></Text>
    <Text style={{ color: "#fff", fontSize: 15 }}>Password</Text>
    <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 } 
      secureTextEntry={true}
      onChangeText=""
      />
    <Text></Text>
    <Button title='Sign In' onPress={ () => { navigation.navigate("Dashboard"); }}></Button>
    <Text></Text>
    <Text style={{ color: "#FFF", fontSize: 14, }}>Forgot your Password?</Text>
    <Text onPress={() => (navigation.navigate("Password Reset"))} 
    style={{ color: "#fff", fontSize: 14, color: '#00F' }}>Reset it here.</Text>
    <Text style={{ height: 50 }}></Text>
    <StatusBar style="auto" />
    <Text style={{ color: "#fff", fontSize: 14, position:"absolute", bottom:35 }}>Don't have an account? </Text>
    <Text onPress={() => navigation.navigate("Sign Up")}
           style={{ fontSize: 14, color: '#00F', position:"absolute", bottom:15 }} >Click here to Sign Up.</Text>
  </View>
  );
}

function SignUpScreen({ navigation }) {
  return(
    <View style={styles.container}>
    <Image source={TaxBro_pink} style={{ width: 150, height: 250}} />
    <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>First Name</Text>
    <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
      <Text></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Last Name</Text>
      <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
      <Text></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Email Address</Text>
      <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
      <Text></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Password</Text>
      <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30,  }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
    <Text></Text>
    <Button title='Sign Up' onPress={() => { navigation.navigate("Login"); }} style={{ top: 0  }}></Button>  
    <Text style={{ height:90, Maxheight:100 }}></Text>
    <Text style={{ color: "#fff", fontSize: 14, position:"absolute", bottom:35 }}>Already have an account? </Text>
    <Text onPress={() => navigation.navigate("Login")}
           style={{ fontSize: 14, color: '#00F', position:"absolute", bottom:15 }} >Click here to Sign In.</Text>
    </View>
  );
}

function PasswordResetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ height: 50 }}></Text>
      <Text style={{ color: "#fff", fontSize: 25, fontWeight: 'bold', }}>Reset Password</Text>
      <Text style={{ Maxheight:90, height:70 }}></Text>
      <Image source={TaxBro_pink} style={{ width: 250, height: 200 }} />
      <Text style={{ color: "#fff", fontSize: 15, textAlign: "center", fontWeight: "bold"}} >Please enter your email address to reset your Password.</Text>
      <Text style={{ height:35 }}></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Email Address</Text>
      <Text></Text>
      <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30, }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
      <Text></Text>
      <Button title='Submit' onPress={() => {navigation.navigate("Login")}}></Button>
      <Text style={{ height: 150 }}></Text>
    </View>
  );
}

function DashboardScreen({ navigation }) {
  return (
    <View>
      <Text style={{ color: Colors.black, fontSize: 25, fontWeight: 'bold', textAlign: "center", }}>We are about redefine SA Tax!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF14A8',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});

const options = StyleSheet.create({
  container: {
    headerStyle: {
      backgroundColor: '#FF14A8',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      justifyContent: 'center'
    },
  }
});

export default App;