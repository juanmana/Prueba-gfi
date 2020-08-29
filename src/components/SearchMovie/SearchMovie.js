import React from "react";
import {Input,Row,Col} from "antd";


const { Search } = Input;





export const SearchMovie = ({searchHandler}) => {
    return (
        <Row>
        <Col span={12} offset={6}>
          <Search
            placeholder="Buscador"
            enterButton="Buscar"
            onSearch={(value) => searchHandler(value)}
          />
        </Col>
      </Row>
    )
}
