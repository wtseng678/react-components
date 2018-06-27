// // TODO
// var GroceryList = (props) => (
//   <ul>
//   	{props.groceryItems.map(item => )}
//   </ul>
// );

// /*var GroceryListItem = (props) => (

// );*/

// class GroceryListItem extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
	
// 	render() {
// 		return (  	
//   		    <li>{this.props.groceryItems[0]}</li>
//   		    <li>{this.props.groceryItems[1]}</li>);
// 	}
// }

// var App = () => (
//   <div>
//   	<GroceryListItem groceryItems={['Cucumber', 'Kale']}/>
//   </div>               
// );


// ReactDom.render(<GroceryList />, document.getElementById('app'));
var App = () => (
  <div>
    <GroceryList groceryItems={['Cucumber', 'Kale']}/>
  </div>
);


var GroceryList = (props) => {
	var onListItemClick = (event) => console.log('clicked');
	var onListItemHover = (event) => console.log('hovered');
	
	return (
	  <ul>
	    {/*<li onClick={onListItemClick}>{this.props.groceryItems[0]} </li>
	    <li>{this.props.groceryItems[1]} </li>*/
		props.groceryItems.map(groceryItems => <Item groceryItems={groceryItems} />)
		}
	  </ul>
	);	
}

/*
var Item = () => (
  <li>Item</li>
);*/

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			hovered: false
		}
	}
	
	onListItemClick() {
		console.log('clicked');
		this.setState({clicked:!this.state.clicked});
	}
	
	onListItemHover() {
		this.setState({hovered:!this.state.hovered});
	}
	
	render() {
		var style = {
			textDecoraton: this.state.done ? 'line-through' : 'none',
			fontWeight: this.state.hovered ? 'bold' : 'normal'
		};
		return (
		  <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.groceryItems}</li>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));