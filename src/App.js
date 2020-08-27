
import React, { useEffect, useState } from 'react';
import { 
  Layout, 
  Input, 
  Row, 
  Col, 
  Card, 
  Tag, 
  Spin, 
  Alert, 
  Modal, 
  Typography 
} from 'antd';
import 'antd/dist/antd.css';

const API_KEY = 'cexxxxxxx6';
const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Meta } = Card;
const TextTitle = Typography.Title;









function App() {
  return (
      <div className="App">
          <Layout className="layout">
              <Header>
                  <div style={{ textAlign: 'center'}}>
                      <TextTitle style={{color: '#ffffff', marginTop: '15px'}} level={3}>GFI-OMBD Movies</TextTitle>
                  </div>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                  <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                      
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}> Juan Martin OMDB Movies ©2020</Footer>
          </Layout>
      </div>
  );
}

export default App;
