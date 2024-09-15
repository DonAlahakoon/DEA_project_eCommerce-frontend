import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Row, Col, message, Button, Typography, Modal } from 'antd';
import { addNewProduct, getProductsByCategoryId,updateProduct } from '../Services/productService';
import { getCategoryById } from '../../../category-mfe/src/Services/categoryService';
import '../styles/productList.css';
import ProductForm from './ProductForm';

const { Meta } = Card;
const { Title } = Typography;

const ProductList = () => {
  const { categoryId } = useParams(); // Get categoryId from the URL
  const [products, setProducts] = useState([]); // Initialize products as an empty array
  const [categoryName, setCategoryName] = useState(''); // To store the category name
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    fetchProducts();
    fetchCategoryName();
  }, [categoryId]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getProductsByCategoryId(categoryId, token);
      if (response && response.data) {
        setProducts(response.data); // Set products to the data array
      } else {
        setProducts([]); // In case of an empty response, set products to an empty array
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      message.error('Failed to fetch products.');
      setProducts([]); // Handle the error by setting products to an empty array
    }
  };

  const fetchCategoryName = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getCategoryById(categoryId, token);
      if (response && response.data) {
        setCategoryName(response.data.data.name); // Set the category name
      } else {
        setCategoryName(''); // Handle empty category name
      }
    } catch (error) {
      console.error("Error fetching category:", error);
      message.error('Failed to fetch category.');
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to ProductDetail page
  };

  const handleAddNewProduct = () => {
    setEditingProduct(null);
    setIsModalVisible(true);
  };

  const handleFormSubmit = async (productData) => {
    try {
      const token = localStorage.getItem('token');
      if (editingProduct) {
        await updateProduct(editingProduct.id, productData, token);
        message.success('Product updated successfully.');
      } else {
        await addNewProduct(productData, token);
        message.success('Product added successfully.');
      }
      setIsModalVisible(false);
      fetchProducts();
    } catch (error) {
      message.error('Failed to save product.');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="product-list">
      <div className="product-list-header">
        <Title level={2}>{categoryName}</Title>
        <Button type="primary" onClick={handleAddNewProduct}>
          Add New Product
        </Button>
      </div>
      <Row gutter={[16, 16]}>
        {products.data.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={4} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.photoURL || 'placeholder.jpg'} />}
              onClick={() => handleProductClick(product.id)}
              className="product-card"
            >
              <Meta title={product.name} description={`Price: $${product.price}`} />
            </Card>
          </Col>
        ))}
      </Row>
      <Modal
        title={editingProduct ? "Edit Product" : "Add New Product"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductForm category={editingProduct} onFormSubmit={handleFormSubmit} />
      </Modal>
    </div>
  );
};

export default ProductList;

