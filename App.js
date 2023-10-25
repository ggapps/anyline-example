import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AnylineOCR from "anyline-ocr-react-native-module";

export default function App() {
  const anylineLicenseKey = "==== INSERT  ANYLINE LICENSE KEY HERE ===";

  const init = async () => {
    try {
      await AnylineOCR.setupAnylineSDK(anylineLicenseKey);
    } catch (error) {
      console.log("error initializing Anyline SDK: " + error);
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button onPress={() => AnylineOCR.scan(anyLineConfig)} title="Scan" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const anyLineConfig = {
  options: {
    doneButtonConfig: {
      "offset.y": -88,
    },
  },
  cameraConfig: {
    captureResolution: "1080p",
    zoomGesture: true,
  },
  flashConfig: {
    mode: "manual",
    alignment: "top_left",
  },
  viewPluginConfig: {
    pluginConfig: {
      id: "tire-make",
      cancelOnResult: true,
      tireMakeConfig: {
        upsideDownMode: "AUTO",
      },
    },
    cutoutConfig: {
      maxWidthPercent: "60%",
      maxHeightPercent: "60%",
      alignment: "center",
      strokeWidth: 2,
      cornerRadius: 4,
      strokeColor: "0099FF",
      outerColor: "000000",
      outerAlpha: 0.3,
      ratioFromSize: {
        width: 5,
        height: 2,
      },
      feedbackStrokeColor: "0099FF",
    },
    scanFeedbackConfig: {
      animation: "traverse_multi",
      animationDuration: 250,
      style: "rect",
      strokeColor: "0099FF",
      beepOnResult: true,
      vibrateOnResult: false,
      strokeWidth: 2,
    },
  },
};
