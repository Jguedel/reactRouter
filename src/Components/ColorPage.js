import { useParams, Link } from "react-router-dom"

const ColorPage = ()=>{
    const params = useParams()
    let textColor = 'black'
    if (params.color === 'black') {
        textColor = 'white'
    }

    return(
    <div style={{backgroundColor:`${params.color}`, color:`${textColor}`, position:"absolute", top:"0px", bottom:"0px", left:"0px", right:"0px"}}>
        <p>You choose {params.color}</p>
        <Link to={"/"}>Go Home</Link>
    </div>
    );
}
export default ColorPage;