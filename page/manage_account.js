import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, TouchableOpacity, Image, ScrollView } from "react-native";
import { RadioButton } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import DateTimePickerModal from "react-native-modal-datetime-picker";

//import RadioButtonRN from 'radio-buttons-react-native';
const UselessTextInput = ({ route, navigation }) => {
    const [firstname, onChangeFirstname] = React.useState("");
    const [lastname, onChangeLastname] = React.useState("");
    const [passport, onChangePassport] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [address, onChangeAddress] = React.useState("");
    const [username, onChangeUsername] = React.useState("");
    const [numBank, onChangenumBank] = React.useState("");
    const [nameBank, onChangenameBank] = React.useState("");
    const [tel, onChangeTel] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [newPassword, onChangeNewPassword] = React.useState("");
    //const [startDate, setStartDate] = useState(new Date());
    const [checked, radioCheck] = React.useState("rental");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = React.useState(new Date());
    const [num, onChangeNum] = React.useState("");
    const [street, onChangeStreet] = React.useState("");
    const [tumbon, onchangeTumbon] = React.useState("");
    const [amphoe, onChangeAmphoe] = React.useState("");
    const [province, onchangeProvince] = React.useState("");
    const [postal, onChangePostal] = React.useState("");
    const [check, onCheck] = React.useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDate(date);
        hideDatePicker();
    };
    return (
        <ScrollView style={styles.container}>

            <Image style={styles.pic1}
                source={require("../assets/carbg.png")}

            ></Image>
            <Image style={styles.pic2}
                source={require("../assets/carbg.png")}

            ></Image>
            <Image style={styles.pic3}
                source={require("../assets/carbg2.png")}

            ></Image>

            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeFirstname(text)}
                placeholder="ชื่อจริง"
                value={firstname} />
            {/* <Text>{firstname}</Text> */}
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeLastname(text)}
                placeholder="นามสกุล"
                value={lastname}
            />

            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangePassport(text)}
                value={passport}
                placeholder="เลขบัตรประชาชน 13 หลัก"
            />

            {(passport.length < 13) && (passport.length > 0) ? <Text style={{ marginLeft: 15, color: "red" }}>เลขบัตรประชาชนต้องมี 13 หลัก</Text> : ""}

            <Text style={{ margin: 15 }}>วันเกิด(MM/DD/YYYY) </Text>
            <TouchableOpacity style={styles.DatePicker} onPress={showDatePicker}>
                <Text style={styles.but}>{date.toLocaleDateString()}</Text>
                <AntDesign name="calendar" style={{ position: "absolute", right: 30, top: 5 }} size={24} color="black" />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeEmail(text)}
                value={email}
                placeholder="อีเมล"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeTel(text)}
                value={tel}
                placeholder="เบอร์โทร"
            />
            <Text style={{ margin: 15 }}>ที่อยู่ </Text>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    style={styles.inputbox}
                    placeholder="บ้านเลขที่"
                    onChangeText={(text) => onChangeAddress(text)}
                    value={num}

                />
                <TextInput
                    style={styles.inputbox}
                    placeholder="ถนน"
                    onChangeText={(text) => onChangeAddress(text)}
                    value={street}

                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    style={styles.inputbox}
                    placeholder="ตำบล"
                    onChangeText={(text) => onChangeAddress(text)}
                    value={tumbon}

                />
                <TextInput
                    style={styles.inputbox}
                    placeholder="อำเภอ"
                    onChangeText={(text) => onChangeAddress(text)}
                    value={amphoe}

                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    style={styles.inputbox}
                    placeholder="จังหวัด"
                    onChangeText={(text) => onChangeAddress(text)}
                    value={province}

                />
                <TextInput
                    style={styles.inputbox}
                    placeholder="รหัสไปรษณีย์"
                    onChangeText={(text) => onChangeAddress(text)}
                    value={postal}

                />
            </View>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeUsername(text)}
                value={username}
                placeholder="ชื่อผู้ใช้ (username)"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangePassword(text)}
                value={password}
                placeholder="รหัสผ่าน"
                secureTextEntry={true}
            />


            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                {check == true ?
                    [<TouchableOpacity
                        style={{ textAlign: "center", padding: 10, borderRadius: 20, margin: 20, width: 150, backgroundColor: "#F1887C" }}

                        onPress={() => {
                            // navigation.navigate("LOG-IN");
                            onCheck(false)
                        }}
                    >
                        <Text style={styles.but}>Cancel</Text>
                    </TouchableOpacity>,
                    <TouchableOpacity
                        style={{ textAlign: "center", padding: 10, borderRadius: 20, margin: 20, width: 150, backgroundColor: "#F1887C" }}

                        onPress={() => {
                            navigation.navigate("CONFIRM CHANGE");
                            onCheck(false)
                        }}
                    >
                        <Text style={styles.but}>Save</Text>
                    </TouchableOpacity>]
                    :
                    <View style={{ justifyContent: "center" }} >
                        <TouchableOpacity
                            style={{ textAlign: "center", padding: 10, borderRadius: 20, margin: 20, width: 150, backgroundColor: "#3EB8E9" }}

                            onPress={(text) => { onCheck(true) }}>
                            <Text style={styles.but}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                }

            </View>
        </ScrollView >
        // justifyContent
    );
};

const styles = StyleSheet.create({
    xx: { color: "red" },
    container: {
        padding: 10,
        backgroundColor: "rgba(213,250,244,0.45)"

    }, pic1: { width: 280, height: 200, zIndex: -1, position: "absolute", left: -60, top: 50, opacity: 0.3 },
    pic2: { width: 300, height: 260, zIndex: -1, position: "absolute", left: -60, bottom: 120, opacity: 0.3 },
    pic3: { width: 350, height: 280, zIndex: -1, position: "absolute", right: -20, top: 290, opacity: 0.3 },

    input: {
        height: 40,
        margin: 12,

        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white"

    }, inputbox: {
        height: 40,
        margin: 12,
        width: 170
        ,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white"
    }, DatePicker: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white", flexDirection: "row"
    }, but: { justifyContent: "center", textAlign: "center", }
});

export default UselessTextInput;