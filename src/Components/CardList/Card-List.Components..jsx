import { Component } from "react";
import Card from "./Cards.Components";
import './Card-List.Styles.css';

class CardList extends Component{
    render(){
        const {monsters} = this.props;
        return (
            <div className = "CardList_container">
            {monsters.map((monster) => {
                return <Card key = {monster.id} name={monster.name} email={monster.email}/>
            })}
            </div>
        )
    }
}

export default CardList;