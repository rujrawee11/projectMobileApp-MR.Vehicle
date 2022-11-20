import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ScrollView, } from "react-native-gesture-handler";
import { DataTable } from 'react-native-paper';
import Dropdown from 'react-dropdown';
import { collection, doc, addDoc, updateDoc, getDoc, onSnapshot, getDocs, query, where } from "firebase/firestore";
import { db } from "../database/configdb"
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const MakeInvoice = ({ route, navigation }) => {
    const { userRenterEmail, confirm, vehicleId } = route.params;

    const [p1, setP1] = useState(false);
    const [p2, setP2] = useState(false);
    const [p3, setP3] = useState(false);
    const [p4, setP4] = useState(false);
    const [p5, setP5] = useState(false);

    const [isEditable, setisEditable] = useState(false); //Textinput
    const [isEditable2, setisEditable2] = useState(false); //Textinput
    const [isEditable3, setisEditable3] = useState(false); //Textinput
    const [isEditable4, setisEditable4] = useState(false); //Textinput
    const [isEditable5, setisEditable5] = useState(false); //Textinput
    const [editBtn, setEditBtn] = useState(false); //Textinput



    const [rentalEmail, onchangeRentalEmail] = useState(""); //Textinput
    const [confirmButton, setconfirmButton] = useState(false); //Textinput
    const [firstname, onChangeFirstname] = React.useState("");
    const [lastname, onChangeLastname] = React.useState("");
    const [Id, setId] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [deposit, setDeposit] = useState(0);//มัดจำ
    const [vehicle, setVehicle] = useState(0);//ยานพาหนะ
    const [insurance, setInsurance] = useState(0);//ประกัน
    const [fine, setFine] = useState(0);//ค่าปรับ
    const [other, setOther] = useState(0);//อื่นๆ
    const [beforeTax, setBeforeTax] = useState("0");//ก่อนภาษี
    const [tax, settax] = useState("0");//หลังภาษี
    const [total, setTotal] = useState("0");//รวมทั้งหมด
    //const [vId, onChangevId] = useState("");//รวมทั้งหมด

    const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));
    const [dates, setDates] = React.useState(new Date().toISOString().slice(0, 10));
    const [time, setTime] = React.useState(new Date(Date.now()).toISOString().slice(0, 5));
    const [dateDrop, setDateDrop] = React.useState(new Date().toISOString().slice(0, 10));
    const [timeDrop, setTimeDrop] = React.useState(new Date(Date.now()).toISOString().slice(0, 5));
    const [countDate, onChangecountDate] = React.useState("");

    const reset = () => {
        setBeforeTax(0)
        setDeposit(0),
            setFine(0),
            setOther(0),
            settax(0),
            setVehicle(0),
            setInsurance(0),
            setTotal(0)
    }//reset
    const deposit_edit = () => {
        setisEditable(!isEditable);
        setP1(true);
    }
    const deposit_can = () => {
        setisEditable(!isEditable);
        setP1(false);

    }
    const deposit_save = () => {
        setisEditable(!isEditable);
        setP1(false);
    };//มัดจำ

    const vehicle_edit = () => {
        setisEditable2(!isEditable2);
        setP2(true);
    }
    const vehicle_can = () => {
        setisEditable2(!isEditable2);
        setP2(false);

    }
    const vehicle_save = () => {
        setisEditable2(!isEditable2);
        setP2(false);
    };//ค่าเช่ายานพาหนะ

    const insurance_edit = () => {
        setisEditable3(!isEditable3);
        setP3(true);
    }
    const insurance_can = () => {
        setisEditable3(!isEditable3);
        setP3(false);

    }
    const insurance_save = () => {
        setisEditable3(!isEditable3);
        setP3(false);
    };//ค่าประกัน

    const fine_edit = () => {
        setisEditable4(!isEditable4);
        setP4(true);
    }
    const fine_can = () => {
        setisEditable4(!isEditable4);
        setP4(false);

    }
    const fine_save = () => {
        setisEditable4(!isEditable4);
        setP4(false);
    };//ค่าปรับ

    const other_edit = () => {
        setisEditable5(!isEditable5);
        setP5(true);
    }
    const other_can = () => {
        setisEditable5(!isEditable5);
        setP5(false);

    }
    const other_save = () => {
        setisEditable5(!isEditable5);
        setP5(false);
    };//ค่าอื่นๆ

    const hi = () => {
        setconfirmButton(true);
    };//ค่าอื่นๆ

    useEffect((id) => {
        getDocs(query(collection(db, "signup"), where('email', '==', userRenterEmail)))
            .then(docSnap => {
                let users = [];
                docSnap.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                });
                setId(users[0].id)
                onChangeFirstname(users[0].firstname);
                onChangeLastname(users[0].lastname);

                //console.log("Doc:", users[0].email);
                // console.log("Doc:", users[0].id);
            }).catch((error) => {
                // The write failed...
                alert(error);
            });
    }, [])

    // useEffect((id) => {
    //     getDocs(query(collection(db, "vehicleDetails", vehicleId))).then(docSnap => {
    //         let users = [];
    //         docSnap.forEach((doc) => {
    //             users.push({ ...doc.data(), id: doc.id })
    //         });
    //         setDeposit(docData.data().deposit)
    //         setVehicle(docData.data().vehicle)
    //         setInsurance(docData.data().insurance)
    //         setFine(docData.data().fine)
    //         setOther(docData.data().other)
    //         console.log("s", docData.data().deposit)
    //     }).catch((error) => {
    //         // The write failed...
    //         alert(error);
    //     });

    // }, [])
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
    useEffect((id) => {
        getDoc(doc(db, "vehicleDetails", vehicleId))
            .then(docData => {
                if (docData.exists()) {
                    console.log("s")
                    setDeposit(docData.data().deposit)
                    setVehicle(docData.data().vehicle)
                    setInsurance(docData.data().insurance)
                    setFine(docData.data().fine)
                    setOther(docData.data().other)
                    console.log("s", docData.data().deposit)
                }
            }).catch((error) => {
                //  The write failed...
                alert(error);
            });
    }, [])
    const [imageInvoice, setImageUser] = useState(null);//รูปUser

    useEffect(() => {
        if (Platform.OS !== 'web') {
            const { status } = ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                console.log('null')
            }
        }
    })

    const PickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        // console.log(result)
        if (!result.cancelled) {
            setImageUser(result.uri)
        }
    };
    /*const create = () => {

        addDoc(
            collection(db, "MakeInvoice"), {
            email: userRenterEmail,
            beforeTax: (parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle)).toFixed(2),
            tax: ((parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle)) * 0.07).toFixed(2),
            deposit: deposit,
            fine: fine,
            insurance: insurance,
            other: other,
            total: ((parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle)) * 0.07 + (parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle))).toFixed(2),
            vehicle: vehicle,
            confirm: true,
            editBtn: true,
        }
        )
            .then(() => {
                setconfirmButton(true);
                // Data saved successfully!
                alert('data submitted');

            }).catch((error) => {
                // The write failed...
                alert(error);
            });

    };*/
    // useEffect((id) => {
    //     getDocs(query(collection(db, "MakeInvoice"), where('renterEmail', '==', userRenterEmail)))
    //         .then(docSnap => {
    //             let users = [];
    //             docSnap.forEach((doc) => {
    //                 users.push({ ...doc.data(), id: doc.id })
    //             });
    //             setId(users[0].id)
    //             setconfirmButton(users[0].confirm);
    //             setEmail(users[0].email);
    //             setEditBtn(users[0].editBtn)
    //             setDeposit(users[0].deposit)
    //             setVehicle(users[0].vehicle)
    //             setInsurance(users[0].insurance)
    //             setFine(users[0].fine)
    //             setOther(users[0].other)
    //             setBeforeTax(users[0].beforeTax)
    //             settax(users[0].tax)
    //             setTotal(users[0].total)

    //             console.log("Doc:", users[0].email);
    //             console.log("Doc:", users[0].id);
    //         }).catch((error) => {
    //             // The write failed...
    //             // alert(error);
    //         });
    // }, [])

    useEffect((id) => {
        getDocs(query(collection(db, "location-time"), where('renterEmail', '==', userRenterEmail)))
            .then(docSnap => {
                let users = [];
                docSnap.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                });
                setDates(users[0].datePick)
                setDateDrop(users[0].dateDrop)
                setTime(users[0].timePick)
                setTimeDrop(users[0].timeDrop)
                onChangecountDate(parseInt(users[0].dateDrop.slice(8, 10)) - parseInt(users[0].datePick.slice(8, 10)))
                console.log(parseInt(users[0].dateDrop.slice(8, 10)) - parseInt(users[0].datePick.slice(8, 10)))
                console.log("Doc:", users[0].datePick);
                console.log("Doc:", users[0].id);
            }).catch((error) => {
                // The write failed...
                alert(error);
            });

    }, [])

    const update = () => {

        updateDoc(doc(db, "MakeInvoice", Id), {
            tax: ((parseInt(deposit) + parseInt(fine) + parseInt(insurance)
                + parseInt(other) + parseInt(vehicle)) * 0.07),
            beforeTax: parseInt(deposit) + parseInt(fine) + parseInt(insurance)
                + parseInt(other) + parseInt(vehicle),
            deposit: deposit,
            fine: fine,
            insurance: insurance,
            other: other,
            total: ((parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle)) * 0.07
                + (parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle))),
            vehicle: vehicle,

        }).then(() => {
            // Data saved successfully!

        }).catch((error) => {
            // The write failed...
            alert(error);
        });

    };//update
    // if (tax != newbeforeTax) {
    //     console.log("tax : ", tax);
    //     console.log("beforetax : ", newbeforeTax);
    //     setBeforeTax(newbeforeTax);

    // }
    // const get = () => {
    //     getDocs(query(collection(db, "MakeInvoice"), where('email', '==', userRenterEmail)))
    //         .then(docSnap => {
    //             let users = [];
    //             docSnap.forEach((doc) => {
    //                 users.push({ ...doc.data(), id: doc.id })
    //             });
    //             setBeforeTax(users[0].beforeTax)
    //             settax(users[0].tax)
    //             setTotal(users[0].total)
    //             alert(users[0].tax)

    //         }).catch((error) => {
    //             // The write failed...
    //             // alert(error);
    //         })
    // }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>

                <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center", paddingBottom: 20 }}>ใบแจ้งหนี้</Text>
                <Text>ชื่อ {firstname} นามสกุล  {lastname}
                    {"\n"}การเช่ายานพาหนะกำหนดระยะเวลา  {countDate} วัน
                    {"\n"}นับตั้งแต่วันที่ {dates} ถึงวันที่ {dateDrop}
                </Text>
            </View>
            <DataTable style={styles.view2}>
                <DataTable.Row style={styles.tableHeader}>
                    <DataTable.Cell style={{ paddingLeft: 42 }}>รายการ</DataTable.Cell>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }}>จำนวนเงิน (บาท)</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={styles.tableHeader}>
                    <DataTable.Cell>ค่ามัดจำ</DataTable.Cell>
                    <View style={styles.btn2}>

                        {confirmButton == true ? p1 == true ?
                            [
                                <TouchableOpacity >
                                    <Text style={styles.text4}
                                        onPress={deposit_can} >Cancel</Text>
                                </TouchableOpacity>
                                ,
                                <TouchableOpacity >
                                    <Text style={styles.text5}
                                        onPress={() => { deposit_save(); update(); }}>Save</Text>
                                </TouchableOpacity>
                            ] :
                            <TouchableOpacity  >
                                <Text style={styles.text3}
                                    onPress={deposit_edit}>          </Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: "white" }]}
                                editable={isEditable} value={deposit} onChangeText={text => setDeposit(text)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={styles.tableHeader}>
                    <DataTable.Cell>ค่าเช่ายานพาหนะ</DataTable.Cell>
                    <View style={styles.btn2}>
                        {confirmButton == true ? p2 == true ?
                            [
                                <TouchableOpacity >
                                    <Text style={styles.text4}
                                        onPress={vehicle_can}>Cancel</Text>
                                </TouchableOpacity>
                                ,
                                <TouchableOpacity >
                                    <Text style={styles.text5}
                                        onPress={() => { vehicle_save(); update(); }}>Save</Text>
                                </TouchableOpacity>
                            ] :
                            <TouchableOpacity  >
                                <Text style={styles.text3}
                                    onPress={vehicle_edit} >          </Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: "white" }]}
                                editable={isEditable} value={vehicle} onChangeText={text => setVehicle(text)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={styles.tableHeader}>
                    <DataTable.Cell>ค่าประกัน</DataTable.Cell>
                    <View style={styles.btn2}>
                        {confirmButton == true ? p3 == true ?
                            [
                                <TouchableOpacity  >
                                    <Text style={styles.text4}
                                        onPress={insurance_can}>Cancel</Text>
                                </TouchableOpacity>
                                ,
                                <TouchableOpacity >
                                    <Text style={styles.text5}
                                        onPress={() => { insurance_save(); update(); }}>Save</Text>
                                </TouchableOpacity>
                            ] :
                            <TouchableOpacity  >
                                <Text style={styles.text3}
                                    onPress={insurance_edit}>          </Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: "white" }]}
                                editable={isEditable} value={insurance} onChangeText={text => setInsurance(text)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={styles.tableHeader}>
                    <DataTable.Cell>ค่าปรับ ค่าเสียหาย</DataTable.Cell>
                    <View style={styles.btn2}>
                        {confirmButton == true ? p4 == true ?
                            [
                                <TouchableOpacity  >
                                    <Text style={styles.text4}
                                        onPress={fine_can}>Cancel</Text>
                                </TouchableOpacity>
                                ,
                                <TouchableOpacity >
                                    <Text style={styles.text5}
                                        onPress={() => { fine_save(); update(); }}>Save</Text>
                                </TouchableOpacity>
                            ] :
                            <TouchableOpacity  >
                                <Text style={styles.text3}
                                    onPress={fine_edit} >          </Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: "white" }]}
                                editable={isEditable} value={fine} onChangeText={text => setFine(text)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={styles.tableHeader}>
                    <DataTable.Cell>อื่น ๆ</DataTable.Cell>
                    <View style={styles.btn2}>
                        {confirmButton == true ? p5 == true ?
                            [
                                <TouchableOpacity  >
                                    <Text style={styles.text4}
                                        onPress={other_can}>Cancel</Text>
                                </TouchableOpacity>
                                ,
                                <TouchableOpacity >
                                    <Text style={styles.text5}
                                        onPress={() => { other_save(); update(); }}>Save</Text>
                                </TouchableOpacity>
                            ] :
                            <TouchableOpacity  >
                                <Text style={styles.text3}
                                    onPress={other_edit}   >          </Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>

                            <TextInput style={[styles.textinput, { backgroundColor: "white" }]}
                                editable={isEditable} value={other} onChangeText={text => setOther(text)} />

                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={[styles.tableHeader,]}>
                    <DataTable.Cell style={{ borderRightWidth: 2, paddingRight: 42.5 }}>เงินรวมก่อนภาษี</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: '' },]}
                                editable={isEditable} value={(parseInt(deposit) + parseInt(fine) + parseInt(insurance)
                                    + parseInt(other) + parseInt(vehicle)).toFixed(2)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={styles.tableHeader}>
                    <DataTable.Cell style={{ borderRightWidth: 2, paddingRight: 42.5 }}>ภาษีมูลค่าเพิ่ม 7 %</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: '' }]}
                                editable={isEditable} value={((parseInt(deposit) + parseInt(fine) + parseInt(insurance)
                                    + parseInt(other) + parseInt(vehicle)) * 0.07).toFixed(2)} onChangeText={text => settax(text)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={styles.tableHeader2}>
                    <DataTable.Cell style={{ borderRightWidth: 2, paddingRight: 42.5 }}>รวมสุทธิ</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: '' }]}
                                editable={isEditable} value={((parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle)) * 0.07
                                    + (parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle))).toFixed(2)} onChangeText={text => setTotal(text)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>


            </DataTable>
            <View style={styles.view3}>
                <View style={{ width: 120, height: 50, borderRadius: 40, marginLeft: 15, marginBottom: 15, padding: 1, backgroundColor: "#FBE0AB", alignSelf: "flex-start" }}>
                    <Text style={[, { marginBottom: 15, alignContent: "center", alignItems: "center", textAlign: "center", marginTop: 5 }]}>ยืนยันตัวตน <FontAwesome5 name="user-circle" size={22} color="black" /></Text>
                </View>
                <Text style={{ marginLeft: 15, fontWeight: "bold", marginBottom: 15 }}>แนบสลิปธนาคาร </Text>
                <View style={{ borderWidth: 1, width: 200, height: 100, borderRadius: 15 }}>
                    {imageInvoice && <Image source={{ uri: imageInvoice }} style={{ width: 200, height: 100, borderRadius: 15 }} />}
                </View>
                <TouchableOpacity style={{
                    textAlign: "center", padding: 10, borderRadius: 20, margin: 10, width: 230, backgroundColor: "#D58C00", shadowColor: "black", marginTop: 20, marginBottom: 20,
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 16.00,

                    elevation: 14
                }}

                    onPress={() => {
                        PickImage()
                    }}>
                    <Text style={[styles.but, { textAlign: "center" }]}>เพิ่มรูปภาพ</Text>
                </TouchableOpacity>
            </View>

            {/* <Picker>
                    <Picker.Item label="samad" value ="จ่ายเงินแล้ว"/>
                    <Picker.Item label="samad" value ="ยังไม่ได้จ่ายเงิน"/>
                </Picker> */}


            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", textAlign: "center", marginBottom: 20 }}>
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

                    onPress={() =>
                        navigation.navigate('MAIN', { Email: email })
                    }
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

                        navigation.navigate('MAIN', { Email: email });
                        addDoc(collection(db, "contract"), {
                            invoicePic: ImagePicker,
                            payInvoice: "wait"

                        })
                    }}>
                    <Text style={styles.but}>Confirm</Text>
                </TouchableOpacity>
            </View>

        </ScrollView >

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2D2B29",
        padding: 15, paddingTop: 40
    },
    view: {

        // height:1490,
        borderRadius: 20,

        backgroundColor: "#F3C623",

        padding: 30, marginBottom: 20
    }, view2: {
        width: 350,
        // height:1490,
        borderRadius: 30,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginBottom: 20
    },
    view3: {
        backgroundColor: "#F3C623", alignItems: "center",
        // height:1490,
        borderRadius: 30,
        width: 350,
        alignSelf: "center",
        marginBottom: 20
    },
    textinput: {
        borderRadius: 360,
        borderWidth: 1,
        height: 30,
        width: 100,
        textAlign: "center",
    },
    textinput2: {
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
    },
    btn1: {
        color: "black",
        fontWeight: "bold",
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 70,
        paddingTop: 30,
        paddingBottom: 50
    },
    btn2: {
        justifyContent: "center",
        marginRight: 3
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        backgroundColor: "#E75656",
        borderRadius: 4,
        padding: 10
    },
    text2: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        backgroundColor: "#33DB18",
        borderRadius: 4,
        padding: 10
    },

    tableHeader: {
        borderWidth: 1,
        borderRightWidth: 1
    },
    tableHeader2: {
        borderWidth: 1,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    }
});

export default MakeInvoice;
