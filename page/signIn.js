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
            <View style={{ flexDirection: "row", flex: 12, margin: 20, justifyContent: "center" }}>
                <RadioButton style={{ margin: 5 }}
                    value="rental"

                    status={checked === 'rental' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        radioCheck("rental");
                        console.log(checked);
                    }}
                />
                <Text
                    onPress={() => {
                        radioCheck("rental");

                    }}
                    style={{ margin: 5 }}>ผู้ให้เช่ายานพาหนะ</Text>

                <RadioButton style={{}}
                    value="renter"

                    status={checked === 'renter' ? 'checked' : 'unchecked'}
                    onPress={() => {
                        radioCheck("renter");
                        console.log(checked);
                    }}
                />
                <Text
                    onPress={() => {
                        radioCheck("renter");

                    }}
                    style={{ margin: 5 }}>ผู้เช่ายานพาหนะ</Text>
            </View>
            {/* {checked === "rental" ?
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeFirstname}
                    placeholder="First Name"
                    value={firstname}
                /> : ""} */}
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
            <Text style={{ marginLeft: 15, color: "red" }}>
                {(passport.length < 13) && (passport.length > 0) ? "เลขบัตรประชาชนต้องมี 13 หลัก" : ""}
                {/* <Text>{passport.length}</Text> */}
            </Text>
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

            <TextInput
                style={styles.inputbox}
                multiline
                numberOfLines={4}
                placeholder="ที่อยู่"
                onChangeText={(text) => onChangeAddress(text)}
                value={address}

            />
            {/* fontSize */}
            {checked === "rental" ?
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangenumBank(text)}
                    value={numBank}
                    placeholder="เลขบัญชีธนาคาร"
                /> : ""}
            {checked === "rental" ?
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangenameBank(text)}
                    value={nameBank}
                    placeholder="ชื่อธนาคาร"
                /> : ""}
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
            <Text style={{ marginLeft: 15, color: "red" }}>
                {(password.length < 8) && (password.length >= 1) ? "รหัสผ่านต้องมีอย่างน้อย 8 ตัว" : ""}
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeNewPassword(text)}
                value={newPassword}
                placeholder="ยืนยันรหัสผ่าน"
                secureTextEntry={true}
            />
            <Text style={{ marginLeft: 15, color: "red" }}>
                {(password === newPassword) || ((newPassword.length < 2) && (password.length <= 8)) ? "" : "รหัสผ่านไม่ตรงกัน"}
            </Text>

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={{ textAlign: "center", padding: 10, borderRadius: 20, margin: 20, width: 150, backgroundColor: "#F1887C" }}

                    onPress={() => {
                        navigation.navigate("LOG-IN");
                    }}
                >
                    <Text style={styles.but}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ textAlign: "center", alignItems: "center", padding: 10, borderRadius: 20, margin: 20, width: 150, backgroundColor: "#3EB8E9" }}

                    onPress={() => { alert("confirm") }}>
                    <Text style={styles.but}>Sign-up</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        // justifyContent
    );
};

const styles = StyleSheet.create({
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
        height: 80,
        margin: 12,

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