import Exponent from 'exponent'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Clipboard,
  KeyboardAvoidingView
} from 'react-native'

import nextFrame from 'next-frame';

import {
  Button, SocialIcon, FormLabel, FormInput
} from 'react-native-elements'

import {encryptLogin, renderPassword, createFingerprint} from './core/index'

var site = 'lesspass.com';
    var login = 'contact@lesspass.com';
    var masterPassword = 'password';
    var options = {
        counter: 1,
        length: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: true,
        template: 'vcVCns'
    };

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {generatedPass: '', generating: false}//generatePassword(site, login, masterPassword, options)}
  }

  render() {

    const onPress = () => {
       console.log('start working')
       
       let encryptedLogin = ''
       
       this.setState({ 
          generatedPass: '',
          generating: true
        })

      nextFrame()
        .then(() => encryptLogin(login, masterPassword))  
        .then(result => {          
          encryptedLogin = result.toString()
          console.log('enc login', encryptedLogin.toString())

          return renderPassword(encryptedLogin, site, options)
                .then(generatedPassword => {
                    console.log('gen pass', generatedPassword)
                    this.setState({ 
                      generatedPass: generatedPassword,
                      generating: false
                    })  
                })
        })
    }

    return (
      <View style={styles.container}>
       <KeyboardAvoidingView behavior={'padding'} contentContainerStyle={styles.container}>
        <Text style={styles.headerStyle}>LessPass</Text>
        <FormLabel
          labelStyle={styles.labelStyle}
          >
          Site
        </FormLabel>
        <FormInput
          inputStyle={styles.inputStyle}
          placeholder={'Site'}
          keyboardType={'url'}
          />
        <FormLabel
          labelStyle={styles.labelStyle}
          >
          Login
        </FormLabel>
        <FormInput
          inputStyle={styles.inputStyle}
          placeholder={'Login'}
          autoCapitalize={'none'}
          autoCorrect ={false}
          />
        <FormLabel
          labelStyle={styles.labelStyle}
          >
          Master password
        </FormLabel>
        <FormInput
          inputStyle={styles.inputStyle}
          placeholder={'Master password'}
          autoCapitalize={'none'}
          autoCorrect = {false}
          secureTextEntry = {true}
          />
        <FormInput
          inputStyle={styles.inputStyle}
          placeholder={'GENERATED PASS'}
          value={this.state.generatedPass}
          />
        <Button   
          onPress = {() => onPress()}      
          icon={{ name: 'content-copy' }}
          title={this.state.generating ? 'In process....' : 'Generate'} />
          </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    fontSize: 30
  },
  labelStyle: {
    fontSize: 30,
  },
  inputStyle: {
    height: 35,
    width: 200,
    fontSize: 30,
    borderColor: 'gray',
    borderWidth: 1
  }
});

Exponent.registerRootComponent(App);
