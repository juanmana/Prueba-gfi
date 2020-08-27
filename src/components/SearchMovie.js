import React from 'react'
import { Row, Col} from 'antd';





export const SearchMovie = () => {
    return (
        <Row>
        <Col span={12} offset={6}>
            <Search
                placeholder="enter movie, series, episode name"
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
            />
        </Col>
    </Row>
    )
}
