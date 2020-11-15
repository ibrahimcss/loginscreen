import React from 'react';
import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headBackground}></View>
            <KeyboardAvoidingView behavior={"position"}>


                <View>
                    <Text style={styles.logo}>CİSS</Text>
                    <Text style={styles.logoDescription}>Be Happy!</Text>
                </View>
                <ScrollView>
                    <View style={styles.loginArea}>
                        <Text style={styles.loginAreaTitle}>CİSS Chat</Text>
                        <Text style={styles.loginAreaDesc}>Meet new friends to be happy!</Text>
                        <LoginForm></LoginForm>
                    </View>
                </ScrollView>
                <View style={styles.signUpArea}>
                    <Text style={styles.signUpDescription}>Don't have an account ?</Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingVertical: 80,
    },
    headBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 250,
        width: '100%',
        backgroundColor: '#1572de',
    },
    logo: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f2f2f2',

    },
    logoDescription: {
        textAlign: 'center',
        color: '#f2f2f2',
    },
    loginArea: {
        marginHorizontal: 40,
        marginVertical: 40,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        elevation: 10,


    },
    loginAreaTitle: {
        fontSize: 20,
        textAlign: 'center',
    },
    loginAreaDesc: {
        fontSize: 12,
        textAlign: 'center',
        color: '#7e686f',
        marginVertical: 10,
    },
    signUpArea:{
        alignItems:'center'
    },
    signUpDescription:{
    color:'#999'
    },
    signUpText:{
        color:'#666',

    }
});


export default Login;
