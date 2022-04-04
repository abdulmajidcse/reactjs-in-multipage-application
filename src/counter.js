"use strict";

const e = React.createElement;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <button
        onClick={() =>
          this.setState((state) => ({
            count: state.count + 1,
          }))
        }
      >
        Count {this.state.count}
      </button>
    );
  }
}

const domContainer = document.querySelector("#counter");
const root = ReactDOM.createRoot(domContainer);
root.render(e(Counter));
