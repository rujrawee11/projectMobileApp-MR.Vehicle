import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CheckBox from "expo-checkbox";
import { collection, doc, setDoc, addDoc, deleteDoc, updateDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db, authentication } from '../database/configdb'
const MakeContract_3 = ({ route, navigation }) => {
    const [isSelected, setSelection] = useState(false); //checkbox
    const { renterEmail, RentalEmail, vehicleId, UId } = route.params;

    const [disable, setDisable] = useState(false)
    const [confirmButton, setconfirmButton] = useState(false)
    const [firstPay, setfirstPay] = useState("")
    const [Id, setId] = useState("");

    const mud = () => {
        setDisable(!disable)
    }

    useEffect((id) => {
        getDoc(doc(db, "vehicleDetails", vehicleId))
            .then(docData => {
                if (docData.exists()) {

                    setfirstPay(docData.data().deposit)

                }
            }).catch((error) => {
                // The write failed...
                alert(error);
            });
    }, [])




    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: 10, marginBottom: 15, textAlign: "center" }}>
                <View style={{ width: 100, height: 4, backgroundColor: "white", position: "absolute", top: 40 }}></View>
                <TouchableOpacity style={{ width: 40, textAlign: "center", margin: 10, height: 40, borderRadius: 360, padding: 10, backgroundColor: '#FBE0AB' }} ><Text style={{ textAlign: "center" }}>1</Text></TouchableOpacity>
                <TouchableOpacity style={{ width: 40, textAlign: "center", margin: 10, height: 40, borderRadius: 360, padding: 10, backgroundColor: "#FBE0AB" }} setDisable={disable}><Text Text style={{ textAlign: "center" }}>2</Text></TouchableOpacity>
                <TouchableOpacity style={{ width: 40, textAlign: "center", margin: 10, height: 40, borderRadius: 360, padding: 10, backgroundColor: disable ? '#FBE0AB' : '#F3C623' }} ><Text style={{ textAlign: "center" }}>3</Text></TouchableOpacity>
            </View>
            <View style={styles.view}>
                <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center", padding: 20 }}>สัญญาเช่ายานพาหนะ</Text>


                <Text style={{ fontWeight: "bold", paddingTop: 10 }}>ข้อที่ ๖ การบังคับค่าปรับ ค่าเสียหาย และค่าใช้จ่าย</Text>
                <Text>
                    {" "}           ในกรณีที่ผู้เช่าไม่ปฏิบัติตามสัญญาข้อใดข้อหนึ่งด้วยเหตุใดๆ ก็ตาม จนเป็นเหตุให้เกิดค่าปรับ ค่าเสียหาย หรือค่าใช้จ่ายแก่ผู้ให้เช่า ผู้เช่าต้องชดใช้ค่าปรับ
                    ค่าเสียหาย หรือค่าใช้จ่ายดังกล่าวให้แก่ผู้ให้เช่าโดยสิ้นเชิงภายในกำหนด 3 วัน นับถัดจากวันที่ได้รับแจ้งเป็นข้อจากผู้ให้เช่า
                    หากผู้เช่าไม่ชดใช้ให้ถูกต้องครบถ้วนภายในระยะเวลาดังกล่าวให้ผู้ให้เช่ามีสิทธิที่จะหักเอาจากค่าเช่าที่ต้องชำระ หรือบังคับจากหลักประกันการปฏิบัติตามสัญญาได้ทันที
                    หากค่าปรับ ค่าเสียหาย หรือค่าใช้จ่ายที่บังคับจากค่าเช่าที่ต้องชำระ หรือหลักประกัน
                    การปฏิบัติตามสัญญาแล้วยังไม่เพียงพอ ผู้เช่ายินยอมชำระส่วนที่เหลือที่ยังขาดอยู่จนครบถ้วนตามจำนวนค่าปรับ
                    ค่าเสียหาย หรือค่าใช้จ่ายนั้น ภายในกำหนด 3 วัน


                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ fontWeight: "bold" }}>ข้อ ๗ หลักประกันการปฏิบัติตามสัญญา</Text>
                <Text>

                    {" "}           ในขณะทำสัญญานี้ ผู้ให้เช่าได้นำหลักประกันเป็นค่ามัดจำ เป็นจำนวนเงิน {firstPay} บาท มามอบแก่ผู้เช่าเพื่อเป็นหลักประกันการปฏิบัติตามสัญญานี้
                    ซึ่งครอบคลุมความรับผิดทั้งปวงของผู้ให้เช่าตลอดอายุสัญญาเช่ารถ ในกรณีที่ผู้เช่าปฎิบัติตามสัญญาจะได้รับค่ามัดจำคืน ถ้าผิดสัญญาหรือ ทำการยกเลิกสัญญาก่อนกำหนด ผู้ให้เช่าสามารถยึดค่ามัดจำทั้งหมดได้
                </Text>
            </View>


            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.label} >ข้าพเจ้าได้อ่านอย่างครบถ้วน และยินยอมรับข้อกำหนด
                    {"\n"}ดังกล่าว โดยมิได้มีการบังคับข่มขู่ให้กระทำ</Text >
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                <TouchableOpacity
                    style={{
                        textAlign: "center", padding: 10, borderRadius: 20, margin: 10, width: 150, backgroundColor: "#FBE0AB", marginBottom: 40, shadowColor: "black",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 1,
                        shadowRadius: 16.00,

                        elevation: 14
                    }}

                    onPress={() => {
                        [navigation.goBack(), mud]
                    }}
                >
                    <Text style={{ textAlign: "center" }}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        textAlign: "center", alignItems: "center", marginBottom: 20, padding: 10, marginBottom: 40, borderRadius: 20, margin: 10, width: 150, backgroundColor: "#D58C00", shadowColor: "black",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 1,
                        shadowRadius: 16.00,

                        elevation: 14
                    }}

                    onPress={() => {
                        (isSelected === true ? [navigation.navigate('MAIN', { Email: renterEmail }), alert("ทำสัญญาเรียบร้อย")] : alert('โปรดกดยินยอมข้อตกลง'))


                        addDoc(collection(db, "contract"), {
                            makeContract: true,
                            renterEmail: renterEmail,
                            rentalEmail: RentalEmail,
                            vId: vehicleId
                            , renterId: UId, confirmpay: true

                        })
                        updateDoc(doc(db, "signup", UId), {
                            makeContract: true

                        })
                        updateDoc(doc(db, "vehicleDetails", vehicleId), {
                            usedStatus: true

                        })
                    }}>
                    <Text style={styles.but}>ทำสัญญา</Text>
                </TouchableOpacity>
            </View>



        </ScrollView >
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
        margin: 8, color: "#FF2B2B"
    },
});

export default MakeContract_3;
