import { useState } from "react";
import PlayerControls from "../components/PlayerControls";
import TrackList from "../components/TackList";
import sinisterMusic from "../assets/sinister.mp3";
import underwaterMusic from "../assets/underwater.mp3";
import stompingMusic from "../assets/stomp.mp3";
import { MusicContext } from "../contexts/MusicContext";

const Home = () => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Sinister Music",
        file: sinisterMusic,
      },
      {
        name: "Stomping music",
        file: stompingMusic,
      },
      {
        name: "Underwater Music",
        file: underwaterMusic,
      },
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  });
  return (
    <div>
      <MusicContext.Provider value={[state, setState]}>
        <PlayerControls />
        <TrackList />
      </MusicContext.Provider>
    </div>
  );
};

export default Home;
