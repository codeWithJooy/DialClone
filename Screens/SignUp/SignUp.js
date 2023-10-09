import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function SignUp() {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.company}>
                    <View style={styles.signupLogo}>
                        <Image source={require('./assets/dialImage.png')} style={styles.signupLogoIcon} />
                    </View>
                </View>
                <View style={styles.company}>
                    <Text style={styles.welcomeText}>Phone system for </Text>
                    <Text style={styles.welcomeText}>modern businesses</Text>
                </View>

                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Create an account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginGoogle}>
                        <Text>Continue with Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.company}>
                    <TouchableOpacity style={styles.loginOther}>
                        <Text>Or, Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 20,
    },
    container: {
        width: "100%",
    },
    signupLogo:{
       width:260,
       height:260,
       borderRadius:130,
       backgroundColor:"#00F0B2"
    },
    welcomeText:{
        color: "#33475B",
        fontSize: 26,
        fontWeight: "bold",
    },
    loginButtonText:{
        color: "#FFF",
        fontSize: 13,
        fontWeight: "bold",
    },
    signupLogoIcon:{
      position:"absolute",
      height:230,
      width:150,
      bottom:0,
      left:60
    },
    signupBack: {
        position:"absolute",
        width: 265,
        height: 265,
        borderRadius: 132,
        backgroundColor: "linear-gradient(136deg, #00F0B2 15.82%, #01DEE2 85.18%)",
    },
    company: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    companyLogo: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    logoIcon: {
        width: 60,
        height: 60,
    },
    companyText: {
        color: "#33475B",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "bold",
    },
    loginImage: {
        width: 200,
        height: 200,
    },
    loginButton: {
        width: "100%",
        height: 46,
        borderRadius: 5,
        backgroundColor: "#1EC6D8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    loginGoogle: {
        width: "100%",
        height: 46,
        borderRadius: 5,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#D6DFE8",
    },
    loginOther: {
        width: "100%",
        height: 46,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

});
