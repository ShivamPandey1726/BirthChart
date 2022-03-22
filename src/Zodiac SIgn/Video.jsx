import './Video.css';
//import song from './static/arise.mp3';
const Video = () =>
{
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();
  return(
    <>
      <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
    </>
  );
}
export default Video;