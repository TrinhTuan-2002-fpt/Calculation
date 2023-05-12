import { Sound } from "expo-av";
import { useCallback, useState } from "react";

const AudioManager = ({ filename }) => {
  const [currentAudio, setCurrentAudio] = useState(new Sound());

  const playAsync = useCallback(async () => {
    try {
      const sound = new Sound();
      await sound.loadAsync(filename);
      await sound.playAsync();
      await sound.unloadAsync();
    } catch (_e) {
      console.log(_e);
    }
  }, [currentAudio]);

  return {
    playAsync,
  };
};

export default AudioManager;
