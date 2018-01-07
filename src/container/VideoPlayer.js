import React from 'react';
import videojs from 'video.js'

// TODO - MOVE THIS TO UTILS
export const getDurationRatio = (currentTime, duration) => {
    const percent = ~~((currentTime * 100) / duration);
    if (percent === 100) {
        return 100;
    }  else if (percent > 75) {
        return 75;
    } else if (percent > 50) {
        return 50;
    } else if (percent > 25) {
        return 25;
    }
    return 0;
};

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { durationRatio: 0, showLog: false }
    }
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(this.videoNode, this.props, () => {
            // console.log('onPlayerReady', this);
            videojs.log('Your player is ready!', this.player);

            this.player.on('ended', function() {
                // logger for the video end
                videojs.log('Awww...over so soon?!');
            });

            // logger for timeupdate
            this.player.on('timeupdate', () => {
                // Based on the duration of the video, 25, 50,75 and 100% are calculated and pushed.
                let ratio = getDurationRatio(this.player.currentTime(), this.player.duration(), this.state.durationRatio);
                if (ratio >= this.state.durationRatio + 25) {
                    this.setState({ showLog: true })
                }
                if(ratio && this.state.showLog) {
                    videojs.log('timeupdate', this.player);
                    this.setState({ durationRatio: ratio, showLog: false });
                }
            });

            // TODO - More Event handlers - play , pause, volumechange ...etc


        });
        // videojs.log.history();
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }

    render() {
        return (
            <div data-vjs-player>
                <video ref={ node => this.videoNode = node } className="video-js" height="250" width="450" />
                {this.state.durationRatio &&
                    <p className='msg'> {this.state.durationRatio}% Competed  </p>
                }
            </div>
        )
    }
}

export default VideoPlayer;