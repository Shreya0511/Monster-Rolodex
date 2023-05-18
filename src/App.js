import "./App.css";
import CardList from "./Components/CardList/Card-List.Components.";
import SearchBox from "./Components/SerachBar/Search-Box.Components";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      Monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            Monsters: users,
          };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {return {searchField}});
  }

  render() {
   const {Monsters, searchField} = this.state;
   const {onSearchChange} = this;
   //we have made our state a local variable which could now be accessed anywhere from our class without repetative
   //use of this.state and this goes same with onSearchChange where we have made its variable so that we don't have to use
   //this.onSearchChange everytime instead we can just use onSerachChange.
    const filteredArr = this.state.Monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
      //the search value is changed to lower case because includes is not case sensitive
    });

    return (
      <div className="App">
          {/* //we added this because this is attached to our class now.
          //actually earlier we had anonymous function in here which we have shifted outside render so that the
          //function gets intialized only once instead of rendering again and again whenever rendering is happening to avoid
          //any kind inefficiency in program. */}
          <div className = "heading"><h1>Monsters Rolodex</h1></div>
          <SearchBox onSearchChange = {this.onSearchChange}/>
        <CardList monsters={filteredArr}/>
      </div>
    );
  }
}

export default App;
