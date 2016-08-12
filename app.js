// TODO
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['aa', 'bb']}/>
  </div>
);

// // var Cucumbers = () => (
// //   <li>Cucumbers</li>
// // );
// // var Kale = () => (
// //   <li>Kale</li>
// // );
// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   } 


//   render () {
//     return (
//       <li>{this.props.todo}</li>
//     );
//   }
// }

// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );

class TodoListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );

  }

}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);


ReactDOM.render(<App />, document.getElementById('app'));
