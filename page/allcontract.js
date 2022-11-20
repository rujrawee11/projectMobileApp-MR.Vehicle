import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { collection, doc, setDoc, addDoc, deleteDoc, updateDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from '../database/configdb';
import { AntDesign } from '@expo/vector-icons';
const MakeContract_2 = ({ route, navigation }) => {
    const { userRentalEmail, userRenterEmail, vehicleIds } = route.params;
    const [renteremail, onChangerenterEmail] = useState("")

    const [userall, setUserAll] = useState([])
    const [renterall] = useState([])
    useEffect((id) => {
        getDocs(query(collection(db, "contract"), where('rentalEmail', '==', userRentalEmail)))
            .then(docSnap => {
                let users = [];
                docSnap.forEach((doc, index) => {
                    users.push({ ...doc.data(), id: doc.id })

                });
                setUserAll(users)

            }).catch((error) => {
                // The write failed...
                alert(error);
            });
    }, [])

    const ListItem = userall.map((user, index) =>
        <SafeAreaView key={index} style={{ flex: 1, backgroundColor: '#DADBFB', borderRadius: 10, width: '100%', flexWrap: 'wrap', marginTop: '2%' }}>

            <TouchableOpacity style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}
                onPress={() => {
                    navigation.navigate('Contract page 1', { userRenterEmail: user.renterEmail, uID: user.renterId, vehicleId: vehicleIds })


                }}
            >

                <Text style={styles.text}><AntDesign name="caretright" size={16} color="black" /> {user.renterEmail} </Text>

            </TouchableOpacity>
        </SafeAreaView>
    )


    return (
        <ScrollView style={styles.container}>

            <TouchableOpacity style={{ flex: 1, width: '100%', padding: 10 }}
                onPress={() => console.log("s")}
            ><Text>ss</Text></TouchableOpacity>
            <SafeAreaView style={{ flex: 6, width: '100%', flexDirection: 'column', }}>
                <View style={{ flex: 1, width: '100%', padding: 10 }}>
                    {ListItem}
                </View>
            </SafeAreaView>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2D2B29",
        padding: 15,
    },
    view: {
        width: 350,
        // height:1490,
        borderRadius: 20,

        backgroundColor: "#ffffff",
        alignSelf: "center",
        padding: 30, marginBottom: 20
    },
    textinput: {
        borderRadius: 4,
        borderColor: "black",
        borderWidth: 1,
        height: 17,
        width: 80,
        alignSelf: "center",
    },
    btn1: {
        color: "black",
        fontWeight: "bold",
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 70,
        paddingBottom: 50,
        paddingTop: 30
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        borderRadius: 4,
        padding: 10
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
});

export default MakeContract_2;
