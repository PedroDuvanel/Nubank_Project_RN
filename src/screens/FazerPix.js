import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const FazerPix = () => {
    const [valor, setValor] = useState('');
    const [chave, setChave] = useState('');

    const handleFazerPix = () => {
        if (!valor || !chave) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }
        Alert.alert("Sucesso", `Pix de R$ ${valor} enviado para ${chave}!`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Qual é o valor da transferência?</Text>
            <Text style={styles.saldo}>Saldo disponível em conta R$ 1.500,00.</Text>
            <TextInput
                style={styles.input}
                placeholder="Valor"
                keyboardType="numeric"
                value={valor}
                onChangeText={setValor}
            />

            <TextInput
                style={styles.input}
                placeholder="Chave Pix (CPF, e-mail, telefone ou chave aleatória)"
                value={chave}
                onChangeText={setChave}
            />

            <TouchableOpacity style={styles.button} onPress={handleFazerPix}>
                <Text style={styles.buttonText}>→</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    saldo: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 16,
        color: 'gray',
    },
    button: {
        backgroundColor: '#8A05BE',
        borderRadius: 30, 
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 300,
        marginTop: 180,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default FazerPix;