import React, { useState } from "react";
import {Link} from "react-router-dom";
import {Button,ButtonGroup, ListGroup, ListGroupItem} from 'react-bootstrap'

const Navbars = () => {

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
                <ButtonGroup vertical>

                <Button  onClick={() => handleHiddenSeason('winter')}>Winter</Button>
                {hiddenSeason.winter && (
                    numbers.map ((number) => <Link to={"/winter/" + number}>
                        <ListGroup>
                            <ListGroup.Item>Winter {number}</ListGroup.Item>
                        </ListGroup>
                        
                        </Link>)
                )}
                

                <Button  onClick={() => handleHiddenSeason('spring')}>Spring</Button>
                {hiddenSeason.spring && (
                numbers.map ((number) => <Link to={"/spring/" + number}>
                    <ListGroup>
                            <ListGroup.Item>Spring {number}</ListGroup.Item>
                        </ListGroup>
                    </Link>)
                )}

                <Button  onClick={() => handleHiddenSeason('summer')}>Summer</Button>
                {hiddenSeason.summer && (
                numbers.map ((number) => <Link to={"/summer/" + number}>
                    <ListGroup>
                            <ListGroup.Item>Summer {number}</ListGroup.Item>
                        </ListGroup>
                    </Link>)
                )}

                <Button  onClick={() => handleHiddenSeason('fall')}>Fall</Button>
                {hiddenSeason.fall && (
                numbers.map ((number) => <Link to={"/fall/" + number}>
                    <ListGroup>
                            <ListGroup.Item>Fall {number}</ListGroup.Item>
                        </ListGroup>
                    </Link>)
                )}
                </ButtonGroup >
                
             
        </nav>
     );
}
 
export default Navbars;