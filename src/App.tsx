import React from 'react';
import videojs from 'video.js';
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

  function keyDownHandler(e) {
    const currentTime = e.target.currentTime.toFixed(3);

         if (e.code === 'KeyW') {
            console.log('Via secundária -> na faixa de retenção');
            console.log(currentTime);
         } else if (e.code === 'KeyA') {
            console.log('Veículo entra na faixa de circulação');
            console.log(currentTime);

         } else if (e.code === 'KeyM') {
            console.log('Veículo da faixa de circulação passa por um ponto marcado no vídeo');
            console.log(currentTime);

         } else if (e.code === 'KeyX') {
            console.log('Apaga evento anterior');
            console.log(currentTime);

         }
  }

  return (
    // <VREPlayer
    //   playerOptions={playerOptions}
    //   videojsOptions={videojsOptions}
    //   onTimeUpdate={(event, player, currentTimeSecond) => {
    //     console.log(currentTimeSecond);
    //   }}
    // />

    <video
      onKeyDown={keyDownHandler}
      controls 
      src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    ></video>
  );
}

export default App;