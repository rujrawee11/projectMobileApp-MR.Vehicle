import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons';

const UselessTextInput = ({ route, navigation }) => {

    const [username, onChangeUsername] = React.useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [isDateDropVisible, setDateDropVisibility] = useState(false);
    const [isTimeDropVisible, setTimeDropVisibility] = useState(false);
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(new Date());
    const [dateDrop, setDateDrop] = React.useState(new Date());
    const [timeDrop, setTimeDrop] = React.useState(new Date());
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    const showDateDrop = () => {
        setDateDropVisibility(true);
    };
    const showTimeDrop = () => {
        setTimeDropVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        setDate(date);
        hideDatePicker();
    };
    const timehandleConfirm = (time) => {
        //  console.warn("A time has been picked: ", time);
        setTime(time);
        //   alert(time)
        hideDatePicker();
    };
    const handleDropConfirm = (dateDrop) => {
        //  console.warn("A date has been picked: ", dateDrop);
        setDateDrop(dateDrop);
        hideDatePicker();
    };
    const timeDrophandleConfirm = (timeDrop) => {
        //  console.warn("A time has been picked: ", timeDrop);
        setTimeDrop(timeDrop);
        //   alert(time)
        hideDatePicker();
    };
    return (
        <ScrollView style={styles.container}>
            <View>
                <DropDownPicker style={styles.dropdown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>
            {/* <Image style={styles.pic2}
                source={require("../assets/carbg.png")}

            ></Image>
            <Image style={styles.pic3}
                source={require("../assets/carbg2.png")}

            ></Image> */}

            <Text style={{ margin: 15 }}>Location </Text>
            <View style={{ flexDirection: "row" }}>
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
                <TouchableOpacity style={styles.timePicker} onPress={showTimePicker}>
                    <Text style={styles.but}>{time.toLocaleTimeString()}</Text>
                    {/* <AntDesign name="calendar" style={{ position: "absolute", right: 30, top: 5 }} size={24} color="black" /> */}
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={timehandleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.DatePicker} onPress={showDateDrop}>
                    <Text style={styles.but}>{dateDrop.toLocaleDateString()}</Text>
                    <AntDesign name="calendar" style={{ position: "absolute", right: 30, top: 5 }} size={24} color="black" />
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDateDropVisible}
                    mode="date"
                    onConfirm={handleDropConfirm}
                    onCancel={hideDatePicker}
                />
                <TouchableOpacity style={styles.timePicker} onPress={showTimeDrop}>
                    <Text style={styles.but}>{timeDrop.toLocaleTimeString()}</Text>
                    {/* <AntDesign name="calendar" style={{ position: "absolute", right: 30, top: 5 }} size={24} color="black" /> */}
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isTimeDropVisible}
                    mode="time"
                    onConfirm={timeDrophandleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>

            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    style={{ textAlign: "center", padding: 10, borderRadius: 20, margin: 15, width: 150, backgroundColor: "#9BCED1" }}
                    onPress={() => {

                        navigation.navigate("NEW PASSWORD");

                    }}
                >
                    <Text style={[styles.but, styles.txt]}>NEXT</Text>
                </TouchableOpacity>


            </View>
            {/* <Image style={styles.pic3}
                source={require("../assets/carbg2.png")}
            ></Image> */}
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={styles.bt1}>
                    <Image style={styles.pic1}
                        source={require("../assets/manage_account.png")}

                    ></Image></TouchableOpacity>
                <TouchableOpacity style={styles.bt1}>
                    <Image style={styles.pic2}
                        source={require("../assets/contract.png")}

                    ></Image></TouchableOpacity>
                <TouchableOpacity style={styles.bt1}>
                    <Image style={styles.pic3}
                        source={require("../assets/invoice.png")}

                    ></Image></TouchableOpacity>
            </View>
        </ScrollView >

    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        //marginTop: 50,

        backgroundColor: "rgba(66,233,133,0.45)"

    },
    pic1: { width: 108, height: 108 },
    pic2: { width: 80, height: 80, zIndex: 1, margin: 13 },
    pic3: { width: 80, height: 80, zIndex: 1, margin: 13 },
    box: {
        width: 380, height: 250,
        backgroundColor: "rgba(255,255,255,0.75)", margin: 15, padding: 30, justifyContent: "center"
        , borderRadius: 20,
    },
    dropdown: {
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white", width: 300

    },
    input: {
        height: 40,
        margin: 15,

        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white"

    },
    inputbox: {
        height: 80,
        margin: 12,

        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white"
    },
    DatePicker: {
        margin: 10, height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white", width: 200
    },
    timePicker: {
        margin: 12, height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white", width: 150
    },
    but: { justifyContent: "center", textAlign: "center" },
    head: {
        fontSize: 33,
        fontWeight: "600", textAlign: "center", paddingTop: 30
    },
    txt: { fontSize: 16, fontWeight: "500" },
    txt2: { fontSize: 14, fontWeight: "500" },
    bt1: {
        marginTop: 30,
        margin: 14,
        borderWidth: 1,
        //padding: 5,
        borderRadius: 20
        , backgroundColor: "white", width: 110, height: 110
    }
});

export default UselessTextInput;