import React, { useState } from "react";
import {Link} from "react-router-dom";


import './navbar.css'

const Navbar = () => {

    const [hiddenSeason, setHiddenSeason] = useState({
        winter: false,
        spring: false,
        summer: false,
        fall: false
    });

    const numbers = [2000];
    for (let index = 0; index < numbers.length; index++) {
        let ultimo = numbers[numbers.length -1]
        numbers.push(ultimo + 1)
        if(numbers[index] == 2021)break
               
    }
    
    function handleHiddenSeason(props){

        const season = props
        setHiddenSeason({...hiddenSeason, [season]: !hiddenSeason[season]})
             
    }
    
    
    return ( 
        <nav>
                <ul>
               
                <h4 className="titleSeason" onClick={() => handleHiddenSeason('winter')}>Winter</h4>
                {hiddenSeason.winter && (
                    numbers.map ((number) => <Link to={"/winter/" + number}><li>Winter {number}</li></Link>)
                )}
                

                <h4 className="titleSeason" onClick={() => handleHiddenSeason('spring')}>Spring</h4>
                {hiddenSeason.spring && (
                numbers.map ((number) => <Link to={"/spring/" + number}><li>Spring {number}</li></Link>)
                )}

                <h4 className="titleSeason" onClick={() => handleHiddenSeason('summer')}>Summer</h4>
                {hiddenSeason.summer && (
                numbers.map ((number) => <Link to={"/summer/" + number}><li>Summer {number}</li></Link>)
                )}

                <h4 className="titleSeason" onClick={() => handleHiddenSeason('fall')}>Fall</h4>
                {hiddenSeason.fall && (
                numbers.map ((number) => <Link to={"/fall/" + number}><li>Fall {number}</li></Link>)
                )}
                </ul>
                
             
        </nav>
     );
}
 
export default Navbar;