import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct, deleteProduct } from '../Services/productService';
import { Card, Spin, message, Button, InputNumber, Row, Col, Modal } from 'antd';
import '../styles/productDetail.css'; // Add a CSS file for custom styles
import ProductForm from './ProductForm';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getProductById(productId, token);
      if (response && response.data) {
        setProduct(response.data.data);
      } else {
        setProduct(null);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      message.error('Failed to fetch product.');
    }
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    // Implement Add to Cart functionality (mocked for now)
    message.success(`${product.name} added to cart.`);
  };

  const handleEditProduct = () => {
    setEditingProduct(product);
    setIsModalVisible(true);
  };

  const handleDeleteProduct = async () => {
    try {
      const token = localStorage.getItem('token');
      await deleteProduct(product.id, token);
      message.success('Product deleted successfully.');
      navigate(-1); // Redirect to product list after deletion
    } catch (error) {
      message.error('Failed to delete product.');
    }
  };

  const handleFormSubmit = async (productData) => {
    try {
      const token = localStorage.getItem('token');
      await updateProduct(productId, productData, token);
      message.success('Product updated successfully.');
      setIsModalVisible(false);
      fetchProduct(); // Refresh product details after updating
    } catch (error) {
      message.error('Failed to update product.');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!product) {
    return <Spin tip="Loading product details..." />;
  }

  return (
    <Card className="product-detail-card" title={product.name}>
      <Row gutter={16}>
        <Col xs={24} md={10}>
          <img 
            alt={product.name} 
            src={product.photoURL || 'placeholder.jpg'} 
            className="product-image"
          />
        </Col>
        <Col xs={24} md={14}>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Quantity Available:</strong> {product.quantity}</p>
          <p><strong>Created At:</strong> {new Date(product.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(product.updatedAt).toLocaleString()}</p>
          <div className="action-section">
            <InputNumber 
              min={1} 
              max={product.quantity} 
              value={quantity} 
              onChange={handleQuantityChange}
            />
            <Button 
              type="primary" 
              onClick={handleAddToCart} 
              style={{ marginLeft: '10px' }}
            >
              Add to Cart
            </Button>
            <Button 
              type="primary" ghost
              onClick={handleEditProduct} 
              style={{ marginLeft: '10px' }}
            >
              Edit Product
            </Button>
            <Button 
              type="primary" danger ghost
              onClick={handleDeleteProduct} 
              style={{ marginLeft: '10px' }}
            >
              Delete Product
            </Button>
          </div>
        </Col>
      </Row>

      <Modal
        title="Edit Product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductForm 
          product={editingProduct} 
          onFormSubmit={handleFormSubmit} 
        />
      </Modal>
    </Card>
  );
};

export default ProductDetail;

