import React, { Component } from "react";
import { fetchList } from "../../redux/action/fetchList";
import Load from "../../components/loader";
import Table from "../../components/table";
import ListInner from "./listInner";
import { connect } from "react-redux";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: 10,
    };
  }
  componentDidMount() {
    const { fetchList } = this.props;
    fetchList();
  }
  render() {
    const { list, loading } = this.props;
    const { listItems } = this.state;
    const tableContent = [
      "Taxon ID",
      "Scientific Name",
      "Category",
      "Load Detail",
    ];
    return (
      <div class="container-fluid">
        <div className="row justify-content-center mt-4">
          <div className="col-sm-10">
            <div className="dash-container ">
              <h5> Active Locations </h5>
              <div style={{ margin: 20 }}>
                {loading ? (
                  <Load title="Locations" />
                ) : (
                  <>
                    {list && list.result && list.result.length === 0 ? (
                      <div
                        style={{ marginTop: "60px" }}
                        className="text-center"
                      >
                        <h3 className="dimgray">No Active Location Found</h3>
                        <p className="dimgray">No, Active Location Found</p>
                      </div>
                    ) : (
                      <Table content={tableContent}>
                        {list &&
                          list.result &&
                          list.result.length > 0 &&
                          list.result
                            .slice(0, listItems)
                            .map((item, index) => (
                              <ListInner
                                key={item.taxonid}
                                item={item}
                                fetchList={list}
                              />
                            ))}
                      </Table>
                    )}
                    <button
                      className="customButton btn-location-red "
                      onClick={() =>
                        this.setState({ listItems: listItems + 10 })
                      }
                    >
                      Show more...
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => dispatch(fetchList()),
  };
};

const mapStateToProps = (state) => {
  return {
    ...state,
    list: state.List.list,
    loading: state.List.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
