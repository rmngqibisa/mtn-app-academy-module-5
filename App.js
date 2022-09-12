import React, { useState } from 'react';
import { NavigationContainer, StackActions,  } from '@react-navigation/native';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View, Appearance, Share } from 'react-native';
import TaxBro_pink from './assets/TaxBro_pink.png';
import logo from './assets/logo.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, options }} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={options.container} />
        <Stack.Screen name="Password Reset" component={PasswordResetScreen} options={options.container} /> 
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={options.container} />
        
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
      <Text style={{ color: "#fff", fontSize: 25, fontWeight: 'bold', }}></Text>
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

function DashboardScreen({ }) {

    const onShare = async () => {
      try {
        const result = await Share.share({
          message: 'Tax.<bro/> \n\n| Your Favourite Neighbourhood TaxGuru | \n\nTaxBro is here to redefine South Africa\'s tax, by bringing the power back into regular citizens hands, through providing tax advise, return calculations, return filing, assistance in case of audits, and all the questions one may have at a price that EVERYONE can afford! \n\nohhh, sorry... did we mention that we use simple and plain language - no fancy terms, apha ekhaya! \n\nTaxBro, launching soon! \n\nPowered by MTN App Academy.',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
    return (
      <View style={styles.container }>
        <Image source={logo} style={{ height: 250, width: 250, position: 'relative', }}></Image>
        <Text></Text>
        <Text style={{ color: "#000", fontSize: 15, textAlignVertical: 'center', textAlign: 'center' }}>Share the TaxBro 'Coming Soon' message to your friends, to tell their friends that Southa's Tax is about to be redefined and revolutionized - no affirmative repossessions necessary</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button onPress={onShare} title="Share" />
        <Text style={{ Maxheight:90, height: 180 }}></Text>
        <Text></Text>
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