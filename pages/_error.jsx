import React from 'react'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  returnMessage(code) {
    if (code === 404) {
      return <span>This page could not be found</span>;
    }

    return <span>An error {code} ocurred</span>;
  }

  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "32px",
              lineHeight: "100%",
              marginTop: "7px"
            }}
          >
            {this.props.statusCode}
          </span>
          <span
            style={{
              margin: "0px 20px",
              height: "40px",
              width: "2px",
              background: "#b2b2b2"
            }}
          />
          <span style={{ marginTop: "2px" }}>
            {this.returnMessage(this.props.statusCode)}
          </span>
        </div>
      </div>
    );
  }
}

export default Error;
