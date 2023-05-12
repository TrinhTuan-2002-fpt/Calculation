import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { getWH } from "../hook/getWH";

const { width } = getWH();

const ModalAnswerWrong = ({ onPress, isVisible }) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.8}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
    >
      <View style={styles.content}>
        <Text style={styles.contentTitle}>ban chua nhap dap an</Text>
        <Button testID={"close-button"} onPress={onPress} title="Close" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    width: width * 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    alignSelf: "center",
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export { ModalAnswerWrong };
