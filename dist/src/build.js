(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\Spyro\\documents\\github\\react\\FirstProject\\src\\js\\App.js":[function(require,module,exports){
var Parent = require('./Parent');

React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./Parent":"C:\\Users\\Spyro\\documents\\github\\react\\FirstProject\\src\\js\\Parent.js"}],"C:\\Users\\Spyro\\documents\\github\\react\\FirstProject\\src\\js\\Child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
  render: function() {
    return (
      React.createElement("div", null, 
        "and this is the ", React.createElement("b", null, this.props.name), "."
      )
    )
  }
});

module.exports = Child;

},{}],"C:\\Users\\Spyro\\documents\\github\\react\\FirstProject\\src\\js\\Header.js":[function(require,module,exports){
var Header = React.createClass({displayName: "Header",
	render: function () {
		return (
			React.createElement("div", {className: "colorify"}, 
				"testing 1 2 3 5 10 20"
			)
		)
	}
});

module.exports = Header;

},{}],"C:\\Users\\Spyro\\documents\\github\\react\\FirstProject\\src\\js\\Parent.js":[function(require,module,exports){
var Child = require('./Child');
var Header = require('./Header');

var Parent = React.createClass({displayName: "Parent",
  render: function() {
    return (
      React.createElement("div", null, 
      	React.createElement(Header, null), 
        React.createElement("div", null, " This is the parent. "), 
        React.createElement(Child, {name: "child"})
      )
    )
  }
});

module.exports = Parent;

},{"./Child":"C:\\Users\\Spyro\\documents\\github\\react\\FirstProject\\src\\js\\Child.js","./Header":"C:\\Users\\Spyro\\documents\\github\\react\\FirstProject\\src\\js\\Header.js"}]},{},["C:\\Users\\Spyro\\documents\\github\\react\\FirstProject\\src\\js\\App.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXFNweXJvXFxkb2N1bWVudHNcXGdpdGh1YlxccmVhY3RcXEZpcnN0UHJvamVjdFxcc3JjXFxqc1xcQXBwLmpzIiwiQzpcXFVzZXJzXFxTcHlyb1xcZG9jdW1lbnRzXFxnaXRodWJcXHJlYWN0XFxGaXJzdFByb2plY3RcXHNyY1xcanNcXENoaWxkLmpzIiwiQzpcXFVzZXJzXFxTcHlyb1xcZG9jdW1lbnRzXFxnaXRodWJcXHJlYWN0XFxGaXJzdFByb2plY3RcXHNyY1xcanNcXEhlYWRlci5qcyIsIkM6XFxVc2Vyc1xcU3B5cm9cXGRvY3VtZW50c1xcZ2l0aHViXFxyZWFjdFxcRmlyc3RQcm9qZWN0XFxzcmNcXGpzXFxQYXJlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRWpDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsTUFBTSxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O0FDRnhELElBQUksMkJBQTJCLHFCQUFBO0VBQzdCLE1BQU0sRUFBRSxXQUFXO0lBQ2pCO01BQ0Usb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtBQUFBLFFBQUEsa0JBQUEsRUFDYSxvQkFBQSxHQUFFLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBUyxDQUFBLEVBQUEsR0FBQTtBQUFBLE1BQ3BDLENBQUE7S0FDUDtHQUNGO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLOzs7QUNWdEIsSUFBSSw0QkFBNEIsc0JBQUE7Q0FDL0IsTUFBTSxFQUFFLFlBQVk7RUFDbkI7R0FDQyxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLFVBQVcsQ0FBQSxFQUFBO0FBQUEsSUFBQSx1QkFBQTtBQUFBLEdBRXBCLENBQUE7R0FDTjtFQUNEO0FBQ0YsQ0FBQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNOzs7QUNWdkIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFakMsSUFBSSw0QkFBNEIsc0JBQUE7RUFDOUIsTUFBTSxFQUFFLFdBQVc7SUFDakI7TUFDRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO09BQ0osb0JBQUMsTUFBTSxFQUFBLElBQUEsQ0FBRyxDQUFBLEVBQUE7UUFDVCxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBLHVCQUEyQixDQUFBLEVBQUE7UUFDaEMsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQTtNQUNqQixDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUGFyZW50ID0gcmVxdWlyZSgnLi9QYXJlbnQnKTtcclxuXHJcblJlYWN0LnJlbmRlcig8UGFyZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyIsInZhciBDaGlsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBhbmQgdGhpcyBpcyB0aGUgPGI+e3RoaXMucHJvcHMubmFtZX08L2I+LlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDaGlsZDsiLCJ2YXIgSGVhZGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xvcmlmeVwiPlxyXG5cdFx0XHRcdHRlc3RpbmcgMSAyIDMgNSAxMCAyMFxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXI7IiwidmFyIENoaWxkID0gcmVxdWlyZSgnLi9DaGlsZCcpO1xyXG52YXIgSGVhZGVyID0gcmVxdWlyZSgnLi9IZWFkZXInKTtcclxuXHJcbnZhciBQYXJlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIFx0PEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXY+IFRoaXMgaXMgdGhlIHBhcmVudC4gPC9kaXY+XHJcbiAgICAgICAgPENoaWxkIG5hbWU9XCJjaGlsZFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGFyZW50OyJdfQ==
