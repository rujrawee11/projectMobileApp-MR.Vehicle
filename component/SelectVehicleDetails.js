import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const SelectVehicleDetails = (probs) => {
    const [vehicleBrand, setVehicleBrand] = React.useState("Kia Creat")
    const [vehicleSeats, setVehicleSeat] = React.useState("4 Seats")
    const [vehicleOS, setVehicleOS] = React.useState("Manual")
    const [vehiclePriceforDay, setvehiclePriceforDay] = React.useState("Price for 3 days:")
    const [vehiclPrice, setVehiclPrice] = React.useState(5000)
    const [vehiclePerrental, setVehiclePerrental] = React.useState("750 Km Perrntal")
    const [vImage, setVImage] = React.useState("")

    {/***/}
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#DADBFB', width: '100%', flexWrap: 'wrap', marginTop: '2%'}}>
                     
            <SafeAreaView style={[styles.boxLayout, {flexDirection: 'row'}]}>
                <SafeAreaView style={styles.viewVehicleImage}>
                    <Image source={{uri : "https://www.engdict.com/data/dict/media/images_public/car-00084470637418118683737545_normal.png"}} style={[styles.vehicleImage, {}]} />
                </SafeAreaView>
                <SafeAreaView style={{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
                    <Text style={styles.headText}>{vehicleBrand}</Text>
                    <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> {vehicleSeats}</Text>
                    <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> {vehicleOS}</Text>
                    <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> {vehiclePerrental}</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={[styles.boxLayout, { marginTop: '-2%', flexDirection: 'column', alignItems: 'flex-start'}]}>
                <SafeAreaView style={[styles.Layout, {marginLeft: '6%'}]}>
                    <View style={styles.viewBoxUn}>
                        <Text style={styles.text}>{vehiclePriceforDay}</Text>
                    </View>
                </SafeAreaView>
                <SafeAreaView style={[styles.Layout, { marginLeft: '12%'}]}>
                    <View style={[styles.viewBoxUn]}>
                        <Text style={styles.text}>THB {vehiclPrice}</Text>
                    </View>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={[styles.boxLayout, {padding: 10, marginRight: '6%'}]}>
                <SafeAreaView style={[styles.Layout, {alignItems: 'flex-end'}]}>
                    <TouchableOpacity style={[styles.touchableOpacity]}>
                        <Text style={styles.text}>View Details</Text>
                        <AntDesign name="caretright" size={20} color="black"/>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    vehicleImage: {
        width: 180,
        height: 120,
        // borderRadius: 15,
    },
    boxLayout: {
        flex: 1,
        margin: '3%'
    },
    text: {
        fontSize: 18,
        fontWeight: '600'
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Layout: {
        flex: 1,
        width: 'auto'
    },
    touchableOpacity: {
        padding: 10,
        backgroundColor: '#FFD051',
        // borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewBoxUn : {
        // borderRadius: 10,
    },
    viewBoxAva: {
        padding: 5, 
        backgroundColor: '#ADFFBA', 
        // borderRadius: 10,
    },
    viewVehicleImage: {
        flex: 1,
        width: '100%',
        backgroundColor:'#D5FAF4',
        alignItems: 'center',
        // borderRadius: 10
    }
})

export default SelectVehicleDetails