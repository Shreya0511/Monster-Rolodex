import { Component } from "react";
import './Cards.Styles.css';

class Card extends Component{
    render(){
        return (
            <>
            <div key = {this.props.key} className = "monstercard">
                <img alt = {this.props.name} src = {`https://robohash.org/${this.props.name}`} className = "monsterImage"/>
                <div className = "content">{this.props.name}
                <p className = "monstersemail">{this.props.email}</p></div>
            </div>
            
            </>
        )
    }
}

export default Card;