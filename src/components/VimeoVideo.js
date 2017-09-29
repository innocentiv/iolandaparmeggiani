import React from 'react';
import styles from '../css/vimeovideo.module.css';

export default function VimeoVideo({ videoId }) {
  if(videoId == null) return null;
  return (
    <div className={styles.embedContainer}>
      <iframe src={`https://player.vimeo.com/video/${videoId}`} frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    </div>
  );
}
