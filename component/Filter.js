import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

const Filter = (props) => {
    const [filterVisible, setFilterVisible] = useState(false)
    const [forLoad, setForLoad] = useState(false)

    {/**โซนของค่า CheckBox*/ }
    const [checkBoxCar, setCheckBoxCar] = useState(false);
    const [checkBoxMotor, setCheckBoxMotor] = useState(false);
    const [checkBoxBysicle, setCheckBoxBysicle] = useState(false);
    const [checkBoxAuto, setCheckBoxAuto] = useState(false);
    const [checkBoxManual, setCheckBoxManual] = useState(false);
    const [sizeSmall, setSizeSmall] = useState(false);
    const [sizeMedium, setSizeMedium] = useState(false);
    const [sizeBig, setSizeBig] = useState(false);

    const ColseOpen = (Status) => {

    }

    const isType = (number) => {
        if (number == 1) {
            setCheckBoxCar(true);
            setCheckBoxMotor(false);
            setCheckBoxBysicle(false);
        }
        else if (number == 2) {
            setCheckBoxCar(false);
            setCheckBoxMotor(true);
            setCheckBoxBysicle(false);
        }
        else if (number == 3) {
            setCheckBoxCar(false);
            setCheckBoxMotor(false);
            setCheckBoxBysicle(true);
        }

        if (checkBoxCar == true) {
            setCheckBoxCar(false);
        }
        else if (checkBoxMotor == true) {
            setCheckBoxMotor(false);
        }
        else if (checkBoxBysicle == true) {
            setCheckBoxBysicle(false);
        }
    }
    const isOS = (number) => {
        if (number == 1) {
            setCheckBoxAuto(true);
            setCheckBoxManual(false);
        }
        else if (number == 2) {
            setCheckBoxAuto(false);
            setCheckBoxManual(true);
        }

        if (checkBoxAuto == true) {
            setCheckBoxAuto(false);
        }
        else if (checkBoxManual == true) {
            setCheckBoxManual(false);
        }
    }
    const isSize = (number) => {
        if (number == 1) {
            setSizeSmall(true);
            setSizeMedium(false);
            setSizeBig(false);
        }
        else if (number == 2) {
            setSizeSmall(false);
            setSizeMedium(true);
            setSizeBig(false);
        }
        else if (number == 3) {
            setSizeSmall(false);
            setSizeMedium(false);
            setSizeBig(true);
        }

        if (sizeSmall == true) {
            setSizeSmall(false);
        }
        else if (sizeMedium == true) {
            setSizeMedium(false);
        }
        else if (sizeBig == true) {
            setSizeBig(false);
        }
    }
    {/**จบโซนกำหนด CheckBox*/ }

    useEffect(() => {
        setFilterVisible(props.fOpen);
    }, [])

    return (
        <Modal
            transparent={true}
            visible={filterVisible}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: '#000000aa' }}>
                <SafeAreaView style={styles.outBorder}>
                    {/**โซน 1 */}
                    <View style={[styles.inBorder, { flex: 2 }]}>
                        <View style={[styles.inBorder, { flexDirection: 'row', flex: 1, width: '100%' }]}>
                            <Text style={[styles.headText, { flex: 9 }]}>ประเภทยานพาหนะ</Text>
                            <AntDesign onPress={() => setFilterVisible(false)} name="close" size={24} color="black" style={{ flex: 1, marginRight: '2%' }} />
                        </View>
                        <View style={{ flexDirection: 'row', flex: 2 }}>
                            <View style={[styles.inBorder, { flex: 1 }]}>
                                {/**Mock Up*/}
                                <Checkbox style={styles.checkBox} value={checkBoxCar} onValueChange={() => isType(1)} />
                                <Checkbox style={styles.checkBox} value={checkBoxMotor} onValueChange={() => isType(2)} />
                                <Checkbox style={styles.checkBox} value={checkBoxBysicle} onValueChange={() => isType(3)} />
                            </View>
                            <View style={[styles.inBorder, { flex: 5 }]}>
                                <Text style={[styles.softText, { alignSelf: 'flex-start' }]}>รถยนต์</Text>
                                <Text style={[styles.softText, { alignSelf: 'flex-start' }]}>จักรยานยนต์</Text>
                                <Text style={[styles.softText, { alignSelf: 'flex-start' }]}>จักรยาน</Text>
                            </View>
                        </View>
                    </View>
                    {/**โซน 2 */}
                    <View style={[styles.inBorder, { flex: 1.5 }]}>
                        <View style={[styles.inBorder, { flex: 1 }]}>
                            <Text style={[styles.headText, { alignSelf: 'flex-start' }]}>ระบบ</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1.5 }}>
                            <View style={[styles.inBorder, { flex: 1 }]}>
                                <Checkbox style={styles.checkBox} value={checkBoxAuto} onValueChange={() => isOS(1)} />
                                <Checkbox style={styles.checkBox} value={checkBoxManual} onValueChange={() => isOS(2)} />

                            </View>
                            <View style={[styles.inBorder, { flex: 5 }]}>
                                <Text style={[styles.softText, { alignSelf: 'flex-start' }]}>อัตโนมัติ</Text>
                                <Text style={[styles.softText, { alignSelf: 'flex-start' }]}>กระปุก</Text>
                            </View>
                        </View>
                    </View>
                    {/**โซน 3 */}
                    <View style={[styles.inBorder, { flex: 3 }]}>
                        <View style={[styles.inBorder, { flex: 1 }]}>
                            <Text style={[styles.headText, { alignSelf: 'flex-start' }]}>ขนาด</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 2 }}>
                            <View style={[styles.inBorder, { flex: 1 }]}>
                                <Checkbox style={styles.checkBox} value={sizeSmall} onValueChange={() => isSize(1)} />
                                <Checkbox style={styles.checkBox} value={sizeMedium} onValueChange={() => isSize(2)} />
                                <Checkbox style={styles.checkBox} value={sizeBig} onValueChange={() => isSize(3)} />
                            </View>
                            <View style={[styles.inBorder, { flex: 5 }]}>
                                <Text style={[styles.softText, { alignSelf: 'flex-start' }]}>เล็ก</Text>
                                <Text style={[styles.softText, { alignSelf: 'flex-start' }]}>กลาง</Text>
                                <Text style={[styles.softText, { alignSelf: 'flex-start' }]}>ใหญ่</Text>
                            </View>
                        </View>
                        <View style={[styles.inBorder, { flex: 1 }]}>
                            <TouchableOpacity
                                style={{ backgroundColor: 'white', width: 200, height: 50, borderRadius: 15, borderWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
                                onPress={() => setFilterVisible(false)}
                            >
                                <AntDesign name="filter" size={24} color="black" />
                                <Text style={[styles.headText, { alignSelf: 'center' }]}>ยืนยัน</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    outBorder: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        margin: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '0000'
    },
    inBorder: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headText: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: '4%'
    },
    softText: {
        fontSize: 24,
        fontWeight: '300',
        marginLeft: '2%'
    },
    checkBox: {
        width: 30,
        height: 30,
        borderColor: 'black',
        borderRadius: 5
    }
})
export default Filter