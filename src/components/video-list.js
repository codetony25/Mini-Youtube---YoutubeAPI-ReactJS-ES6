import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
	const VideoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect = {props.onVideoSelect}
				key={video.etag} 
				video={video} 
			/>
		)
	});
	return (
		<div className="col-md-4">
			<ul className="input-group">
				{VideoItems}
			</ul>
		</div>
	)
}

export default VideoList;