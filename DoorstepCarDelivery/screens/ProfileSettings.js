import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Pressable, Switch, StatusBar, Button, TouchableOpacity, Dimensions, ScrollView, TextInput, Modal } from 'react-native';
import { light, dark } from "../assets/colors/colors"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '@/components/GradientButton';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale, textScale, verticalScale } from '@/components/ScreenScaling';

const ProfileSettings = () =>{

    const route = useRoute()
    const [Spotify, setSpotify] = useState(false)
    const [YT, setYT] = useState(false)
    const [Maps, setMaps] = useState(false)
    const [Messages, setMessages] = useState(false)
    const [Calls, setCalls] = useState(false)
    const { name1, name2, lastName, Age, Address, Email, Password } = route.params || { id: 1 }
    const [name, onChangeName] = React.useState(name1);
    const [Lname, onChangeLname] = React.useState(lastName);
    const [age, onChangeAge] = React.useState(Age);
    const [address, onChangeAddress] = React.useState(Address);
    const [email, onChangeEmail] = React.useState(Email);
    const [pass, onChangePass] = React.useState(Password);
    const [modalVisible, setModalVisible] = useState(false);
    const Paym1 = 'Card'
    const Paym2 = 'Paypal'
    const Paym3 = 'Bank'
    const Paym4 = 'MobilePay'
    const [paymentMethod, setPaymentMethod] = useState(Paym1);

    const hideModal = () => {
        setModalVisible(!modalVisible)
    }

    const handlePaymentChange = (name) => {
        setPaymentMethod(name);
        hideModal();
    };
    
    return(
        <ScrollView>
        <SafeAreaView style={styles.container}>
            
                <View style={styles.box}>
                    <Text style={styles.heading}> {name1} {lastName} </Text>
                    <Text style={styles.infoHeading}> First name</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeName}
                    value={name}
                    
                    />
                    <Text style={styles.infoHeading}> Last name</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeLname}
                    value={Lname}
                    />
                    <Text style={styles.infoHeading}> Password</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangePass}
                    value={pass}
                    secureTextEntry
                    />
                    <Text style={styles.infoHeading}> Age</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeAge}
                    value={age}
                    />
                    <Text style={styles.infoHeading}> Address</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeAddress}
                    value={address}
                    />
                    <Text style={styles.infoHeading}> Email</Text>
                    <TextInput 
                    style={styles.TextInput}
                    onChangeText={onChangeEmail}
                    value={email}
                    />
                </View>

                <View style={styles.box}>
                <Text> Connected apps </Text>
                    <CustomSwitch label={Spotify? 'Spotify connected' : 'Spotify not connected'} value={Spotify} onToggle={setSpotify}/>
                    <CustomSwitch label={YT? 'YouTube connected' : 'YouTube not connected'} value={YT} onToggle={setYT}/>
                    <CustomSwitch label={Maps? 'Maps connected' : 'Maps not connected'} value={Maps} onToggle={setMaps}/>
                    <CustomSwitch label={Messages? 'Messages connected' : 'Messages not connected'} value={Messages} onToggle={setMessages}/>
                    <CustomSwitch label={Calls? 'Calls connected' : 'Calls not connected'} value={Calls} onToggle={setCalls}/>
                </View>

                <Text style={styles.heading}> payment methods </Text>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.modalView}>
                        <View style={[styles.modal, styles.elevation]}>

                            <Text style={styles.headerModal}>Current: {paymentMethod}</Text>

                            <View style={styles.profileChoices}>
                                <TouchableOpacity onPress={() => handlePaymentChange(Paym1)}>
                                    <Text style={styles.choiceText}>{Paym1}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePaymentChange(Paym2)}>
                                    <Text style={styles.choiceText}>{Paym2}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePaymentChange(Paym3)}>
                                    <Text style={styles.choiceText}>{Paym3}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePaymentChange(Paym4)}>
                                    <Text style={styles.choiceText}>{Paym4}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonElevationModal}>
                                <GradientButton text="Close" navigate={hideModal} style={styles.buttonModal} />
                            </View>
                        </View>
                    </View>
                </Modal>

                    <Pressable onPress={() => setModalVisible(true)}>
                        <View style={styles.boxContent}>
                        </View>
                        <Text style={styles.infoText}>{paymentMethod}</Text>
                        <Text style={styles.infoHeader}>Change payment method</Text>
                    </Pressable>
                <Text> location </Text>
            
        </SafeAreaView>
        </ScrollView>
    )
};

const CustomSwitch = ({ label, value, onToggle }) => (
    <View style={styles.controlRow}>
        <Text style={styles.label}>{label}</Text>
        <Switch
            value={value}
            onValueChange={onToggle}
            trackColor={{ false: dark.box, true: light.accent }}
            thumbColor={value ? '#fff' : '#f4f3f4'}
        />
    </View>
);

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: light.box,
    },
    heading: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
    },
    box: {
        flexDirection: 'column',
        backgroundColor: light.box,
        fontWeight: 'bold',
        paddingHorizontal: '8%',
        paddingVertical: '5%'

    },
    controlRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 12,
        paddingBottom: 2,
        borderBottomColor: light.background,
        borderBottomWidth: 3,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
    },
    infoHeading: {
        color: '#9a9897',
        paddingTop: '8%',
    },
    TextInput: {
        height: 40,
        borderBottomWidth: 3,
        borderBottomColor: light.background ,
      },
    profileChoices: {
        marginBottom: '16%',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: light.box,
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: scale(300),
        borderRadius: 10,
    },
    modalButton: {
        height: verticalScale(50),
        width: scale(50),
    },
    buttonModal: {
        padding: '10%',
        width: '90%',
        height: '50%',
    },
    headerModal: {
        marginTop: scale(10),
        fontWeight: 'bold',
        fontSize: textScale(25),
        textAlign: 'center',
        height: scale(50),
    },
    elevation: {
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: .25,
        shadowRadius: 5,
        elevation: 7,
    },
    choiceText: {
        marginTop: verticalScale(10),
        fontSize: textScale(20),
        marginBottom: verticalScale(10),
        textAlign: 'center',
    },
    infoText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: textScale(20)
    },
    infoHeader: {
        flexWrap: 'wrap',
        color: '#9a9897',
        textAlign: 'center',
        paddingBottom: scale(10),
        fontSize: textScale(18),

    },
})

export default ProfileSettings;