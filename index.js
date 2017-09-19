// creating a component which should produce some html
import _ from 'lodash';
import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


// take this generated html and put in on the page (in the DOM)

const API_KEY = 'AIzaSyBQRFImwUYilANh2Ljh-d5FCHnqWHSYJFs';

/*YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
}); */
// function component to class based component
/*const App = () => { *///const is from ES6, same work like var but in const, it means its value is not going to change
	//jsx is not understand by browser but somehow it is converted into html by webpack and babble*/
/*class App extends Component{
	constructor(props){
		super(props);

		this.state = { videos : [] }

		YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
			/*this.setState({videos: videos}); */ // when the name of key and value is same
			//this.setState({videos}); // ES6 
	//});
//}*/

class App extends Component{

	constructor(props){
		super(props);

		this.state = { 
			videos : [],
			selectedVideo: null 
		};

		this.videoSearch('top stories today');
		}

	videoSearch(term) {

		YTSearch({key: API_KEY, term: term}, (videos) => {
		//	this.setState({videos}); // ES6  // when the name of key and value is same
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			}); 
	});
	}


	render(){ 

		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
		return(
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				videos={this.state.videos} />
			</div>
		);
 	}
}

ReactDOM.render(<App />, document.querySelector('.container')); 