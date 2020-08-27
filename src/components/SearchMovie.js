import React from 'react'
import { 
    Layout, 
    Input, 
    Row, 
    Col, 
    Card,  
    Spin, 
    Alert, 
    Modal, 
    Typography 
  } from 'antd';import 'antd/dist/antd.css';


const { Search } = Input;




export const SearchMovie = () => {
    return (
        <Row>
        <Col span={12} offset={6}>
            <Search
                placeholder="search movie"
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
            />
        </Col>
    </Row>
    )
}
