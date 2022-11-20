import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ScrollView, } from "react-native-gesture-handler";
import { DataTable } from 'react-native-paper';
import Dropdown from 'react-dropdown';
import { collection, doc, addDoc, updateDoc, getDoc, onSnapshot, getDocs, query, where } from "firebase/firestore";
import { db } from "../database/configdb"

const MakeInvoice = ({ route, navigation }) => {
    const { RentalEmail, userRenterEmail, uID, vehicleId } = route.params;

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

                console.log("Doc:", users[0].email);
                console.log("Doc:", users[0].id);
            }).catch((error) => {
                // The write failed...
                alert(error);
            });
    }, [])
    /*const create = () => {

        addDoc(
            collection(db, "MakeInvoice"), {
            email: Emails,
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
    useEffect((id) => {
        getDoc(doc(db, "vehicleDetails", vehicleId))
            .then(docData => {
                if (docData.exists()) {
                    setId(docData.data().id)
                    setconfirmButton(docData.data().confirm);
                    setEmail(docData.data().email);
                    setEditBtn(docData.data().editBtn)
                    setDeposit(docData.data().deposit)
                    setVehicle(docData.data().vehicle)
                    setInsurance(docData.data().insurance)
                    setFine(docData.data().fine)
                    setOther(docData.data().other)
                    setBeforeTax(docData.data().beforeTax)
                    settax(docData.data().tax)
                    setTotal(docData.data().total)
                }
            }).catch((error) => {
                // The write failed...
                alert(error);
            });
    }, [])
    // useEffect((id) => {
    //     getDocs(query(collection(db, "vehicleDetails", vehicleId)))
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
    useEffect((id) => {
        getDocs(query(collection(db, "contract"), where('renterEmail', '==', userRenterEmail)))
            .then(docSnap => {
                let users = [];
                docSnap.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                });
                setconfirmButton(users[0].confirmpay)
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
    const get = () => {
        getDocs(query(collection(db, "MakeInvoice"), where('email', '==', userRenterEmail)))
            .then(docSnap => {
                let users = [];
                docSnap.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id })
                });
                setBeforeTax(users[0].beforeTax)
                settax(users[0].tax)
                setTotal(users[0].total)
                alert(users[0].tax)

            }).catch((error) => {
                // The write failed...
                // alert(error);
            })
    }

    const beforeTaxChange = (beforeTax) => {
        setBeforeTax(beforeTax);
        alert(beforeTax)

    }
    const [itemsc, setItemsc] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);


    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center", padding: 20 }}>ใบแจ้งหนี้</Text>

            <DataTable style={styles.view}>
                {/* <Text>ชื่อ <View><TextInput style={[styles.textinput2, { width: 90 }]} /></View>
                    นามสกุล <View><TextInput style={[styles.textinput2, { width: 90 }]} /></View>
                    {"\n"}การเช่ายานพาหนะกำหนดระยะเวลา <View><TextInput style={[styles.textinput2, { width: 60 }]} /></View> วัน
                    {"\n"}  นับตั้งแต่วันที่<View><TextInput style={[styles.textinput2, { width: 35 }]} /></View> 
                    เดือน<View><TextInput style={[styles.textinput2, { width: 70 }]} /></View>
                    พ.ศ.<View><TextInput style={[styles.textinput2, { width: 40 }]} /></View>
                    {"\n"}ถึงวันที่<View><TextInput style={[styles.textinput2, { width: 35 }]} /></View> 
                    เดือน<View><TextInput style={[styles.textinput2, { width: 70 }]} /></View>
                    พ.ศ.<View><TextInput style={[styles.textinput2, { width: 40 }]} /></View>
                </Text> */}
                <Text>ชื่อ {firstname} นามสกุล  {lastname}
                    {"\n"}การเช่ายานพาหนะกำหนดระยะเวลา  {countDate}วัน
                    {"\n"}นับตั้งแต่วันที่ {dates} ถึงวันที่ {dateDrop}
                </Text>

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
                                    onPress={deposit_edit}>Edit</Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, confirmButton ? { backgroundColor: "#d8d8d8" } : { backgroundColor: "white" }]}
                                value={deposit} onChangeText={text => setDeposit(text)} />
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
                                    onPress={vehicle_edit} >Edit</Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, confirmButton ? editBtn ? [{ backgroundColor: "#d8d8d8" }, isEditable] : [{ backgroundColor: "white" }, isEditable] : isEditable]}
                                value={vehicle} onChangeText={text => setVehicle(text)} />
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
                                    onPress={insurance_edit}>Edit</Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, confirmButton ? { backgroundColor: "#d8d8d8" } : { backgroundColor: "white" }]}
                                value={insurance} onChangeText={text => setInsurance(text)} />
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
                                    onPress={fine_edit} >Edit</Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, confirmButton ? { backgroundColor: "#d8d8d8" } : { backgroundColor: "white" }]}
                                value={fine} onChangeText={text => setFine(text)} />
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
                                    onPress={other_edit}   >Edit</Text>
                            </TouchableOpacity> : ""
                        }
                    </View>
                    <DataTable.Cell style={{ borderLeftWidth: 2, justifyContent: "flex-end" }} >
                        <View>

                            <TextInput style={[styles.textinput, confirmButton ? { backgroundColor: "#d8d8d8" } : { backgroundColor: "white" }]}
                                value={other} onChangeText={text => setOther(text)} />

                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={[styles.tableHeader,]}>
                    <DataTable.Cell style={{ borderRightWidth: 2, paddingRight: 42.5 }}>เงินรวมก่อนภาษี</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: "flex-end" }} >
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: '#d8d8d8' },]}
                                editable={isEditable} value={(parseInt(deposit) + parseInt(fine) + parseInt(insurance)
                                    + parseInt(other) + parseInt(vehicle)).toFixed(2)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={styles.tableHeader}>
                    <DataTable.Cell style={{ borderRightWidth: 2, paddingRight: 42.5 }}>ภาษีมูลค่าเพิ่ม 7 %</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: '#d8d8d8' }]}
                                editable={isEditable} value={((parseInt(deposit) + parseInt(fine) + parseInt(insurance)
                                    + parseInt(other) + parseInt(vehicle)) * 0.07).toFixed(2)} onChangeText={text => settax(text)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row style={styles.tableHeader2}>
                    <DataTable.Cell style={{ borderRightWidth: 2, paddingRight: 42.5 }}>รวมสุทธิ</DataTable.Cell>
                    <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                        <View>
                            <TextInput style={[styles.textinput, { backgroundColor: '#d8d8d8' }]}
                                editable={isEditable} value={((parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle)) * 0.07
                                    + (parseInt(deposit) + parseInt(fine) + parseInt(insurance) + parseInt(other) + parseInt(vehicle))).toFixed(2)} onChangeText={text => setTotal(text)} />
                        </View>
                    </DataTable.Cell>
                </DataTable.Row>


                {/* <Picker>
                    <Picker.Item label="samad" value ="จ่ายเงินแล้ว"/>
                    <Picker.Item label="samad" value ="ยังไม่ได้จ่ายเงิน"/>
                </Picker> */}

            </DataTable>

            <View style={styles.btn1}>
                {confirmButton == true ?
                    "" : <TouchableOpacity >
                        <Text style={styles.text} onPress={reset}>Cancel</Text>
                    </TouchableOpacity>

                }
                {confirmButton == true ?
                    "" : <TouchableOpacity >
                        <Text style={styles.text2} onPress={"create"}>Confirm</Text>
                    </TouchableOpacity>

                }
            </View>
        </ScrollView >

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CCE1F4",
        padding: 15,
    },
    view: {
        borderRadius: 15,
        backgroundColor: "#ffffff",
        alignSelf: "center",
        padding: 10
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
    text3: {
        fontSize: 14,
        // lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        backgroundColor: "#F29946",
        borderRadius: 360,
        padding: 7,
    },
    text4: {
        fontSize: 10,
        // lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        backgroundColor: "#E75656",
        borderRadius: 360,
        padding: 3,
        marginBottom: 3,
        marginTop: 2
    },
    text5: {
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        backgroundColor: "#33DB18",
        borderRadius: 360,
        padding: 3,
        marginBottom: 3,
        textAlign: "center"
    },
    tableHeader: {
        borderWidth: 2,
    },
    tableHeader2: {
        borderWidth: 2,
        borderBottomColor: "black",
        borderBottomWidth: 2,
    }
});

export default MakeInvoice;
