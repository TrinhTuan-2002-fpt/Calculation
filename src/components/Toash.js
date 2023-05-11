import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

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
        {/* <Text style={styles.contentTitle}>
          {point < 5
            ? "Bạn Cần cố gắng hơn"
            : point < 8
            ? "Bạn đang làm rất rốt"
            : "Bạn làm rất tốt"}
        </Text> */}
        <Button testID={"close-button"} onPress={onPress} title="Close" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});

export { ModalAnswerWrong };
