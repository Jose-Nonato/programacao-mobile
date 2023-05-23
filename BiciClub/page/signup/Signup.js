import React from 'react-native';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Signup () {
    return(
        <View>
            <Image source={require("../../assets/bicicleta.jpg")} style={{width: '100%', height: '50%'}}/>
            <View style={styles.form}>
                <Text style={styles.title}>CADASTRO</Text>
                <TextInput placeholder="Email" style={styles.input}/>
                <TextInput placeholder="Senha" style={styles.input}/>
                <TextInput placeholder="Confirmar Senha" style={styles.input}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>ACESSAR MINHA CONTA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '80%',
        backgroundColor: '#D1D1D1',
        borderRadius: 10,
        padding: 15,
        alignSelf: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 18,
        // color: '#FFF',
        textAlign: 'center',
        marginBottom: 10
    },
    input: {
        color: '#5E5E5E',
        height: 40,
        borderWidth: 1,
        borderColor: '#F3F0F0',
        borderRadius: 10,
        paddingLeft: 10,
        textAlign: 'center',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#FFD174',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})