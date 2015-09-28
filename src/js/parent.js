var Parent = React.createClass({
  render: function() {
    return (
      <div>
      	<Header />
        <div> This is the parent. </div>
        <Child name="child"/>
      </div>
    )
  }
});