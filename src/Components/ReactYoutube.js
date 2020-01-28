
import React from 'react';
import YouTube from 'react-youtube';
class ReactYoutube extends React.Component {
  VideoOnReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '550px',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
    }
    
};
return (
        <YouTube
          videoId= "8Mjp9RhWcL4"
          opts={opts}
          onReady={this.VideoOnReady}
        />
    );
  }
}
export default ReactYoutube;