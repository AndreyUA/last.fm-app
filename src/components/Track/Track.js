import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Track.css";

import { connect } from "react-redux";
import { serchTrack } from "../../store/action/lastfm";

const Track = ({ serchTrack, serchResult }) => {
  const [track, setTrack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    serchTrack(track);
    setTrack("");
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setTrack(e.target.value);
  };

  let result = serchResult.map((item, index) => {
    return (
      <div key={index} className="Result">
        <p className="Result_content">
          <span className="Result_track">{item.name}</span>
          <span>&nbsp;-&nbsp;</span>
          <span className="Result_artist">{item.artist}</span>
        </p>
      </div>
    );
  });

  return (
    <div className="Track">
      <div className="Track_container">
        <h1>Serch tracks by name</h1>
        <form className="Track_form" onSubmit={handleSubmit}>
          <input
            className="Track_form_inp"
            type="text"
            onChange={changeHandler}
            value={track}
            placeholder="Track name"
            required={true}
          />
          <input className="Track_form_btn" type="submit" value="Search!" />
        </form>
        {serchResult.length > 0 ? (
          result
        ) : (
          <p className="Track_form_fail">No matches!</p>
        )}
      </div>
    </div>
  );
};

Track.propTypes = {
  serchTrack: PropTypes.func.isRequired,
  serchResult: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  serchResult: state.lastfm.serchResult,
});

export default connect(mapStateToProps, { serchTrack })(Track);
