import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <Text style={styles.profile}>Olá, Pedro!</Text>
                </View>
            </View>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceLabel}>Conta</Text>
                <Text style={styles.balance}>R$ 1.500.000,00</Text>
            </View>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.actions}
            >
                 <View style={styles.actionWrapper}>
                    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('FazerPix')}>
                        <Image source={require('../../assets/pix.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.actionText}>Pix</Text>
                </View>

                <View style={styles.actionWrapper}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Image source={require('../../assets/boleto.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.actionText}>Cobrar</Text>
                </View>

                <View style={styles.actionWrapper}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Image source={require('../../assets/carteira.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.actionText}>Depositar</Text>
                </View>

                <View style={styles.actionWrapper}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Image source={require('../../assets/dinheiro.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.actionText}>Transferir</Text>
                </View>

                <View style={styles.actionWrapper}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Image source={require('../../assets/boleto.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.actionText}>Pagar</Text>
                </View>

                <View style={styles.actionWrapper}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Image source={require('../../assets/carteira.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.actionText}>Investir</Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.myCards}>
                <View style={styles.myCardsView}>
                    <Image source={require('../../assets/carteira.png')} style={styles.iconCard} />
                    <Text style={styles.logoutText}>Meus cartões</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.cardContainer}>
                <Text style={styles.titleCard}>Cartão de crédito</Text>
                <View style={styles.fattitles}>
                    <Text style={styles.fatCard}>Fatura Atual</Text>
                    <Text style={styles.balanceCard}>R$ 1.489,00</Text>
                    <Text style={styles.limit}>Limite disponível de R$ 8.600,00</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#8A05BE',
        width: '100%',
    },
    profileContainer: {
        marginTop: 30,
    },
    profile: {
        color: '#FFFFFF',
        fontSize: 20,
        marginLeft: 40,
    },
    balanceContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    balanceLabel: {
        paddingRight: 315,
        paddingBottom: 25,
        color: '#000000',
        fontSize: 23,
        fontWeight: 'bold',
    },
    balance: {
        color: '#000000',
        fontSize: 32,
        fontWeight: 'bold',
        paddingRight: 120,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,  // Ajustado para menos espaço
        paddingBottom: 0, // Removido padding
    },
    actionWrapper: {
        alignItems: 'center',
        marginRight: 10, 
    },
    actionButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        marginLeft: 10,
    },
    icon: {
        width: 30,
        height: 30,
        color: 'black',
    },
    actionText: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 12,
    },
    myCards: {
        backgroundColor: '#D3D3D3',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        height: 60,
        paddingLeft: 30,
        justifyContent: 'left', 
        flexDirection: 'row',
    },
    myCardsView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutText: {
        color: 'black',
        fontWeight: 'bold',
        marginHorizontal: 15,
        fontSize: 16,
    },
    iconCard: {
        flexDirection: 'row',
    },
    cardContainer: {
        flex: 1,
        padding: 20,
        marginBottom: 200,
    },
    fattitles: {
        gap: 10,
    },
    titleCard: {
        color: '#000000',
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    fatCard: {
        color: 'grey',
        fontSize: 18,
        fontWeight: 'bold',
    },
    balanceCard: {
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
    },
    limit: {
        color: 'grey',
        fontSize: 17,
    },
});

export default Home;