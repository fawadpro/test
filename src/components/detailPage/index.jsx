import React, { Component } from "react";
import Loader from "../../components/loader";
import "./style.css";

class DetailPage extends Component {
  render() {
    const { data, loading } = this.props;

    return (
      <>
        <div className="detailContainer">
          {loading ? (
            <Loader title="Detail Page" />
          ) : (
            data &&
            data.result &&
            data.result.map((item, index) => {
              return (
                <div key={index}>
                  <div className="name">{data.name}</div>
                  <div className="description">{item.geographicrange}</div>
                </div>
              );
            })
          )}
          {}
        </div>
      </>
    );
  }
}

export default DetailPage;
