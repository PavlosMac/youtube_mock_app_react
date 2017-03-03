import React from 'react';
import VideoListItem from './video_list_items';

//functional component
const VideoList = (props) => {

  const videoItems = props.videos.map( (video) => {

    return (
      <VideoListItem
      onVideoClick={props.onVideoClick}
      key={video.etag}
      video={video} />
    )
  })

  return (

    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );

};

export default VideoList;
