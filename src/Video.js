import React from 'react';

export default function Video(props) {
  return (
      <div className="item item-video">
          <iframe title="This is a unique title" src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <p className="views">Просмотров: {props.views}</p>
      </div>
  )
};