import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";



const Descripiton = () => {

    let dados =useParams();

    axios.defaults.baseURL = 'https://api.jikan.moe/v3';
    const [descs, setDescs] = useState([]);
    
    function getData() {
      axios.get("/anime/" + dados.id)
        .then((response)=>{
        setDescs(response.data)
                })
    }

    useEffect(()=>{
      getData()
        // eslint-disable-next-line
      },[dados])
    
    return ( 
      <div className="desc-container">
        <div className="details">
          <h3>{descs.title}</h3>
          <img src={descs.image_url}></img>
          <div>

            <h4>Information</h4>
            <p><span className="bold">Type:</span> {descs.type}</p>
            <p><span className="bold">Episodes:</span> {descs.episodes}</p>
            <p><span className="bold">Status:</span> {descs.status}</p>
            <p><span className="bold">Source:</span> {descs.source}</p>
            <p><span className="bold">Title Japanese:</span> {descs.title_japanese}</p>
            <p><span className="bold">Duration:</span> {descs.duration}</p>
            {/* <p><span className="bold">Duration:</span> {descs.genres.map((genre)=> genre.name )} </p>  */}
            
            
            
          </div>
        </div>

        <div className="sinopse ">

          <div className="rate">

            <div>
              <div className="score">Score</div>
              <div className="bold">{descs.score}</div>
            </div>

            <div>
              <div>Ranked</div>
              <div className="bold">#{descs.rank}</div>
            </div>

            <div>
              <div>Popularity</div>
              <div className="bold">#{descs.popularity}</div>
            </div>

            <div>
              <div>Members</div>
              <div className="bold">#{descs.members}</div>
            </div>
            
          </div>

          <div className="">
            <h4>Sinopse</h4>
            <p>{descs.synopsis}</p>
          </div>

          <div className="trailer">
            <iframe width="600" height="400" src={descs.trailer_url}>
            </iframe>
          </div>

        </div>
   
    </div>
    );
}
 
export default Descripiton;