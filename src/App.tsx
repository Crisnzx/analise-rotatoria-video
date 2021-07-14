import React, { useState } from 'react';
import VREPlayer from 'videojs-react-enhanced';
import 'video.js/dist/video-js.css';
import { Cronometro } from '../src/componentes /cronometro';

function App(): JSX.Element {
  const [teste, setTeste] = useState<any>([]);
  const playerOptions: VREPlayer.IPlayerOptions = {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    controls: true,
    autoplay: "play",
  };
  const videojsOptions: VREPlayer.IVideoJsOptions = {
    fluid: true,
  };

  const functionTeste: any = (second?: number) => {
    let arr = [];
    console.log(second)
    let obj = {
      play: true,
      secondstart: second,
      secondstop: second,
      pause: false,
    }
    arr.push(obj)
    setTeste(arr)
    //teste.push(obj)
  }

  console.log(teste)

  return (
      <>
        <VREPlayer
            playerOptions={playerOptions}
            videojsOptions={videojsOptions}
            onReady={(player) => console.log(player)}
            onPlay={(e, _, second) => functionTeste(second)}
            onPause={(e, _, second) => console.log('Pause!')}
            onEnded={(e, _) => console.log('Ended!')}
        />
        <div>
          {teste.length > 0 ? (
              <>
                <h2>CRONOMETRO</h2>
              </>
          ) : null }
        </div>
      </>

  );
}

export default App;