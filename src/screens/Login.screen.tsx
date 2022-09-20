import {Formik, FormikErrors} from 'formik';

import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';

import CustomButton from '../components/CustomButton.component';
import CustomCheckbox from '../components/CustomCheckbox.component';
import CustomText from '../components/CustomText.component';
import CustomTextInput from '../components/CustomTextInput.component';
import DefaultContainer from '../components/DefaultContainer.component';

import CustomTextTypes from '../enums/TextTypes.enum';

import HideIcon from '../images/HideIcon.svg';
import LockIcon from '../images/LockIcon.svg';
import LockMart from '../images/LockMart.svg';
import PersonIcon from '../images/PersonIcon.svg';
import ShowIcon from '../images/ShowIcon.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface InputFocus {
  nameInput?: boolean;
  passwordInput?: boolean;
}

interface FormValues {
  name: string;
  password: string;
}

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  //375 is actual width of the image
  //296 is actual height of the image
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const ratio = windowWidth / 375;
  const [inputFocus, setInputFocus] = useState<InputFocus>({
    nameInput: false,
    passwordInput: false,
  });
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const onNameInputFocus = () => {
    setInputFocus({nameInput: true});
  };

  const onNameInputUnFocus = () => {
    setInputFocus({nameInput: false});
  };

  const onPasswordInputFocus = () => {
    setInputFocus({passwordInput: true});
  };

  const onPasswordInputUnFocus = () => {
    setInputFocus({passwordInput: false});
  };

  const formValidation = (values: FormValues): FormikErrors<FormValues> => {
    const errors: FormikErrors<FormValues> = {};

    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (!passwordRegex.test(values.password)) {
      errors.password = 'Invalid password';
    }

    return errors;
  };

  return (
    <ScrollView style={{width: windowWidth, height: windowHeight}}>
      <View>
        <View style={{width: '100%', height: 297 * ratio}}>
          <Image
            source={require('../images/LP_Header_BG.png')}
            style={{width: windowWidth, height: 297 * ratio}}
          />
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: 297 * ratio,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{paddingBottom: 76}}>
              <LockMart />
              <CustomText
                value={'G R O C E R Y      A P P'}
                type={CustomTextTypes.regular_16}
                color="#FFFFFF"
                style={{paddingTop: 3}}
              />
            </View>
          </View>
        </View>
        <DefaultContainer>
          <CustomText
            value={'Welcome back'}
            type={CustomTextTypes.bold_24}
            style={{paddingBottom: 5, paddingTop: 5}}
          />
          <CustomText
            value={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
            }
            type={CustomTextTypes.regular_14}
            style={{paddingBottom: 20}}
            color="#7D8FAB"
          />
          <Formik
            initialValues={{name: '', password: ''}}
            validate={formValidation}
            onSubmit={values => {
              const user = users.map(user => {
                if (
                  user.name === values.name &&
                  user.password === values.password
                ) {
                  return user;
                }
              });

              user[0] === undefined
                ? console.log('Invalid')
                : navigation.replace('Main', {screen: 'Home'});
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <>
                <CustomTextInput
                  placeholder="Name"
                  style={[
                    {
                      height: 54,
                      borderWidth: 2,
                      marginBottom: 5,
                    },
                    inputFocus.nameInput
                      ? {borderColor: '#F3664B'}
                      : {borderColor: '#E8ECF2'},
                  ]}
                  leftIcon={<PersonIcon />}
                  rightIcon={<View />}
                  backgroundColor={'#E8ECF2'}
                  onChangeText={handleChange('name')}
                  onBlur={() => {
                    handleBlur('name');
                    onNameInputUnFocus();
                  }}
                  onFocus={onNameInputFocus}
                  value={values.name}
                  selectionColor="#F3664B"
                />
                {errors.name && touched.name ? (
                  <CustomText
                    value={errors.name}
                    type={CustomTextTypes.regular_12}
                    style={{marginBottom: 5, fontSize: 12}}
                    color="#DB4437"
                  />
                ) : (
                  <CustomText value={''} type={CustomTextTypes.regular_12} />
                )}
                <CustomTextInput
                  placeholder="Password"
                  secureTextEntry={passwordVisibility ? false : true}
                  style={[
                    {
                      height: 54,
                      borderWidth: 2,
                      marginBottom: 5,
                    },
                    inputFocus.passwordInput
                      ? {borderColor: '#F3664B'}
                      : {borderColor: '#E8ECF2'},
                  ]}
                  leftIcon={<LockIcon />}
                  rightIcon={passwordVisibility ? <ShowIcon /> : <HideIcon />}
                  backgroundColor={'#E8ECF2'}
                  onChangeText={handleChange('password')}
                  onBlur={() => {
                    handleBlur('password');
                    onPasswordInputUnFocus();
                  }}
                  onFocus={onPasswordInputFocus}
                  value={values.password}
                  selectionColor="#F3664B"
                  onRightIconPress={() => {
                    setPasswordVisibility(!passwordVisibility);
                  }}
                />
                {errors.password && touched.password ? (
                  <CustomText
                    value={errors.password}
                    type={CustomTextTypes.regular_12}
                    style={{marginBottom: 5, fontSize: 12}}
                    color="#DB4437"
                  />
                ) : (
                  <CustomText value={''} type={CustomTextTypes.regular_12} />
                )}

                <CustomButton
                  onPress={handleSubmit}
                  value={'SIGN IN'}
                  style={{
                    borderRadius: 12,
                    height: 60,
                    backgroundColor: '#F3664B',
                  }}
                  textType={CustomTextTypes.bold_18}
                  textColor="#FFFFFF"
                />
              </>
            )}
          </Formik>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 15,
              paddingBottom: 35,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomCheckbox
                onValueChange={() => {
                  setToggleCheckBox(!toggleCheckBox);
                }}
                value={toggleCheckBox}
                tintColors={{true: '#F3664B', false: '#F3664B'}}
              />
              <CustomText
                value={'Keep Sign In'}
                type={CustomTextTypes.semi_bold_16}
              />
            </View>
            <CustomText
              value={'Forgot Password?'}
              type={CustomTextTypes.semi_bold_16}
              color="#F3664B"
              style={{borderBottomWidth: 1, borderBottomColor: '#F3664B'}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 20,
            }}>
            <CustomText
              value={'Don’t have an account?'}
              type={CustomTextTypes.regular_16}
              color="#7D8FAB"
            />
            <CustomButton
              onPress={() => {
                navigation.navigate('Signup');
              }}
              value={' Sign Up'}
              textType={CustomTextTypes.semi_bold_16}
              textColor="#F3664B"
            />
          </View>
        </DefaultContainer>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
