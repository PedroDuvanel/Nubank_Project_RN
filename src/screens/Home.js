import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#820ace" />
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <View style={styles.userCard}>
                        <Image source={require('../../assets/user.png')} style={styles.iconUser} />
                    </View>
                    <Text style={styles.profile}>Olá, Pedro!</Text>
                </View>
            </View>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceLabel}>Conta</Text>
                <Text style={styles.balance}>R$ 1.500,00</Text>
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
                <View style={styles.separator} />
                <Text style={styles.titleCard}>Cartão de crédito</Text>
                <View style={styles.fattitles}>
                    <Text style={styles.fatCard}>Fatura atual</Text>
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
        height: 150,
        backgroundColor: '#820ace',
        width: '100%',
    },
    pprofileContainer: {
        marginTop: 20,
    },
    userCard: {
        backgroundColor: '#9b3bda',
        marginLeft: 20,
        marginBottom: 15,
        borderRadius: 30,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        color: '#FFFFFF',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10,
    },
    iconUser: {
        height: 25,
        width: 25,
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
        fontSize: 25,
        fontWeight: 'bold',
        paddingRight: 235,
        paddingBottom: 2,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingBottom: 0,
    },
    actionWrapper: {
        alignItems: 'center',
        marginRight: 10,
    },
    actionButton: {
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f1f5',
        marginLeft: 10,
    },
    icon: {
        width: 25,
        height: 25,
    },
    actionText: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 12,
    },
    myCards: {
        backgroundColor: '#f0f1f5',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 8,
        height: 60,
        paddingLeft: 30,
        marginBottom: 10,
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
        marginBottom: 220,
    },
    separator: {
        height: 1, 
        backgroundColor: '#f0f1f5', 
        marginBottom: 20, 
        width: '100%', 
    },
    fattitles: {
        marginTop: 20,
        gap: 10,
    },
    titleCard: {
        color: '#000000',
        fontSize: 23,
        fontWeight: 'bold',
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