import React, { Component } from "react";
import DetailPage from "../../components/detailPage";
import config from "../../config";
import axios from "axios";
import "./style.css";

class ListInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: "",
      editing: false,
      listDetail: [],
      loading: false,
    };
  }

  /* Fetch Specific Result with Async function */
  fetchSpecificResult = async (value) => {
    this.setState({
      loading: true,
    });
    const result = await axios.get(
      `${config.apiPath}/api/v3/species/narrative/${value}?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee`
    );
    const response = result.data;
    this.setState({
      listDetail: response,
      loading: false,
    });
  };

  render() {
    const {
      item: { scientific_name, taxonid, category },
    } = this.props;

    const { itemId, editing, listDetail, loading } = this.state;

    return (
      <>
        <tr className="detail-main">
          <td className="max-table-width">{taxonid}</td>
          <td className="max-table-width">{scientific_name}</td>
          <td className="max-table-width">{category}</td>
          <td className="max-table-width">
            <button
              className="customButton btn-location-red"
              onClick={() => {
                this.fetchSpecificResult(scientific_name);
                this.setState({ itemId: taxonid, editing: true });
              }}
            >
              Load Detail
            </button>
          </td>
        </tr>
        {editing && taxonid === itemId ? (
          <DetailPage data={listDetail && listDetail} loading={loading} />
        ) : null}
      </>
    );
  }
}

export default ListInner;
