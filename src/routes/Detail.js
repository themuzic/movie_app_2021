import React from "react";
import {Link} from "react-router-dom";
import "./Detail.css";

class Detail extends React.Component{
  componentDidMount(){
    const{ location, history } = this.props;
    console.log(location.state);
    console.log(history);
    if(location.state === undefined){
      history.push("/");
    }
  }

  render(){
    const {location} = this.props;
    return (
      <>
      <section className="container">
        <div className="back">
          <Link to="/">Back</Link>
        </div>
        <div className="movies">
          <div className="movie detail">
            <img className="detail" src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
            <div className="movie__data detail">
              <h3 className="movie__title detail">{location.state.title}</h3>
              <h5 className="movie__year detail">{location.state.year}</h5>
              <ul className="movie__genres detail">
                  {location.state.genres.map((genre, idx) => (
                      <li className="genres__genre detail" key={idx}>{genre}</li>
                  ))}
              </ul>
              <p className="movie_summary detail">{location.state.summary}</p>
            </div>
          </div>          
        </div>
      </section>
    </>
    )
  }
}

export default Detail;