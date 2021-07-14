import React from 'react';
import VREPlayer from 'videojs-react-enhanced';
import 'video.js/dist/video-js.css';

function App(): JSX.Element {
  const playerOptions: VREPlayer.IPlayerOptions = {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    controls: true,
    autoplay: "play",
  };
  const videojsOptions: VREPlayer.IVideoJsOptions = {
    fluid: true,
  };

  return (
      <VREPlayer
          playerOptions={playerOptions}
          videojsOptions={videojsOptions}
          onReady={(player) => console.log(player)}
          onPlay={(e, _, second) => console.log('Play!')}
          onPause={(e, _, second) => console.log('Pause!')}
          onEnded={(e, _) => console.log('Ended!')}
      />
  );
}

export default App;