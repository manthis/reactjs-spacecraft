
var SpaceCraft = React.createClass({
  incrementCount: function(event){
    var key = event.key;

    if (key === 'ArrowUp') {
      window.clearTimeout(this.decrementTimeout);
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 4
        });
      } else {
        console.log('We can\'t go higher Captain!!!');
        this.setState({
          count: this.state.count
        });
      }
    } else if (key === 'ArrowDown') {
      window.clearTimeout(this.decrementTimeout);
      if (this.state.count < this.state.ground_level) {
        this.setState({
          count: this.state.count + 4
        });
      } else {
        console.log('We hit the ground Captain!!!');
      }
    } else if (key === 'ArrowLeft') {
      window.clearTimeout(this.decrementTimeout);
      if (this.state.center_screen > 0) {
        this.setState({
          center_screen: this.state.center_screen - 4
        });
      } else {
        console.log('We can\'t go more West Captain!!!');
        this.setState({
          center_screen: this.state.center_screen
        });
      }
    } else if (key === 'ArrowRight') {
      window.clearTimeout(this.decrementTimeout);
      if (this.state.center_screen < this.state.screen_width) {
        this.setState({
          center_screen: this.state.center_screen + 4
        });
      } else {
        console.log('We can\'t go more East Captain!!!');
        this.setState({
          center_screen: this.state.center_screen
        });
      }
    }
  },
  getInitialState: function(){
    var height = $(document).height()
    var width = $(document).width()

    var ground = height - 31;
    var center = (width - 15) / 2;
    var swidth = width - 15;

    return {
      count: ground,
      ground_level: ground,
      center_screen: center,
      screen_width: swidth,
    }
  },
  componentDidMount: function() {
      $(document.body).on('keydown', this.incrementCount);
  },
  render: function() {
    var that = this
    this.decrementTimeout = setTimeout(
      function(){
        if (that.state.count < that.state.ground_level) {
          that.setState({
            count: that.state.count + 2
          });
        }
      },
      100
    );

    var top = this.state.count;
    var left = this.state.center_screen;
    return (
        <div style={{'marginTop': top, 'marginLeft': left}}>
          <img src="spacecraft.png" alt="SpaceCraft" width="15" height="31" />
        </div>
    )
  }
});

ReactDOM.render(
  <SpaceCraft/>,
  document.getElementById('container')
);
