import React from "react";
import { Layout } from "antd";
import AppBar from "../../dashboard-mfe/src/Components/AppBar";
import CategoryList from "./Components/CategoryList";
import { useState } from "react";
import CategoryForm from "./Components/CategoryForm";

const { Content } = Layout;

function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  console.log("Rendering Dashboard..."); // Debug log to check if the component renders

  return (
    <Layout style={{margin:'0'}}>
        <AppBar style={{ backgroundColor: '#1890ff', color: '#4CAF50' }} />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
            padding: '20px',
            minHeight: '100vh',
            backgroundColor: '#fff'
          }}
        >
          <h1>Main categories</h1> {/* Add some text to see if it's rendering */}
          <CategoryList />
          {isFormVisible && (
            <CategoryForm
              category={selectedCategory}
              onClose={() => setFormVisible(false)}
            />
          )}
        </Content>
    </Layout>
  );
}

export default CategoryPage;
