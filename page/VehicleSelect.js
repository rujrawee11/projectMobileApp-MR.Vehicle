import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, SafeAreaView, Image, FlatList, TouchableOpacity, ScrollView, Modal} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Filter from '../component/Filter'
import VehicleBox from '../component/SelectVehicleDetails'

const VehicleSelect = (props) => {
    {/**ตัวเปิด Popup*/}
    const [filterOpen, setFilterOpen] = useState(false);
    const [typeInput, setTypeInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    
    const searchBrand = () => {

    }
    const openBar = () => {

    }

    return (
        <ScrollView style={styles.container}>
            {/**Pop up*/}
            <Filter />
            {/**Top Zone*/}
            <SafeAreaView style={{flex:2, backgroundColor: '#55F7FC', width: '100%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center'}}>
                <SafeAreaView style={{flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '5%'}}>
                    <AntDesign onPress={()=>openBar} name="bars" size={35} color="black" style={{marginRight: '3%'}}/>
                    <View style={{flexDirection: 'row',borderRadius: 10, width: 350,  backgroundColor: '#fff'}}>
                        <TextInput 
                        placeholder='ยี่ห้อยานพาหนะ' 
                        style={{width: 300, height: 50, backgroundColor: '#fff',  padding: 10, fontSize: 18,borderRadius: 10 }} 
                        value={typeInput} 
                        onChange={(text) => setTypeInput(text)} />
                        <AntDesign onPress={()=>searchBrand} name="search1" size={30} color="black" style={{position: 'absolute', alignSelf: 'center', right: 0, marginRight: '2%'}}/>
                    </View>
                </SafeAreaView>
                
                <SafeAreaView style={{flex: 2, width: '100%', alignItems: 'flex-start', marginTop: '3%', marginBottom: '3%',}}>
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={styles.headText}>Filter</Text>
                        </View>
                        <View style={{flex: 1}}>
                        </View>
                    </View>
                    <SafeAreaView style={{flex: 1, width: '100%', marginTop: '3%', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity 
                        style={styles.touchableOpacity}
                        onPress={()=>setFilterOpen(true)}>
                            <AntDesign name="filter" size={24} color="black" />
                            <Text style={{fontSize: 20, marginLeft: '2%'}}>ประเภท</Text>
                        </TouchableOpacity>
                        <TextInput 
                        style={{width: 120, height: 50, backgroundColor: '#fff', borderColor: 'black', borderRadius: 8, borderWidth: 1, padding: 10, fontSize: 20, }}
                        placeholder="ราคา"
                        value={priceInput}
                        onChange={(text)=>{setPriceInput(text)}}
                         />
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
            
            {/**Mid Zone*/}
            <SafeAreaView style={{flex:1 , width: '100%', justifyContent: 'center', alignItems: 'flex-start', marginTop: '3%', marginLeft: '3%'}}>
                <Text style={styles.headText}>Search Result</Text>
            </SafeAreaView>

            {/**Last Zone ส่วนใส่ component VehicleStatusDetails */}
            <SafeAreaView style={{flex:6, width: '100%', flexDirection: 'column', }}>
                <View style={{flex: 1, width: '100%', padding:10}}>
                    <VehicleBox />
                    <VehicleBox />
                    <VehicleBox />
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
    }
})

export default VehicleSelect