import React, { Component } from 'react'
import Cup from './Cup';
import i1 from '../assets/a.jpeg';
import i2 from '../assets/b.jpeg';
import i3 from '../assets/c.jpeg';
import i4 from '../assets/d.jpeg';
import i5 from '../assets/e.jpeg';
import i6 from '../assets/f.jpeg';
import i7 from '../assets/g.jpeg';
import i8 from '../assets/h.jpeg';
import i9 from '../assets/i.jpeg';
import i10 from '../assets/j.jpeg';
class Groupcup extends Component {
    state = { cup:[
        {id:1,name:"Orange Flavour",cost:"Rs.70",img:i6,rat:4.5},
        {id:2,name:"Coffee Flavour",cost:"Rs.60",img:i7,rat:4},
        {id:3,name:"Strawberry Flavour",cost:"Rs.80",img:i8,rat:3.5},
        {id:4,name:"Vanilla Flavour",cost:"Rs.90",img:i9,rat:5},
        {id:5,name:"Watermelon Flavour",cost:"Rs.50",img:i10,rat:4.5},
        {id:6,name:"Banana Flavour",cost:"Rs.60",img:i1,rat:3.5},
        {id:7,name:"Blueberry Flavour",cost:"Rs.70",img:i2,rat:4},
        {id:8,name:"Butterscotch Flavour",cost:"Rs.80",img:i3,rat:4},
        {id:9,name:"Chocolate Flavour",cost:"Rs.100",img:i4,rat:4.5},
        {id:10,name:"Mango Flavour",cost:"Rs.50",img:i5,rat:3}
    ] } 
    render() { 
        return (
            <>
            {this.state.cup.map(mp=><Cup key={mp.id} name={mp.name} cost={mp.cost} img={mp.img} rat={mp.rat}/>)}
            </>
        );
    }
}
 
export default Groupcup;