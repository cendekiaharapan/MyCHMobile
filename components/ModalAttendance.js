import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

const ModalAttendance = ({ modalVisible, setModalVisible, attendanceData }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Add your modal content here */}
          <Text>gg broo</Text>
          {/* <PieChart
                            data={chartData}
                            width={100} // Adjust the width as needed
                            height={100}
                            chartConfig={chartConfig}
                            accessor="population"
                            backgroundColor="transparent"
                            paddingLeft="0"
                            center={[10, 50]}
                            absolute
                          /> */}

          {/* Add a button to close the modal */}
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.closeButton}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 350,
    height: 350,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    marginTop: 10,
    color: "blue",
    textAlign: "center",
  },
});

export default ModalAttendance;
