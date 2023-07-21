import { useParams, Link } from "react-router-dom"
import DogsInfo from "./DogInfo";
import { v4 as uuid } from "uuid";

const Dog = () => {
    const params = useParams();
    let info = {name:"",age:"", src:"", facts:[]}
    DogsInfo.forEach((inp)=>{
        if(inp.name === params.name){
            info = inp
        }
    })
    
    return(
        <div>
            <Link to={"/"} className="nav">Home</Link>
            <div className="singleDog" style={{outline:"solid black 2px", margin:"auto", width:"30%"}}>
                <p className="name">{info.name}</p>
                <p className="age">{info.age}</p>
                <img src={info.src} alt="Dog" style={{width:"50%"}}/>
                <ul>
                    {info.facts.map((fact)=>{
                        return(
                            <li key={uuid()}>{fact}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Dog