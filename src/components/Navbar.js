import { Component } from "react";


class Navbar extends Component{
    render(){
        return(
            <div style={{display:"flex", padding:"0.5rem" }}>
                <h1>Movies App</h1>
                <h2 style={{marginLeft:"2rem", marginTop:"2rem"}}>Favorites</h2>
            </div>
        );
        
    }
}

export default Navbar;