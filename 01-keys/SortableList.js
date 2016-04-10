let SortableList = React.createClass({
  displayName: "SortableList",

  getInitialState: function() {
    return {
      items: capitals.map(obj => obj.capital)
    }
  },

  render: function() {
    let items = this.state.items.map(function(item) {
      return React.createElement(ListItem, {text: item})
    })
    let button = React.createElement("button", {onClick: reorderCapitals.bind(this)}, "Reverse order")
    return React.createElement("div", {}, [button, items])
  }
});

function reorderCapitals(order) {
  this.setState({items: this.state.items.reverse()})
}