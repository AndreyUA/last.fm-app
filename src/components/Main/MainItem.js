import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

const MainItem = ({ track: { name, artist, image, url } }) => {
  return (
    <>
      <div className="Main_item_content">
        <img src={image[1]["#text"]} alt="artist's img" />
        <span className="Main_item_content_track">{name}&nbsp;</span>
        <span>by&nbsp;</span>
        <NavLink
          className="Main_item_content_artist"
          to={`/artist/${artist.name}`}
        >
          <span>{artist.name}</span>
        </NavLink>
        <a
          className="Main_item_content_lastfm"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          {`${artist.name} at last.fm`}
        </a>
      </div>
    </>
  );
};

MainItem.propTypes = {
  track: PropTypes.object.isRequired,
};

export default MainItem;
