import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Focus } from "../Components/focus";
import { Timer } from "../Components/timer";
import { FocusHistory } from "../Components/focusHistory";
import { colors } from "../utils/colors";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const FocusTimerScreen = ({ navigation }) => {
  const [currentTask, setCurrentTask] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeArea>
      <View style={styles.container}>
        {!currentTask ? (
          <>
            <Focus addTask={setCurrentTask} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            focusTask={currentTask}
            onTimerEnd={(task) => {
              setHistory([...history, task]);
            }}
            clearTask={() => {
              setCurrentTask(null);
            }}
          />
        )}
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
