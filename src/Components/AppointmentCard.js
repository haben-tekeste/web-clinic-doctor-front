import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
  Modal,
  TextInput,
} from "react-native";
import {
  Foundation,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Spacer from "./Spacer";
import { AntDesign } from '@expo/vector-icons'; 
import { writePrescription, clearMessage } from "../Actions/PrescriptionActions";
import { useDispatch,useSelector } from "react-redux";


const AppointmentCard = ({ details }) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(clearMessage());
  },[])
  const {isLoading, message} = useSelector(state => state.prescription)
  const { width, height } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [duration, setDuration] = useState(0);
  const dateDisplay = details?.date.split('T')[0]
  const handleWrite = () => {
    if (!medicine || !dosage || duration === 0) return;
    dispatch(writePrescription(medicine,dosage,duration,details.patientId,details.id));
  }
  return (
    <View
      style={{
        ...cardStyles.container,
        width: width / 1.04,
        height: 230,
        elevation: 10,
        shadowColor: "gray",
      }}
    >
      <View style={cardStyles.header}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginBottom: 4,
            }}
          >
            {details?.patientName}
          </Text>
        </View>
        <Image
          style={cardStyles.img}
          source={require("../Images/avatar.png")}
        />
      </View>
      <View style={cardStyles.line} />
      <View style={cardStyles.icons}>
        <View style={cardStyles.icon}>
          <Foundation name="calendar" size={30} color="#585454" />
          <Text style={{ marginLeft: 5 }}>{dateDisplay}</Text>
        </View>
        <View style={cardStyles.icon}>
          <MaterialCommunityIcons
            name="clock-time-four"
            size={30}
            color="#585454"
          />
          <Text style={{ marginLeft: 5 }}>{details.time}</Text>
        </View>
        <View style={cardStyles.icon}>
          <Octicons name="dot-fill" size={30} color={details?.status == "Confirmed" ? "#45f60a" : "red"} />
          <Text style={{ marginLeft: 5 }}>{details?.status}</Text>
        </View>
      </View>
      <View style={cardStyles.buttonContainer}>
        {details.status === "pending" ? (
          <Pressable style={{ ...cardStyles.btn, backgroundColor: "#dcdedc" }}>
            <Text style={{ fontSize: 15 }}>Mark Complete</Text>
          </Pressable>
        ) : details?.status === 'Confirmed' && (
          <Pressable
            style={{ ...cardStyles.btn, backgroundColor: "#dcdedc" }}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ fontSize: 15 }}>Write Prescription</Text>
          </Pressable>
        )}

        <Pressable style={{ ...cardStyles.btn, backgroundColor: "#640F82" }}>
          <Text style={{ fontSize: 15, color: "white" }}>Join</Text>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={cardStyles.centeredView}>
          <View
            style={{
              ...cardStyles.modalView,
              width: width / 1.2,
              height: height / 2,
            }}
          >
          <Spacer />
          <Spacer />
            <TextInput
              style={cardStyles.input}
              onChangeText={setMedicine}
              value={medicine}
              placeholder="Medicine Name"
            />
            <Spacer />
            <TextInput
              style={cardStyles.input}
              onChangeText={setDosage}
              value={dosage}
              placeholder="Dosage"
            />
            <Spacer />
            <TextInput
              style={cardStyles.input}
              onChangeText={setDuration}
              value={duration}
              placeholder="Duration"
            />
            <Spacer />
            <Pressable
              style={[cardStyles.button,cardStyles.cancel]}
              onPress={() => {
                dispatch(clearMessage())
                setModalVisible(!modalVisible)}
                } 
            >
              <AntDesign name="closecircleo" size={24} color="black" />
            </Pressable>
            <Pressable
              style={[cardStyles.button,cardStyles.buttonClose]}
              onPress={() => 
                setModalVisible(!modalVisible) }
            >
              <Text style={{fontSize:18,padding:7}} onPress={handleWrite}>Write</Text>
            </Pressable>
            <Spacer />
            <Spacer />
            {message && <Text style={{textAlign:'center',color:'blue',fontSize:15}}>{message}</Text>}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical:6,
    backgroundColor: "#ede5ee",
    shadowColor: "#171717",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
  },
  line: {
    backgroundColor: "#AEAEAE",
    height: 1,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:4,
    width: 250,
    fontSize:20
  },
  cancel:{
    backgroundColor:'#f06666',
    position:'absolute',
    top:0,
    right:2
  }
});

export default AppointmentCard;
