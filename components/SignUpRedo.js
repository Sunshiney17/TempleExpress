import {StyleSheet, View, ScrollView, SafeAreaView , Image} from 'react-native';
import React, {useState} from 'react';
import {Text, Card, Button, Icon, ButtonGroup, Input} from '@rneui/themed';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomSignUp from './CustomSignUp';
import auth from "@react-native-firebase/auth"

const SignUp = ({navigation}) => {

  const __doCreateUser = async (userName, phoneNumber, email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(email, password)
      if (response) {
        console.log(response)
      }
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (e.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(e);
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width: '80%', alignSelf: 'center'}}>
      <Image source={require('../assets/temple_express_logo.png')} style={{ width: 240, height: 240, alignSelf: 'center' }} />
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            userName: '',
            email: '',
            phoneNumber: '',
            password: '',
          }}
          onSubmit={values => console.log(values)}>
          {({ handleSubmit, isValid, values}) => (
            <Card containerStyle={styles.cardsetting}>
              <>
                <Text style={styles.placefont}>Username</Text>
                <Field component={CustomSignUp} name="username" />
                <Text style={styles.placefont}>PhoneNumber</Text>
                <Field
                  component={CustomSignUp}
                  name="phoneNumber"
                  keyboardType="numeric"
                />
                <Text style={styles.placefont}>Email</Text>
                <Field
                  component={CustomSignUp}
                  name="email"
                  keyboardType="email-address"
                />
                <Text style={styles.placefont}>Password</Text>
                <Field
                  component={CustomSignUp}
                  name="password"
                  secureTextEntry
                />

                <Button
                  title="Sign Up"
                  titleStyle={{fontSize: 18, color: '#ffff'}}
                  buttonStyle={{
                    backgroundColor: '#343779',
                    borderRadius: 3,
                  }}
                  containerStyle={{
                    width: 200,
                    alignSelf: 'center',
                  }}
                  disabled={!isValid}
                  onPress={() => {
                    __doCreateUser(values.userName, values.phoneNumber, values.email, values.password)
                  }}
                />
                <Button
                  containerStyle={{
                    width: 200,
                    alignSelf: 'center',
                  }}
                  title="have an account? Sign in"
                  type="clear"
                  titleStyle={{color: '#737373', fontSize: 14}}
                  onPress={() => {
                    navigation.navigate('validateSignIn');
                  }}
                />
              </>
            </Card>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const signUpValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Userame is required'),
  phoneNumber: yup
    .string()
    .matches(/(0)(\d){9}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
    padding: 8,
    backgroundColor: '#fff',
  },
  placefont: {
    fontSize: 14,
    paddingLeft: 11,
    paddingBottom: 5,
  },
  cardsetting: {
    marginVertical: 0,
    marginHorizontal: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#F6F6F6',
    elevation:0,
  },
});