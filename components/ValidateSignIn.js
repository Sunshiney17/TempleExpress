import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Text, Card, Button, Icon, ButtonGroup, Input} from '@rneui/themed';
import {Formik} from 'formik';
import * as yup from 'yup';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width: '80%', alignSelf: 'center'}}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <Card containerStyle={styles.cardsetting}>
              <>
                <>
                  <Text style={styles.placefont}>Email</Text>
                  <Input
                    inputContainerStyle={{
                      name: 'email',
                      backgroundColor: '#fff',
                      borderBottomWidth: 0,
                      height: 25,
                    }}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    placeholder=""
                  />
                  {errors.email && (
                    <Text style={styles.errorfont}>{errors.email}</Text>
                  )}
                </>
                <Text style={styles.placefont}>Password</Text>
                <Input
                  placeholder=""
                  secureTextEntry={true}
                  inputContainerStyle={{
                    backgroundColor: '#fff',
                    borderBottomWidth: 0,
                    height: 25,
                  }}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && (
                  <Text style={styles.errorfont}>{errors.password}</Text>
                )}
                <Button
                  title="Sign In"
                  titleStyle={{fontSize: 18, color: '#ffff'}}
                  buttonStyle={{
                    backgroundColor: '#343779',
                    borderRadius: 3,
                  }}
                  containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                  }}
                  disabled={!isValid}
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}
                />
                <Button
                  containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                  }}
                  title="create account? Sign up"
                  type="clear"
                  titleStyle={{color: '#a7a5a6', fontSize: 14}}
                  onPress={() => {
                    navigation.navigate('SignUpRedo');
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

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingTop: 240,
    padding: 8,
    backgroundColor: '#fff',
  },
  placefont: {
    paddingLeft: 11,
    fontSize: 16,
    paddingBottom: 5,
  },
  errorfont: {
    fontSize: 10,
    color: 'red',
    paddingLeft: 11,
    marginTop: -20,
    marginBottom: 10,
  },
  cardsetting: {
    marginVertical: 0,
    marginHorizontal: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#F6F6F6',
  },
});

export default SignIn;
