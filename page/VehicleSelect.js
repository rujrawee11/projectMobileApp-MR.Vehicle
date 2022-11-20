import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Filter from '../component/Filter'
import VehicleBox from '../component/SelectVehicleDetails'

import { collection, doc, setDoc, addDoc, deleteDoc, updateDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db, authentication } from '../database/configdb';

const VehicleSelect = ({ route, navigation }) => {
    {/**ตัวเปิด Popup*/ }
    const [filterOpen, setFilterOpen] = useState(false);
    const [typeInput, setTypeInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [vId] = useState([]);

    //ค่า user Renter นำเข้า
    const { uID } = route.params
    const [uId] = useState(uID)
    const { userRenterEmail } = route.params
    const [uRenterEmail] = useState(userRenterEmail)

    const openFilter = (status) => {
        setFilterOpen(status)
    }

    const searchBrand = () => {

    }
    const openBar = () => {

    }

    // โซนตั้งค่า
    useEffect(() => {
        getDocs(collection(db, "vehicleDetails"))
            .then(docSnap => {
                docSnap.forEach((doc) => {
                    vId.push({ ...doc.data(), id: doc.id })
                });
                // console.log("vID:", vId)
                console.log("uId:", uId)
                console.log("user renter email:", uRenterEmail)
                // console.log(vehicleID)
            }).catch((error) => {
                // The write failed...
                alert(error);
            });
    }, []);

    const ListItem = vId.map(vehicle =>
        <SafeAreaView key={vehicle.id} style={{ flex: 1, backgroundColor: '#DADBFB', borderRadius: 10, width: '100%', flexWrap: 'wrap', marginTop: '2%' }}>
            <SafeAreaView style={{ flexDirection: 'row', flex: 1, margin: 10 }}>
                <SafeAreaView style={styles.viewVehicleImage}>
                    <Image source={{ uri: "https://www.engdict.com/data/dict/media/images_public/car-00084470637418118683737545_normal.png" }} style={{ width: 180, height: 120, borderRadius: 15, margin: 10 }} />
                </SafeAreaView>
                <SafeAreaView style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
                    <Text style={styles.headText}>{vehicle.brand}</Text>
                    <Text style={styles.text}><AntDesign name="caretright" size={16} color="black" /> {vehicle.seats} Seats</Text>
                    <Text style={styles.text}><AntDesign name="caretright" size={16} color="black" /> {vehicle.os}</Text>
                    <Text style={styles.text}><AntDesign name="caretright" size={16} color="black" /> {vehicle.oilUsed} Km perrental</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={[styles.boxLayout, { marginTop: '-2%', flexDirection: 'column', alignItems: 'flex-start' }]}>
                <SafeAreaView style={[styles.Layout, { marginLeft: '6%' }]}>
                    <View style={styles.viewBoxUn}>
                        <Text style={styles.text}>Price for 3 Days</Text>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={[styles.Layout, { marginLeft: '12%' }]}>
                    <View style={[styles.viewBoxUn]}>
                        <Text style={styles.text}>THB {vehicle.price}</Text>
                    </View>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={[styles.boxLayout, { padding: 10, marginRight: '6%' }]}>
                <SafeAreaView style={[styles.Layout, { alignItems: 'flex-end' }]}>
                    {vehicle.usedStatus == true ?

                        < TouchableOpacity
                            style={{ padding: 10, backgroundColor: '#FFD051', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => alert("ียานพาหนะถูกจองเรียบร้อยแล้ว")} >
                            <Text style={styles.text}>View Details</Text>
                            <AntDesign name="caretright" size={20} color="black" />
                        </TouchableOpacity>
                        : < TouchableOpacity
                            style={{ padding: 10, backgroundColor: '#FFD051', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => navigation.navigate("VEHICLE DETAIL", { vID: vehicle.id, userRenterEmail: uRenterEmail, userRentalEmail: vehicle.rentalEmail })} >
                            <Text style={styles.text}>View Details</Text>
                            <AntDesign name="caretright" size={20} color="black" />
                        </TouchableOpacity>}

                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )

    return (
        <ScrollView style={styles.container}>
            {/**Pop up*/}
            <Filter fOpen={filterOpen} />
            {/**Top Zone*/}
            <SafeAreaView style={{ flex: 2, backgroundColor: '#2a9454', width: '100%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center' }}>
                <SafeAreaView style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                    <AntDesign onPress={() => searchBrand} name="bars" size={35} color="black" style={{ marginRight: '3%' }} />
                    <View style={{ flexDirection: 'row', borderRadius: 10, width: 350, backgroundColor: '#fff' }}>
                        <TextInput
                            placeholder="ชื่อของแบรนด์"
                            style={{ width: 300, height: 50, backgroundColor: '#fff', padding: 10, fontSize: 18, borderRadius: 10 }}
                            value={typeInput}
                            onChange={(text) => setTypeInput(text)} />
                        <AntDesign onPress={() => searchBrand} name="search1" size={30} color="black" style={{ position: 'absolute', alignSelf: 'center', right: 0, marginRight: '2%' }} />
                    </View>
                </SafeAreaView>

                <SafeAreaView style={{ flex: 2, width: '100%', alignItems: 'flex-start', marginTop: '3%', marginBottom: '3%', }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={styles.headText}>Filter</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                        </View>
                    </View>
                    <SafeAreaView style={{ flex: 1, width: '100%', marginTop: '3%', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => openFilter(true)}>
                            <AntDesign name="filter" size={24} color="black" />
                            <Text style={{ fontSize: 20, marginLeft: '2%' }}>ประเภท</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={{ width: 120, height: 50, backgroundColor: '#fff', borderColor: 'black', borderRadius: 8, borderWidth: 1, padding: 10, fontSize: 20, }}
                            placeholder="ราคา"
                            value={priceInput}
                            onChange={(text) => { setPriceInput(text) }}
                        />
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>

            {/**Mid Zone*/}
            <SafeAreaView style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'flex-start', marginTop: '3%', marginLeft: '3%' }}>
                <Text style={styles.headText}>Search Result</Text>
            </SafeAreaView>

            {/**Last Zone ส่วนใส่ component VehicleStatusDetails */}
            <SafeAreaView style={{ flex: 6, width: '100%', flexDirection: 'column', }}>
                <View style={{ flex: 1, width: '100%', padding: 10 }}>
                    {ListItem}
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#DFF2FD',
    },
    headText: {
        fontSize: 30,
        fontWeight: '500'
    },
    touchableOpacity: {
        flexDirection: 'row',
        width: 120,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 18,
        fontWeight: '600'
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewVehicleImage: {
        flex: 1,
        width: '100%',
        backgroundColor: '#D5FAF4',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
    }, boxLayout: {
        flex: 1,
        margin: '3%'
    }, Layout: {
        flex: 1,
        width: 'auto'
    }, viewBoxUn: {
        borderRadius: 10,
    },
})

export default VehicleSelect