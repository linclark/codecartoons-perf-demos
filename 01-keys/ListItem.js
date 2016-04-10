let ListItem = React.createClass({
  displayName: "ListItem",

  render: function() {
    return React.createElement("div", {}, this.props.text)
  }
});
