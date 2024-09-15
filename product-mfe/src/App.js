import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import AppBar from "../../dashboard-mfe/src/Components/AppBar";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ margin: '0' }}>
      <AppBar />
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
          padding: '20px',
          minHeight: '100vh',
          backgroundColor: '#fff'
        }}
      >
        <Routes>
          {/* Route to display ProductList */}
          <Route path="/:categoryId" element={<ProductList />} />
          {/* Route to display ProductDetail based on product ID */}
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;

