import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import { RadioButton } from 'react-native-paper';
// import DatePicker from "react-datepicker";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
// import "react-datepicker/dist/react-datepicker.css";
//import CheckBox from '@react-native-community/checkbox';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Checkbox } from 'react-native-paper';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { NavigationContainer } from "@react-navigation/native";
import signIn from '../page/signIn'
//import RadioButtonRN from 'radio-buttons-react-native';
const UselessTextInput = ({ route, navigation }) => {

    const [username, onChangeUsername] = React.useState("");
    const [newPassword, onChangeNewPassword] = React.useState("");

    const [password, onChangePassword] = React.useState("");
    const [checked, setChecked] = useState(false)

    return (
        <ScrollView style={styles.container}>


            <Image style={styles.pic2}
                source={require("../assets/carbg.png")}

            ></Image>
            <Image style={styles.pic3}
                source={require("../assets/carbg2.png")}

            ></Image>
            <View style={styles.box}>
                {/* <Image style={styles.pic1}
                    source={require("../assets/mrvehicle_logo.png")}

                ></Image> */}
                {/* <Text style={{ textAlign: "center", marginTop: 120 }}>----------------------------------------------------------------------</Text> */}
                <Text style={styles.txt}>New Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangePassword(text)}
                    value={password}
                    placeholder="รหัสผ่านใหม่"
                    secureTextEntry={true}
                />
                <Text style={{ marginLeft: 15, color: "red" }}>
                    {(password.length < 8) && (password.length >= 1) ? "รหัสผ่านต้องมีอย่างน้อย 8 ตัว" : ""}
                </Text>
                <Text style={styles.txt}>Confirm Password</Text>
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


                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity
                        style={{ textAlign: "center", padding: 10, borderRadius: 20, margin: 10, width: 150, backgroundColor: "#F1887C" }}

                        onPress={() => {
                            navigation.navigate("FORGOT PASSWORD");
                        }}
                    >
                        <Text style={styles.but}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ textAlign: "center", alignItems: "center", padding: 10, borderRadius: 20, margin: 10, width: 150, backgroundColor: "#3EB8E9" }}

                        onPress={() => {
                            navigation.navigate("LOG-IN");

                            alert("Change password success")
                        }}>
                        <Text style={styles.but}>Save</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 90,
        //marginTop: 50,

        backgroundColor: "rgba(66,233,133,0.45)"

    }, pic1: { width: 300, height: 220, zIndex: 1, position: "absolute", top: -100, left: 45, },
    pic2: { width: 300, height: 260, zIndex: -1, position: "absolute", left: -60, bottom: 120, opacity: 0.3 },
    pic3: { width: 350, height: 280, zIndex: -1, position: "absolute", right: -20, top: 290, opacity: 0.3 },
    box: {
        width: 380, height: 350,
        backgroundColor: "rgba(255,255,255,0.75)", margin: 15, padding: 20, justifyContent: "center"
        , borderRadius: 20,
    },
    input: {
        height: 40,
        margin: 15,

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
    }, but: { justifyContent: "center", textAlign: "center" },
    head: {
        fontSize: 33,
        fontWeight: "600", textAlign: "center", paddingTop: 30
    },
    txt: { fontSize: 16, fontWeight: "500" },
    txt2: { fontSize: 14, fontWeight: "500" }
});

export default UselessTextInput;