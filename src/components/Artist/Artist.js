import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Loader from "../Loader/Loader";
import "./Artist.css";

import { connect } from "react-redux";
import { getArtist } from "../../store/action/lastfm";

const Artist = ({ getArtist, match, artist }) => {
  useEffect(() => {
    getArtist(match.params.name);
  }, [getArtist, match]);

  return Object.keys(artist).length === 0 ? (
    <Loader />
  ) : (
    <div className="Artist">
      <div className="Artist_wrapper">
        <h1>Artist: {artist.name}</h1>
        <img
          className="Artist_img"
          src={artist.image[3]["#text"]}
          alt="artist img"
        />
        <p className="Artist_tags">
          Tags:{" "}
          {artist.tags.tag.map((item, index) => (
            <span key={index}>{item.name}, </span>
          ))}
        </p>
        <p className="Artist_descr">
          Description: <br /> <span>{artist.bio.content}</span>
        </p>
      </div>
    </div>
  );
};

Artist.propTypes = {
  artist: PropTypes.object,
  getArtist: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  artist: state.lastfm.artist,
});

export default connect(mapStateToProps, { getArtist })(Artist);
