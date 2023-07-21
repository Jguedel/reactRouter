import { Link } from "react-router-dom";
import ColorList from "./ColorList";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

const HomeColor = ()=>{

    const [list, setList] = useState(ColorList)
    const [inp, setInp] = useState("")

    const isColor = (strColor) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
      }

    const addColor = (e) =>{
        if(inp != ''){
            if (isColor(inp)) {
                e.preventDefault();
                let arr =[...list, inp]
                localStorage.setItem('list',arr)
                setList((list) => [...list, inp]);
                setInp('')
                e.target.previousElementSibling.value = ''
            }
            else{
                e.preventDefault()
                alert('Not a Valid Color')
            }

        }
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setInp(e.target.value);
    }

    const clearStorage = (e)=>{
        e.preventDefault();
        localStorage.clear();
        setList((list) => ColorList)
    }

    useEffect(() =>{
        if (localStorage.length > 0) {
            setList((list) => localStorage.getItem('list').split(','))
        }
    },[])

    console.log(localStorage);
    return (
        <div className="App">
          <h1>Color Picker</h1>
          <form>
            <input type="text" placeholder="Enter color to add" onChange={handleChange} value={inp} required/>
            <button onClick={addColor}>ADD</button>
          </form>
          <button onClick={clearStorage} style={{marginTop:"10px"}}>Reset Colors</button>
          <ul>
            {list.map((color)=>{
                return(<li key={uuid()}><Link to={`/${color}`}>{color}</Link></li>);
            })}
          </ul>
        </div>
      );
}
export default HomeColor;