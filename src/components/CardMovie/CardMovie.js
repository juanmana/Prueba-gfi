import React from "react";
import { Row, Col, Card, Tag } from "antd";
import "antd/dist/antd.css";
import {  HeartTwoTone,HeartOutlined  } from '@ant-design/icons';

import { API_KEY, FAV_MOVIE } from "../../utils/utils";

const { Meta } = Card;

export const CardMovie = ({
  Title,
  imdbID,
  Poster,
  Type,
  setDetail,
  setDetailReq,
  setModal,
  favouriteMovies,
  setFavouriteMovies,
  setReloadedFav,
}) => {
  const clickHandler = () => {
    setModal(true);
    setDetailReq(true);

    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        setDetailReq(false);
        setDetail(response);
      })
      .catch(({ message }) => {
        setDetailReq(false);
      });
  };


const favourite = () => {

    let favouriteMov = []


  if(favouriteMovies){
    favouriteMov = favouriteMovies
  }

    favouriteMov.push(imdbID)
    localStorage.setItem(FAV_MOVIE, JSON.stringify(favouriteMov))
    setReloadedFav(true)
    favouriteMov = []
  };


 const deleteFav=(imdbID)=>{

  const fav = favouriteMovies.filter(elem=>elem !== imdbID);
  localStorage.setItem(FAV_MOVIE, JSON.stringify(fav))
  setFavouriteMovies(favouriteMovies)
  setReloadedFav(true)


 }



 const arr = favouriteMovies.some(x=>x===imdbID)

 console.log(arr)





  return (
    <Col span={5}>
      <div>
        <Card style={{maxWidth: "70%", marginBottom: "5px", marginTop: "15px"}}
          cover={
            <img
              alt={Title}
              src={
                Poster === "N/A"
                  ? "https://placehold.it/198x264&text=Image+Not+Found"
                  : Poster
              }
            />
          }
          onClick={() => clickHandler()}
        >
          <Meta title={Title} />
          <Row>
            <Col>
              <Tag color="blue">{Type}</Tag>

            </Col>
          </Row>
        </Card>

       
        

{ !arr ? (
       

                <Tag onClick={favourite}><HeartTwoTone twoToneColor="blue" style={{paddingLeft: "20px",paddingRight: "20px"}}/>Añadir a favoritos</Tag>

):(     ("")
) }

{ arr ? (
 
                <Tag onClick={()=>deleteFav(imdbID)}> <HeartTwoTone twoToneColor="red" style={{paddingLeft: "20px",paddingRight: "20px"}} />Borrar favoritos</Tag>

):("")}
      </div>
    </Col>
  );
};
