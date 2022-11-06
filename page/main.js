import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const UselessTextInput = ({ route, navigation }) => {

    const [username, onChangeUsername] = React.useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const [openc, setOpenc] = useState(false);
    const [valuec, setValuec] = useState("");
    const [itemsc, setItemsc] = useState([
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
    const [p1, setp1] = React.useState(false);
    const [p2, setp2] = React.useState(false);
    const [d1, setd1] = React.useState(false);
    const [d2, setd2] = React.useState(false);
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
        setp1(true)
        hideDatePicker();
    };
    const timehandleConfirm = (time) => {
        //  console.warn("A time has been picked: ", time);
        setTime(time);
        setp2(true)
        //   alert(time)
        hideDatePicker();
    };
    const handleDropConfirm = (dateDrop) => {
        //  console.warn("A date has been picked: ", dateDrop);
        setDateDrop(dateDrop);
        setd1(true)
        hideDatePicker();
    };
    const timeDrophandleConfirm = (timeDrop) => {
        //  console.warn("A time has been picked: ", timeDrop);
        setTimeDrop(timeDrop);
        setd2(true)
        //   alert(time)
        hideDatePicker();
    };
    return (
        <View style={styles.container}>
            <Text style={{ margin: 15, fontSize: 16, fontWeight: "500" }}>Location </Text>

            <View>
                <DropDownPicker style={[styles.dropdown, { zIndex: 2 }]}
                    placeholder="Pick province"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
            </View>
            {value == "" ?
                ""
                :
                <View>
                    <DropDownPicker style={[styles.dropdown, { zIndex: 1 }]}
                        placeholder="Pick location"
                        open={openc}
                        value={valuec}
                        items={itemsc}
                        setOpen={setOpenc}
                        setValue={setValuec}
                        setItems={setItemsc}
                    />
                </View>}

            {/* <Image style={styles.pic2}
                source={require("../assets/carbg.png")}

            ></Image>
            <Image style={styles.pic3}
                source={require("../assets/carbg2.png")}

            ></Image> */}

            <View style={{ flexDirection: "row" }}>
                {p1 == true ? <TouchableOpacity style={styles.DatePicker} onPress={showDatePicker}>
                    <Text style={styles.but}>{date.toLocaleDateString()}</Text>
                    <AntDesign name="calendar" style={{ position: "absolute", right: 10, top: 5 }} size={24} color="black" />
                </TouchableOpacity> : <TouchableOpacity style={styles.DatePicker} onPress={showDatePicker}>
                    <Text style={styles.but}>Pick-up Date</Text>
                    <AntDesign name="calendar" style={{ position: "absolute", right: 10, top: 5 }} size={24} color="black" />
                </TouchableOpacity>
                }

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                {p2 == true ?
                    <TouchableOpacity style={styles.timePicker} onPress={showTimePicker}>
                        <Text style={styles.but}>{time.toLocaleTimeString()}</Text>
                        <Ionicons name="time-outline" style={{ position: "absolute", right: 10, top: 5 }} size={24} color="black" />
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.timePicker} onPress={showTimePicker}>
                        <Text style={styles.but}>Pick-up Time</Text>
                        <Ionicons name="time-outline" style={{ position: "absolute", right: 10, top: 5 }} size={24} color="black" />
                    </TouchableOpacity>}
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={timehandleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <View style={{ flexDirection: "row" }}>
                {d1 == true ?
                    <TouchableOpacity style={styles.DatePicker} onPress={showDateDrop}>
                        <Text style={styles.but}>{dateDrop.toLocaleDateString()}</Text>
                        <AntDesign name="calendar" style={{ position: "absolute", right: 10, top: 5 }} size={24} color="black" />
                    </TouchableOpacity> : <TouchableOpacity style={styles.DatePicker} onPress={showDateDrop}>
                        <Text style={styles.but}>Drop-off Date</Text>
                        <AntDesign name="calendar" style={{ position: "absolute", right: 10, top: 5 }} size={24} color="black" />
                    </TouchableOpacity>}
                <DateTimePickerModal
                    isVisible={isDateDropVisible}
                    mode="date"
                    onConfirm={handleDropConfirm}
                    onCancel={hideDatePicker}
                />
                {d2 == true ?
                    <TouchableOpacity style={styles.timePicker} onPress={showTimeDrop}>
                        <Text style={styles.but}>{timeDrop.toLocaleTimeString()}</Text>
                        <Ionicons name="time-outline" style={{ position: "absolute", right: 10, top: 5 }} size={24} color="black" />
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.timePicker} onPress={showTimeDrop}>
                        <Text style={styles.but}>Drop-off Time</Text>
                        <Ionicons name="time-outline" style={{ position: "absolute", right: 10, top: 5 }} size={24} color="black" />
                    </TouchableOpacity>}
                <DateTimePickerModal
                    isVisible={isTimeDropVisible}
                    mode="time"
                    onConfirm={timeDrophandleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>

            <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity
                    style={{ padding: 10, borderRadius: 20, margin: 15, width: 150, backgroundColor: "#3195D3" }}
                    onPress={() => {

                        navigation.navigate("NEW PASSWORD");

                    }}
                >
                    <Text style={[styles.but, styles.txt]}>Search</Text>
                </TouchableOpacity>


            </View>
            {/* <Image style={styles.pic3}
                source={require("../assets/carbg2.png")}
            ></Image> */}
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column" }}>
                    <TouchableOpacity style={styles.bt1}
                        onPress={() => {

                            navigation.navigate("MANAGE ACCOUNT");

                        }}>

                        <Image style={styles.pic1}
                            source={require("../assets/manage_account.png")}

                        ></Image>
                    </TouchableOpacity>
                    <Text style={[styles.txt3, { marginLeft: 10 }]}>Manage Account</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <TouchableOpacity style={styles.bt1}>
                        <Image style={styles.pic2}
                            source={require("../assets/contract.png")}

                        ></Image></TouchableOpacity>
                    <Text style={[styles.txt3, { marginLeft: 35 }]}>Contract</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <TouchableOpacity style={styles.bt1}>
                        <Image style={styles.pic3}
                            source={require("../assets/invoice.png")}
                        ></Image></TouchableOpacity>
                    <Text style={styles.txt3}>Invoice</Text>
                </View>
            </View>
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20, height: 1000,
        //marginTop: 50,

        backgroundColor: "rgba(66,233,133,0.45)"

    },
    pic1: { width: 108, height: 108, zIndex: 1 },
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
        padding: 5,
        borderRadius: 20
        , backgroundColor: "white", width: 390

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
        margin: 8, height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white", width: 200
    },
    timePicker: {
        margin: 8, height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
        , backgroundColor: "white", width: 180
    },
    but: { justifyContent: "center" },
    head: {
        fontSize: 33,
        fontWeight: "600", textAlign: "center", paddingTop: 30
    },
    txt: { fontSize: 16, fontWeight: "500", textAlign: "center", color: "white" },
    txt2: { fontSize: 14, fontWeight: "500" },
    txt3: { fontSize: 16, fontWeight: "500", marginLeft: 45 },
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