import React from "react";
import { Row, Col,Card,Tag} from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;



export const CardMovie = () => {
  return (
    <Col style={{ margin: "20px 0" }} className="gutter-row" span={4}>
      <div className="gutter-box">
        <Card
          style={{ width: 200 }}
          cover={
            <img
              alt=""
              src="https://placehold.it/198x264&text=Image+Not+Found"
            />
          }
        >
          <Meta title="Title" description={false} />
          <Row style={{ marginTop: "10px" }} className="gutter-row">
            <Col>
              <Tag color="Blue">Movie</Tag>
            </Col>
          </Row>
        </Card>
      </div>
    </Col>
  );
};

