import React from 'react';
import './searchBox.css';

const SearchBox = ({ handleSearch }) => {
	return (
		<div className="searchBoxContainer">
			<div className="searchBoxTitle">Search Any Image</div>
			<form onSubmit={handleSearch} className="searchBoxForm">
				<input type="text" className="searchBoxInput" name="searchBox" placeholder="Search..." />
				<button type="submit" className="searchBoxFormBtn">
					Search
				</button>
			</form>
			<p className="searchBoxPara">Search for any object and get the best image all over the internet.</p>
		</div>
	);
};

export default SearchBox;
