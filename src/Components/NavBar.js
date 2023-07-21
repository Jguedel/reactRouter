import "./NavBar.css";
import DogsInfo from "./DogInfo";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const NavBar = () =>{
    return(
        <div className="nav">
            {DogsInfo.map(({name})=>{
                return(<Link key={uuid()} to={`dog/${name}`}>{name}</Link>)
            })}
        </div>
    )
}

export default NavBar