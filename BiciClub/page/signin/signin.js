import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignIn() {
    return(
        <View>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.png')} style={styles.img}/>
                <Text style={styles.title}>BEM VINDO!</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.titleForm}>ENTRAR</Text>
                <View>
                    <TextInput placeholder="Email" style={styles.input}/>
                    <TextInput placeholder="Senha" style={styles.input}/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>ACESSAR MINHA CONTA</Text>
                    </TouchableOpacity>
                    <Text style={styles.textinho}>Criar nova conta</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonTextLogin}>ENTRAR COM GMAIL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonTextLogin}>ENTRAR COM FACEBOOK</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        backgroundColor: "#FD8D3D",
        padding: 10,
        marginBottom: 30,
        width: "100%",
    },
    title: {
      color: "#FFF",
      fontWeight: 700,
      textAlign: "center",
      fontSize: 18,
    },
    img: {
      width: 80,
      height: 80,
      alignSelf: 'center',
    },
    form: {
        textAlign: "center",
        padding: 10,
        marginBottom: 30,
    },
    titleForm: {
        color: "#5E5E5E",
        fontWeight: 700,
        marginBottom: 20,
        textAlign: "center"
    },
    textinho: {
        textAlign: "center",
        marginTop: 10
    },  
    input: {
        color: '#5E5E5E',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingLeft: 10,
        textAlign: 'center',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#5E405B',
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
    buttonLogin: {
        backgroundColor: '#F3F0F0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 10,
    },
    buttonTextLogin: {
        fontSize: 14,
        fontWeight: 700,
        textAlign: 'center',
    },
})