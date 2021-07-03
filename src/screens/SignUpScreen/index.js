import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
        <View style={styles.container}>
                <StatusBar backgroundColor='#43595e' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <ScrollView>
                        <Text style={styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#43595e"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => textInputChange(val)}
                            />
                            {data.check_textInputChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}
                                    />
                                </Animatable.View>
                                : null}
                        </View>

                        <Text style={[styles.text_footer, {
                            marginTop: 35
                        }]}>Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="#43595e"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handlePasswordChange(val)}
                            />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.text_footer, {
                            marginTop: 35
                        }]}>Confirm Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="#43595e"
                                size={20}
                            />
                            <TextInput
                                placeholder="Confirm Your Password"
                                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => handleConfirmPasswordChange(val)}
                            />
                        </View>
                        <View style={styles.textPrivate}>
                            <Text style={styles.color_textPrivate}>
                                By signing up you agree to our
                </Text>
                            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                            <Text style={styles.color_textPrivate}>{" "}and</Text>
                            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={[styles.signIn, {
                                    marginTop: 15
                                }]}
                                onPress={() => { }}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#ffffff'
                                }]}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>
        </View>
    );
};

export default SignInScreen;