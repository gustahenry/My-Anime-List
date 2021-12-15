import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import {Link} from "react-router-dom";

import './Api.css';

const Api = (parm) => {

  let dados = useParams();
  let da

    !dados.length && (
      da = Object.assign({}, dados, parm)
    )
  //da = Object.assign({}, dados, parm)
  
  
    axios.defaults.baseURL = 'https://api.jikan.moe/v3';
    const [posts, setPosts] = useState([]);
    
    function getData() {

      axios.get("/" + da.parm0 + "/" + da.parm2 + "/" + da.parm1)
        .then((response)=>{
          const anime = da.arr
          const dado = response.data[anime]
          setPosts(dado)
        })
    }

    useEffect(()=>{
      getData(dados)
        // eslint-disable-next-line
      },[dados])

     

    return ( 
      <>

      <div className="title-content">{dados.season}/{dados.years}</div>
      <div className="content-container">
          
          {posts.map((post, key) => {
          return(
            
              <div className="card" key={post.toString()}>
                <Link to={"/" + post.mal_id}>
                <img src={post.image_url}></img>
                </Link>
                <p>{post.title}</p>
  
              </div>
             
          )
      })}
  </div>
  </>
    );
}
 
export default Api;