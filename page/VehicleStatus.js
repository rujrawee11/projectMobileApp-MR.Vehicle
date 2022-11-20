import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Image, FlatList, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import VehicleBox from '../component/StatusVehicleDetails'
import Filter from '../component/Filter'

import { collection, doc, setDoc, addDoc, deleteDoc, updateDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db, authentication } from '../database/configdb';

const VehicleStatus = ({ route, navigation }) => {
    {/**ตัวเปิด Popup */ }
    const [filterOpen, setFilterOpen] = useState(false)
    const [vData] = useState([])

    const searchBrand = () => {

    }
    const openBar = () => {

    }

    //โซนตั้งค่า
    // useEffect(()=> {
    //     getDocs(collection(db, "vehicleDetails"))
    //         .then(docSnap => {
    //             docSnap.forEach((doc) => {
    //                 vData.push({  ...doc.data(),id: doc.id})
    //             });
    //             console.log("Doc:", vData)
    //         }).catch((error) => {
    //         // The write failed...
    //         alert(error);});
    // }, []);

    // const listItem = vData.map(vehicle=> 
    //     <SafeAreaView key={vehicle.id}>
    //         <VehicleBox brand={vehicle.brand} seats={vehicle.seats} os={vehicle.os} status={vehicle.status} paidStatus={vehicle.paidStatus} periodUsed={vehicle.periodUsed} />
    //     </SafeAreaView>
    // )

    return (
        <ScrollView style={styles.container}>
            {/**Pop up*/}
            <Filter fOpen={filterOpen} />
            {/**Top Zone*/}
            <SafeAreaView style={{ flex: 2, backgroundColor: '#2a9454', width: '100%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center' }}>
                <SafeAreaView style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '1%' }}>
                    <AntDesign onPress={() => openBar} name="bars" size={35} color="black" style={{ marginRight: '3%' }} />
                    <View style={{ flexDirection: 'row', width: 350, borderRadius: 10, backgroundColor: '#fff' }}>
                        <TextInput
                            placeholder='ยี่ห้อยานพาหนะ'
                            style={{ width: 300, height: 50, backgroundColor: '#fff', borderRadius: 10, padding: 10, fontSize: 18, }} />
                        <AntDesign onPress={() => openBar} name="search1" size={30} color="black" style={{ position: 'absolute', alignSelf: 'center', right: 0, marginRight: '2%' }} />
                    </View>
                </SafeAreaView>

                <SafeAreaView style={{ flex: 2, width: '100%', alignItems: 'center', marginTop: '3%', marginBottom: '3%' }}>
                    <Text style={styles.headText}>Filter</Text>
                    <TouchableOpacity
                        style={styles.touchableOpacity}
                        onPress={() => setFilterOpen(true)}>
                        <AntDesign name="filter" size={24} color="black" />
                        <Text style={{ fontSize: 20, marginLeft: '2%' }}>ประเภท</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>

            {/**Mid Zone*/}
            <SafeAreaView style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'flex-start', marginTop: '3%', marginLeft: '3%' }}>
                <Text style={styles.headText}>Search Result</Text>
            </SafeAreaView>

            {/**Last Zone ส่วนใส่ component VehicleStatusDetails */}
            <SafeAreaView style={{ flex: 6, width: '100%', flexDirection: 'column', }}>
                <View style={{ flex: 1, width: '100%', padding: 10 }}>
                    {/* {listItem} */}
                    <VehicleBox brand="TOYOTA" seats="4" os="Auto" status={true} paidStatus={true} periodUsed="750" />
                    <VehicleBox brand="YAMAHA" seats="2" os="Auto" status={false} paidStatus={false} periodUsed="0" />
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
        backgroundColor: '#DFF2FD'
    },
    headText: {
        fontSize: 30,
        fontWeight: '500'
    },
    touchableOpacity: {
        marginTop: '3%',
        flexDirection: 'row',
        width: 350,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10, padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default VehicleStatus