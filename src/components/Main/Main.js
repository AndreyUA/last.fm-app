import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Loader from "../Loader/Loader";
import MainItem from "./MainItem";
import "./Main.css";

import { connect } from "react-redux";
import { getTop } from "../../store/action/lastfm";

const Main = ({ getTop, top, loading }) => {
  useEffect(() => {
    getTop();
  }, [getTop]);
  return loading ? (
    <Loader />
  ) : (
    <>
      <h1>Most popular tracks</h1>
      {top.map((item, index) => {
        return (
          <div className="Main_item" key={index}>
            <MainItem track={item} />
          </div>
        );
      })}
    </>
  );
};

Main.propTypes = {
  getTop: PropTypes.func.isRequired,
  top: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  top: state.lastfm.top,
  loading: state.lastfm.loading,
});

export default connect(mapStateToProps, { getTop })(Main);
