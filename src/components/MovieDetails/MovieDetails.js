import React from "react";
import {Row, Col,Tag} from "antd";
import './MovieDetails.css'




export const MovieDetails = ({
    Title,
    Poster,
    imdbRating,
    Rated,
    Runtime,
    Genre,
    Plot,
  }) => {
    return (
      <Row>
        <Col span={10}>
          <img
            src={
              Poster === "N/A"
                ? "https://placehold.it/198x264&text=Image+Not+Found"
                : Poster
            }
            alt={Title}
          />
        </Col>
        <Col span={12}>
          <Row>
            <Col span={20}>
              <h1>{Title}</h1>
            </Col>
            <Col className="col-rating" span={4}>
              <h3>
                <span className="rating">{imdbRating}</span>
              </h3>
            </Col>
          </Row>
          <Row className = "row-tags">
            <Col>
              <Tag color="#108ee9">{Rated}</Tag>
              <Tag color="#108ee9">{Runtime}</Tag>
              <Tag color="#108ee9"> {Genre}</Tag>
            </Col>
          </Row>
          <Row>
            <Col>{Plot}</Col>
          </Row>
        </Col>
      </Row>
    );
  };
  