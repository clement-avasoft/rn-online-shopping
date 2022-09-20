import {Formik, FormikErrors} from 'formik';

import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {signupUser} from '../global_states/users.state';

import CustomButton from '../components/CustomButton.component';
import CustomCheckbox from '../components/CustomCheckbox.component';
import CustomText from '../components/CustomText.component';
import CustomTextInput from '../components/CustomTextInput.component';
import DefaultContainer from '../components/DefaultContainer.component';

import CustomTextTypes from '../enums/TextTypes.enum';

import HideIcon from '../images/HideIcon.svg';
import LockIcon from '../images/LockIcon.svg';
import LockMart from '../images/LockMart.svg';
import MailIcon from '../images/MailIcon.svg';
import PersonIcon from '../images/PersonIcon.svg';
import ShowIcon from '../images/ShowIcon.svg';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface InputFocus {
  nameInput?: boolean;
  emailInput?: boolean;
  passwordInput?: boolean;
}

interface SignupScreenProps {
  navigation: any;
}

const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  //375 is actual width of the image
  //296 is actual height of the image
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const ratio = windowWidth / 375;
  const [inputFocus, setInputFocus] = useState<InputFocus>({
    nameInput: false,
    emailInput: false,
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

  const onEmailInputFocus = () => {
    setInputFocus({emailInput: true});
  };

  const onEmailInputUnFocus = () => {
    setInputFocus({emailInput: false});
  };

  const formValidation = (values: FormValues): FormikErrors<FormValues> => {
    const errors: FormikErrors<FormValues> = {};

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email address';
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
      <View style={{width: '100%', height: 267 * ratio}}>
        <Image
          source={require('../images/Signup_Header_BG.png')}
          style={{width: windowWidth, height: 267 * ratio}}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: 267 * ratio,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{paddingBottom: 80}}>
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

      <DefaultContainer style={{paddingBottom: 20}}>
        <CustomText
          value={'Create your account'}
          type={CustomTextTypes.bold_24}
          style={{paddingBottom: 25}}
        />
        <Formik
          initialValues={{name: '', email: '', password: ''}}
          validate={formValidation}
          onSubmit={values => {
            const newUser = {
              id: users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
              name: values.name,
              email: values.email,
              password: values.password,
            };

            const validateUser = users.map(user => {
              if (
                user.name.toLocaleLowerCase() ===
                  values.name.toLocaleLowerCase() &&
                user.email?.toLocaleLowerCase() ===
                  values.email.toLocaleLowerCase()
              ) {
                return user;
              }
            });

            if (validateUser[0] === undefined) {
              const response = dispatch(signupUser(newUser));
              response ? navigation.navigate('Login') : '';
              return;
            }

            console.log('User already exist');
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <View>
              <CustomTextInput
                placeholder="Name"
                style={[
                  {
                    height: 54,
                    borderWidth: 1,
                    borderColor: '#E8ECF2',
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
                placeholder="Email"
                style={[
                  {
                    height: 54,
                    borderWidth: 1,
                    borderColor: '#E8ECF2',
                  },
                  inputFocus.emailInput
                    ? {borderColor: '#F3664B'}
                    : {borderColor: '#E8ECF2'},
                ]}
                leftIcon={<MailIcon />}
                rightIcon={<View />}
                backgroundColor={'#E8ECF2'}
                onChangeText={handleChange('email')}
                onBlur={() => {
                  handleBlur('password');
                  onEmailInputUnFocus();
                }}
                onFocus={onEmailInputFocus}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <CustomText
                  value={errors.email}
                  type={CustomTextTypes.regular_12}
                  style={{marginBottom: 5, fontSize: 12}}
                  color="#DB4437"
                />
              ) : (
                <CustomText value={''} type={CustomTextTypes.regular_12} />
              )}
              <CustomTextInput
                placeholder="password"
                secureTextEntry={passwordVisibility ? false : true}
                style={[
                  {
                    height: 54,
                    borderWidth: 1,
                    borderColor: '#E8ECF2',
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
              <View style={{height: 60, marginTop: 20}}>
                <CustomButton
                  onPress={handleSubmit}
                  value={'REGISTER'}
                  style={{
                    borderRadius: 12,
                    height: 60,
                    backgroundColor: '#F3664B',
                  }}
                  textType={CustomTextTypes.bold_18}
                  textColor="#FFFFFF"
                />
              </View>
            </View>
          )}
        </Formik>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingTop: 10,
          }}>
          <View style={{flex: 1}}>
            <CustomCheckbox
              value={toggleCheckBox}
              onValueChange={() => {
                setToggleCheckBox(!toggleCheckBox);
              }}
              tintColors={{true: '#F3664B', false: '#F3664B'}}
            />
          </View>
          <View
            style={{
              flex: 7,
              paddingTop: 3,
              flexDirection: 'row',
            }}>
            <CustomText
              value={'By tapping “Sign Up” you accept our terms and conditions'}
              type={CustomTextTypes.medium_16}
              color="#7D8FAB"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 35,
          }}>
          <CustomText
            value={'Already have account?'}
            type={CustomTextTypes.regular_16}
            color="#7D8FAB"
          />
          <CustomButton
            onPress={() => {
              navigation.navigate('Login');
            }}
            value={' Login'}
            textType={CustomTextTypes.semi_bold_16}
            textColor="#F3664B"
          />
        </View>
      </DefaultContainer>
    </ScrollView>
  );
};

export default SignupScreen;
