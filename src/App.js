import React, { useEffect, useState } from "react";
import { Layout, Row, Alert, Modal } from "antd";
import "./App.css";
import { SearchMovie } from "./components/SearchMovie/SearchMovie";
import { CardMovie } from "./components/CardMovie/CardMovie";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { Loader } from "./components/Loader/Loader";
import { API_KEY, FAV_MOVIE } from "./utils/utils";

const { Header, Content, Footer } = Layout;

function App() {



  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



  const [query, setQuery] = useState("disney");


  const [modal, setModal] = useState(false);
  const [detailReq, setDetailReq] = useState(false);
  const [detail, setDetail] = useState(false);

  const [favouriteMovies, setFavouriteMovies] = useState([])

  const [reloadedFav, setReloadedFav] = useState(false)


  useEffect(()=>{

    const allMoviesStorage = localStorage.getItem(FAV_MOVIE)
    const allFavArray = JSON.parse(allMoviesStorage)
    setFavouriteMovies(allFavArray)
    setReloadedFav(false)
  },[reloadedFav])






  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
          setError(response.Error);
        } else {
          setData(response.Search);
        }

        setLoading(false);
      })
      .catch(({ err }) => {
        setError(err);
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      <Layout>
        <Header>
          <div className="header">
            <h1 className="title">Movies React</h1>
          </div>
        </Header>
        <Content>
          <div className="content">
            <SearchMovie searchHandler={setQuery} />
            <br />

            <Row type="flex" justify="center">
              {loading && <Loader />}

              {error !== null && (
                <div>
                  <Alert message={error} type="error" />
                </div>
              )}

              {data !== null &&
                data.length > 0 &&
                data.map((movie, index) => (
                  <CardMovie
                    setDetail={setDetail}
                    setDetailReq={setDetailReq}
                    setModal={setModal}
                    key={index}
                    {...movie}
                    favouriteMovies={favouriteMovies}
                    setReloadedFav={setReloadedFav}
                    setFavouriteMovies={setFavouriteMovies}
                  />
                ))}
            </Row>
          </div>
          <Modal
            title="Detail"
            centered
            visible={modal}
            onCancel={() => setModal(false)}
            footer={null}
            width={800}
          >
            {detailReq === false ? <MovieDetails {...detail} /> : <Loader />}
          </Modal>
        </Content>
        <Footer>
          <div className="footer"> Movies ©2020 Juan Martin Navarro</div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
