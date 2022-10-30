import { useEffect } from "react";
import { fetchStates } from "../../apiCountry";

const DropDownCountry = () => {
    
    useEffect(()=>{
        fetchStates().then(console.log);
    },[]);
    
    return (
        <select className='country'>
            <option>Selecione um país</option>
        </select>
    )
};

export default DropDownCountry;