import { Component } from "react";
import './Search-Box.Styles.css';

class SearchBox extends Component{
  render(){
    const{onSearchChange} = this.props;
    return (
        <>
        <div className = "searchBoxParent">
        <input
        className="searchBox"
        placeholder="Search Monsters"
        type="search"
        onChange={onSearchChange}/>
        </div>
        </>

    );
  }
}

export default SearchBox;