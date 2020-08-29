import React from "react";
import { Row, Col, Card, Tag } from "antd";
import "antd/dist/antd.css";
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
  };


  const deleteFav=()=>{

    setFavouriteMovies(favouriteMovies);
    localStorage.removeItem(imdbID);


    setReloadedFav(true)
  }






  return (
    <Col span={5}>
      <div>
        <Card
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

        <button onClick={favourite}>
                <Tag color="yellow">Fav</Tag>
              </button>

        <button onClick={deleteFav}>
                <Tag color="yellow">Quitar favoritos</Tag>
              </button>
      </div>
    </Col>
  );
};