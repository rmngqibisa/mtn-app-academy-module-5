import React, { useState, useEffect } from 'react';
import { Link, NavigationContainer, StackActions,  } from '@react-navigation/native';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View, Alert, Share, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import TaxBro_pink from './assets/TaxBro_pink.png';
import logo from './assets/logo.png';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './firebase';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={styles.screen} />
        <Stack.Screen name="Password Reset" component={PasswordResetScreen} options={styles.screen} /> 
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={styles.screen} />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
}
  

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    auth.
      signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with: ' + user.email);
    })
      .catch(error => alert(error.message))
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged (user => {
      if (user) {
        navigation.replace('Dashboard')
      }
    })
    return unsubscribe;
  }
)

  return (
  <KeyboardAvoidingView style={styles.container} behavior='padding' >
    <Text style={{ color: "#fff", fontSize: 25, fontWeight: 'bold', styles}}>Login</Text>
    <Text style={{ Maxheight:90, height:70 }}></Text>
    <Image source={TaxBro_pink} style={{ width: 250, height: 220 }} />
    <View style={styles.inputContainer}>
    <TextInput style={styles.input}
      editable
      value={email}
      placeholder='Email Address'
      onChangeText={text => setEmail(text)}
      />
    <Text></Text>
      <TextInput style={styles.input}
      editable
      value={password}
      placeholder='Password'
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}
      />
    </View>

    <Text></Text>
    
    <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={handleSignIn} 
      style={[styles.button, styles.buttonOutline]}
      >
      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    
    <Text></Text>
    <Text style={{ color: "#FFF", fontSize: 14, }}>Forgot your Password?</Text>
    <Text onPress={() => (navigation.navigate("Password Reset"))} 
    style={{ color: "#fff", fontSize: 14, color: '#00F' }}>Reset it here.</Text>
    <Text style={{ height: 50 }}></Text>
    <StatusBar style="auto" />
    <Text style={{ color: "#fff", fontSize: 14, position:"absolute", bottom:35 }}>Don't have an account? </Text>
    <Text onPress={() => navigation.navigate("Sign Up")}
           style={{ fontSize: 14, color: '#00F', position:"absolute", bottom:15 }} >Click here to Sign Up.</Text>
  </KeyboardAvoidingView>
  );
}


function SignUpScreen({ navigation }) {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth.
      createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      console.log('New user: ' + user.email);
    })
      .catch(error => alert(error.message))
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged (user => {
      if (user) {
      onPress (() => navigation.replace('Login'))
    }
  })       
    return unsubscribe;
  }, []
)
  return(
    <KeyboardAvoidingView style={styles.container}>
    <Image source={TaxBro_pink} style={{ width: 150, height: 200}} />
  
    <View style={styles.inputContainer}>
    <TextInput style={styles.input}
      editable
      value={name}
      placeholder='First Name'
      onChangeText={text => setName(text)}
      />
      <Text></Text>
      <TextInput style={styles.input}
      editable
      value={surname}
      placeholder='Last Name'
      onChangeText={text => setSurname(text)}
      />
      <Text></Text>
      <TextInput style={styles.input}
      editable
      value={email}
      placeholder='Email Address'
      onChangeText={text => setEmail(text)}
      />
      <Text></Text>
      <TextInput style={styles.input}
      editable
      value={password}
      placeholder='Password'
      onChangeText={text => setPassword(text)}
      secureTextEntry={true}
      />
    </View>

    <Text></Text>

  <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={handleSignUp} 
      style={[styles.button, styles.buttonOutline]}
      >
      <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    
    <Text style={{ height:90, Maxheight:100 }}></Text>
    <Text style={{ color: "#fff", fontSize: 14, position:"absolute", bottom:35 }}>Already have an account? </Text>
    <Text onPress={() => navigation.navigate("Login")}
           style={{ fontSize: 14, color: '#00F', position:"absolute", bottom:15 }} >Click here to Sign In.</Text>
    </KeyboardAvoidingView>
  );
}

function PasswordResetScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 25, fontWeight: 'bold', }}></Text>
      <Text style={{ Maxheight:50, height:40 }}></Text>
      <Image source={TaxBro_pink} style={{ width: 250, height: 200 }} />
      <Text style={{ color: "#fff", fontSize: 15, textAlign: "center", fontWeight: "bold"}} >Please enter your email address to reset your Password.</Text>
      <Text style={{ height:25 }}></Text>
      
      <View style={styles.inputContainer}>
      <TextInput style={styles.input}
      editable
      value=''
      placeholder='Email Address'
      onChangeText={text => ''}
      />
      </View>

      <Text></Text>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
      onPress={() => {navigation.replace("Login"); }} 
      style={[styles.button, styles.buttonOutline]}
      >
      <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      </View>

      <Text style={{ height: 150 }}></Text>
    </KeyboardAvoidingView>
  );
}

function DashboardScreen({ navigation }) {
  const handleSignOut = () => {
    auth.
      signOut()
      .then (() => {
      navigation.replace('Login')
    })
      .catch(error => alert(error.message))
  }

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
      <KeyboardAvoidingView style={styles.container }>
        <Image source={logo} style={{ height: 250, width: 250, position: 'relative', }}></Image>
        <Text></Text>
        <Text style={{ color: "#000", fontSize: 15, textAlignVertical: 'center', textAlign: 'center', margin: 17, fontWeight: '900' }}>Hey {auth.currentUser?.email}</Text>
        <Text style={{ color: "#000", fontSize: 15, textAlignVertical: 'center', textAlign: 'center', margin: 17, fontWeight: '500' }}>Share the TaxBro 'Coming Soon' message to your friends, to tell their friends that Southa's Tax is about to be redefined and revolutionized - no affirmative repossessions necessary</Text>
        
        <View style={styles.buttonContainer}>
        <TouchableOpacity
           onPress={onShare} 
           style={[styles.button, styles.buttonOutline]} >
         <Text style={styles.buttonText}>Share</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
           onPress={handleSignOut} 
           style={[styles.button, styles.buttonOutline]} >
         <Text style={styles.buttonText}>Sign Out</Text>
         </TouchableOpacity>
        </View>
        
        <Text></Text>
      </KeyboardAvoidingView>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF14A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    headerStyle: {
      backgroundColor: '#FF14A8',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      justifyContent: 'center'
    },
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10, 
    marginTop: 5
  },
  buttonContainer: {
    width: '60%',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    backgroundColor: '#FF14A8',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonOutline: {
    backgroundColor: '#FF14A8',
    marginTop: 5,
    borderColor: '#fff',
    borderWidth: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutlineText: {
    color: '#FF14A8',
    fontWeight: '700',
    fontSize: 16
  }


});


export default App;