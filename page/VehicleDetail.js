import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, SafeAreaView, Image, FlatList, TouchableOpacity, ScrollView, Modal} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import 'react-native-gesture-handler';

const VehicleDetail = (props) => {
    const [protectText, setProtectText] = useState("ผู้ให้เช่ายานพาหนะเงินมัดจำในบัตรเครดิตของคุณ คุณอาจสูญเสียเงินมัดจำทั้งหมดหากรถเสียหายหรือถูกขโมย แต่ตราบใดที่คุณมีการคุ้มครองเต็มรูปแบบของเรา ทางผู้ให้เช่ายานพาหนะจะคืนเงินให้คุณ")
    const [redProtectText, setRedProtectText] = useState("(ราคารวมภาษีและค่าธรรมเนียมที่เกี่ยวข้องทั้งหมดแล้ว)")
    const ruleDetail1 = useState("หากรถที่เช่าเกิดการถูกโจรกรรม ประกัน “ความคุ้มครองเต็มรูปแบบ” จะทำให้ผู้เช่าไม่มี---")
    const ruleDetail2 = useState("ผลิตภัณฑ์ความคุ้มครองมักจะมีข้อยกเว้นต่าง ๆ แต่ประกัน “ความคุ้มครองเต็มรูปแบบ” นั้นครอบคลุมภายนอกและชิ้นส่วนเครื่องยนต์ของรถทุกชิ้น ตั้งแต่ยางรถและหน้าต่างรถ ไปจนถึงเครื่องยนต์ หลังคา และช่วงล่าง")
    const ruleDetail3 = useState("หากรถไม่สามารถใช้การได้ กุญแจสูญหาย หรือลืมกุญแจไว้ในรถ ประกัน “ความคุ้มครองเต็มรูปแบบ” จะคืนเงินให้กรณีที่มีค่าเรียกช่างมาให้บริการ ค่าลากรถ และค่าทำกุญแจใหม่")

    const [logoName1, setLogoName1] = useState("down")
    const [logoName2, setLogoName2] = useState("down")
    const [logoName3, setLogoName3] = useState("down")

    const dropText = (number) => {
        if (number ==1) {
            if (shouldShowRule1Detail == false) {
                setShouldShowRule1Detail(true)
                setShouldShowRule2(false)
                setShouldShowRule3(false)
            }
            else if (shouldShowRule1Detail == true) {
                setShouldShowRule1Detail(false)
                setShouldShowRule2(true)
                setShouldShowRule3(true)
            }
            if (logoName1 == "down") {
                setLogoName1("up")
            } else {
                setLogoName1("down")
            }
        }
        else if (number==2) {
            if (shouldShowRule2Detail == false) {
                setShouldShowRule2Detail(true)
                setShouldShowRule1(false)
                setShouldShowRule3(false)
            }
            else if (shouldShowRule2Detail == true) {
                setShouldShowRule2Detail(false)
                setShouldShowRule1(true)
                setShouldShowRule3(true)
            }
            if (logoName2 == "down") {
                setLogoName2("up")
            } else {
                setLogoName2("down")
            }
        }
        else {
            if (shouldShowRule3Detail == false) {
                setShouldShowRule3Detail(true)
                setShouldShowRule1(false)
                setShouldShowRule2(false)
            }
            else if (shouldShowRule3Detail == true) {
                setShouldShowRule3Detail(false)
                setShouldShowRule1(true)
                setShouldShowRule2(true)
            }
            if (logoName3 == "down") {
                setLogoName3("up")
            } else {
                setLogoName3("down")
            }
        }
    }

    const [shouldShowRule1, setShouldShowRule1] = useState(true)
    const [shouldShowRule2, setShouldShowRule2] = useState(true)
    const [shouldShowRule3, setShouldShowRule3] = useState(true)

    const [shouldShowRule1Detail, setShouldShowRule1Detail] = useState(false)
    const [shouldShowRule2Detail, setShouldShowRule2Detail] = useState(false)
    const [shouldShowRule3Detail, setShouldShowRule3Detail] = useState(false)

    {/**โซน Pop up การจอง */}
    const [reserveVisible, setReserveVisible] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <Modal
            transparent={true} 
            visible={reserveVisible}>
                <SafeAreaView style={{flex: 1, backgroundColor: '#000000aa'}}>
                    <SafeAreaView style={styles.outBorder}>
                        <SafeAreaView style={{flex: 1, margin: 10}}>
                            <Text></Text>
                        </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
            </Modal>

            {/** ส่วน 1 ชื่อหัวข้อ */}
            <SafeAreaView style={[styles.headerTextZone ,{flex: 0.5, alignItems: 'flex-start', justifyContent: 'center'}]}>
                <AntDesign name="bars" size={35} color="black" style={{marginLeft: '3%'}}/>
            </SafeAreaView>
            
            {/** ส่วน 2 Box ข้อมูล */}
            <SafeAreaView style={{Width: '100%', flex: 4}}>
                <SafeAreaView style={[styles.detailBox, {backgroundColor: '#DADBFB'}]}>
                    <SafeAreaView style={{flex: 3, flexDirection: 'row', flexWrap: 'wrap'}}>
                        <SafeAreaView style={{flex: 1}}>
                            <View style={{flex: 1, margin: '5%', backgroundColor: '#D5FAF4', borderRadius: 10}}>
                                <Image source={{uri : "https://www.engdict.com/data/dict/media/images_public/car-00084470637418118683737545_normal.png"}} style={{margin: '5%', flex: 1}} />
                            </View>
                        </SafeAreaView>
                        <SafeAreaView style={{flex: 1, width: '100%'}}>
                            <View style={{flex: 1, margin: '5%', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text style={styles.bigText}>TOYOTA</Text>
                                <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> 4 Seats</Text>
                                <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> Auto</Text>
                                <Text style={styles.text}><AntDesign name="caretright" size={16} color="black"/> 750 Km perrental</Text>
                            </View>
                        </SafeAreaView>
                    </SafeAreaView>
                    <SafeAreaView style={{flex: 1.5, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <TouchableOpacity style={[styles.touchableOpacity, {marginRight: '2%', backgroundColor: '#EB3F38', flexDirection: 'row'}]}>
                            <Text style={{fontSize: 18, fontWeight: '500', color: '#fff'}}>More Info</Text>
                            <AntDesign name="caretright" size={18} color="#fff" style={{marginLeft: '2%', marginRight: '2%'}}/>
                        </TouchableOpacity>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
            
            {/** ส่วน 3 ชื่อหัวข้อ */}
            <SafeAreaView style={[styles.headerTextZone ,{flex: 1, alignItems: 'flex-start', justifyContent:'flex-end'}]}>
                <Text style={styles.headText}>ประกันยานพาหนะ</Text>
            </SafeAreaView>
            
            {/** ส่วน 4 เอกสารชี้แจง ฯลฯ */}
            <SafeAreaView style={{flex: 6}}>
                <SafeAreaView style={[styles.detailBox, {backgroundColor: '#ADE1FF'}]}>
                    <SafeAreaView style={{flex: 1.5, margin: 10, justifyContent: 'space-evenly'}}>
                        <View style={{alignItems: 'flex-start'}}>
                            <Text style={styles.text}><Text style={{fontSize: 18, fontWeight: 'bold'}}>รายละเอียด: </Text>{protectText}</Text>
                        </View>
                        <Text style={{fontSize: 16, color: 'red'}}>{redProtectText}</Text>
                    </SafeAreaView>
                    
                    <SafeAreaView style={{flex: 2, backgroundColor: 'white', margin: 10, justifyContent: 'space-evenly'}}>
                        <Text style={styles.headerText}>สิ่งที่คุ้มครอง</Text>  
                            {shouldShowRule1 ? (
                                <View style={styles.textBoxLayout}>
                                    <Text style={[styles.text, {fontWeight: '400'}]}>1. ยานพาหนะถูกโจรกรรม <AntDesign name={logoName1} size={15} color="black" onPress={()=>dropText(1)} /></Text>
                                </View>
                            ): null}
                            {shouldShowRule1Detail ? (
                                <View style={styles.textBoxLayout}>
                                    <Text style={[styles.litleText]}>{ruleDetail1}</Text>
                                </View>
                            ): null}

                            {shouldShowRule2 ? (
                                <View style={styles.textBoxLayout}>
                                    <Text style={[styles.text, {fontWeight: '400'}]}>2. ครอบคลุมภายนอก และชิ้นส่วนของยานพาหนะ เช่น ล้อ ตัวเครื่อง กระจกหลัง เบาะ เป็นต้น <AntDesign name={logoName2} size={15} color="black" onPress={()=>dropText(2)}/></Text>
                                </View>
                            ): null}
                            {shouldShowRule2Detail ? (
                                <View style={styles.textBoxLayout}>
                                    <Text style={[styles.litleText]}>{ruleDetail2}</Text>
                                </View>
                            ): null}

                            {shouldShowRule3 ? (
                                <View style={styles.textBoxLayout}>
                                    <Text style={[styles.text, {fontWeight: '400'}]}>3. ยานพาหนะไม่สามารถใช้การได้ เช่น ลืมกุญแจ หรือ สูญหาย <AntDesign name={logoName3} size={15} color="black" onPress={()=>dropText(3)}/></Text>
                                </View>
                            ) : null}
                            {shouldShowRule3Detail ? (
                                <View style={styles.textBoxLayout}>
                                    <Text style={[styles.litleText]}>{ruleDetail3}</Text>
                                </View>
                            ): null}
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
            
            {/** ส่วน 5 ปุ่มจอง */}
            <SafeAreaView style={[styles.headerTextZone ,{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
                <TouchableOpacity style={[styles.touchableOpacity, {backgroundColor: '#FDB23F'}]}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>จอง</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
        
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
        fontWeight: '500',
        margin: '3%'
    },
    touchableOpacity: {
        width: 120,
        height: 50,
        borderRadius: 8,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTextZone: {
        width: '100%'
    },
    detailBox: {
        flex: 1,
        borderRadius: 15,
        margin: 10
    },
    text: {
        fontSize: 18,
        fontWeight: '300'
    },
    bigText: {
        fontSize: 30,
        fontWeight: '500'
    },
    headerText:{
        fontSize: 18,
        fontWeight: 'bold'
    }, 
    outBorder: {
        flex: 1, 
        backgroundColor: '#fff',
        padding: 20, 
        margin: 30, 
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '0000'
    },
    textBoxLayout: {
        marginLeft: '7%'
    },
    litleText: {
        fontSize: 16,
        fontWeight: '300'
    }
})

export default  VehicleDetail