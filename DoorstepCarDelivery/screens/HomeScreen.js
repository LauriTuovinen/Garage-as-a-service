import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';



function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={light.accent}></StatusBar>
            <View style={[styles.box, styles.elevation]}>
                <Text style={styles.header}>Porshce Taycan</Text>
                <Image style={styles.image} source={require('../assets/images/Porsche-Taycan.png')} />
                <View style={styles.interactions}>

                    <View style={styles.small_box}>
                        <Text>Car Details</Text>
                    </View>
                    <View style={styles.small_box}>
                        <Text>Range</Text>

                    </View>
                    <View style={styles.small_box}>

                        <Text>Control Car</Text>
                    </View>
                </View>
                <View style={styles.interactions}>

                    <View style={styles.small_box}>
                        <Text>Browse Cars</Text>

                    </View>
                    <View style={styles.small_box}>
                        <Text>Manage Membership</Text>

                    </View>
                    <View style={styles.small_box}>

                        <Text>User Setting</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light.background,
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: light.box,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    interactions: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20

    },
    small_box: {
        backgroundColor: 'orange',
        borderColor: 'black',
        borderWidth: 1,
        elevation: 5,
        padding: 20,
        margin: 15,
        width: '30%',
        
    },
    elevation: {
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 7,
    },
    header: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '200',
        marginTop: 20,
        
        // resizeMode: 'contain',
        // backgroundColor: 'red',
    },

})

export default HomeScreen;
