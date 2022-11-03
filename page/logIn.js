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
                <Image style={styles.pic1}
                    source={require("../assets/mrvehicle_logo.png")}

                ></Image>
                <Text style={{ textAlign: "center", marginTop: 120 }}>----------------------------------------------------------------------</Text>
                <Text style={styles.txt}>Username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeUsername(text)}
                    value={username}
                    placeholder="Username"
                />
                <Text style={styles.txt}>Password</Text>
                {checked == true ? <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangePassword(text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={false}
                /> : <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangePassword(text)}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                />}
                <View style={{ flexDirection: "row" }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />

                    <Text
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        style={[styles.txt2, { marginTop: 8 }]} >SHOW PASSWORD</Text>
                    <Text style={[styles.txt2, { marginTop: 8, marginLeft: 20, textAlign: "right", color: "blue", textDecorationLine: "underline" }]}
                        onPress={() => {
                            navigation.navigate("FORGOT PASSWORD");
                        }}>FORGOT PASSWORD?</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        style={{ textAlign: "center", padding: 10, borderRadius: 20, margin: 15, width: 150, backgroundColor: "#9BCED1" }}

                        onPress={() => { alert("cancel") }}
                    >
                        <Text style={[styles.but, styles.txt]}>LOG-IN</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: "center" }}>----------------------------------------------------------------------</Text>

                    <TouchableOpacity
                        style={{ textAlign: "center", alignItems: "center", padding: 10, borderRadius: 20, margin: 15, width: 150, backgroundColor: "#11DCB7" }}
                        onPress={() => {
                            navigation.navigate("SIGN-UP");
                        }}
                    // onPress={() => { alert("confirm") }}
                    >
                        <Text style={[styles.but, styles.txt]}>SIGN-UP</Text>
                    </TouchableOpacity>
                </View></View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        //marginTop: 50,

        backgroundColor: "rgba(66,233,133,0.45)"

    }, pic1: { width: 300, height: 220, zIndex: 1, position: "absolute", top: -100, left: 45, },
    pic2: { width: 300, height: 260, zIndex: -1, position: "absolute", left: -60, bottom: 120, opacity: 0.3 },
    pic3: { width: 350, height: 280, zIndex: -1, position: "absolute", right: -20, top: 290, opacity: 0.3 },
    box: {
        width: 380, height: 520,
        backgroundColor: "rgba(255,255,255,0.75)", margin: 15, padding: 30, justifyContent: "center"
        , borderRadius: 20
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