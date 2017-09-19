import React, { Component } from 'react';

/*const SearchBar = () => {
	return <input />; 
};*/

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term: ''};
	}
	render(){
		/*return <input onChange={event => console.log(event.target.value)} />; Value of the input : {this.state.term}*/
		return (

			<div className="search-bar">
				<h1>
    			<span className="ladu">l  a  d  u  </span>
    			<span className="Tube">Videos</span>
  				</h1>
  				<input
					value={this.state.term}
					//onChange={event => this.setState({term: event.target.value})} />
					onChange={event => this.onInputChange(event.target.value)} />

				<label className="Search-label" for="search-box"><i class="fa fa-search"></i></label>
			</div>
		);

		}

		onInputChange(term) {
			this.setState({term});
			this.props.onSearchTermChange(term);
		}

	}

export default SearchBar;