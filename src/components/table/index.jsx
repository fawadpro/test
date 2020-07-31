import React from "react";

const Table = (props) => {
  const { content, children } = props;
  return (
    <>
      <div className="row">
        <div className="col-sm-6 button-group"></div>
      </div>
      <div className="table-responsive">
        <table className="table" border="0">
          <thead>
            <tr>
              {content.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
