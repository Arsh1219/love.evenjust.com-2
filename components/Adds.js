import React from "react";

export class AddInTop extends React.Component {
  render() {
    return (
      <div className="mt-2">
        <ins
          className="adsbygoogle"
          style={{ display: "inline-block", width: "320px", height: "200px" }}
          data-ad-client="ca-pub-6010823966003879"
          data-ad-slot="8757165722"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}

export class AddInBottom extends React.Component {
  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "320px", height: "200px" }}
        data-ad-client="ca-pub-6010823966003879"
        data-ad-slot="8757165722"
        data-full-width-responsive="true"
      />
    );
  }
}
