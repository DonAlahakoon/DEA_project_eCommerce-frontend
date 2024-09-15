import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, message, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getAllCategories, deleteCategory, addNewCategory, updateCategory } from '../Services/categoryService';
import CategoryForm from './CategoryForm';
import '../styles/categoryList.css';

const { Meta } = Card;

const CategoryList = () => {
  const [categories, setCategories] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await getAllCategories(token);
      console.log("Response:",response);
      if (response && response.data) {
        setCategories(response.data);
        console.log("Categories:",categories);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      message.error('Failed to fetch categories.');
      setCategories([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await deleteCategory(id, token);
      message.success('Category deleted successfully.');
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
      message.error('Failed to delete category.');
    }
  };

  const handleAddNew = () => {
    setEditingCategory(null);
    setIsModalVisible(true);
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setIsModalVisible(true);
  };

  const handleFormSubmit = async (categoryData) => {
    try {
      const token = localStorage.getItem('token');
      if (editingCategory) {
        await updateCategory(editingCategory.id, categoryData, token);
        message.success('Category updated successfully.');
      } else {
        await addNewCategory(categoryData, token);
        message.success('Category added successfully.');
      }
      setIsModalVisible(false);
      fetchCategories();
    } catch (error) {
      message.error('Failed to save category.');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCategoryClick = (categoryId) => {
    // Use window.location.href to navigate to the product-mfe
    window.location.href = `product/${categoryId}`;
  };

  if (categories === null) {
    return <div>Loading categories...</div>;
  }

  if (categories.length === 0) {
    return <div>No categories found.</div>;
  }

  return (
    <div className="category-list">
      <Button className="new-category-btn" type="primary" onClick={handleAddNew} style={{ marginBottom: '20px' }}>
        Add New Category
      </Button>
      <Row gutter={[16, 16]}>
        {console.log("Category:",categories)}
        {categories.data.map((category) => (
          <Col xs={24} sm={12} md={8} lg={6} key={category.id}>
            <Card
              hoverable
              cover={<img alt={category.name} src={category.photoURL} />}
              onClick={() => handleCategoryClick(category.id)}// Handle category selection
              actions={[
                <Button type="primary" ghost className="edit-category-btn" onClick={(e) => {
                  e.stopPropagation(); // Stop event propagation
                  handleEditCategory(category);
                }}>
                  Edit
                </Button>,
                <Button type="primary" danger ghost onClick={(e) => {
                  e.stopPropagation(); // Stop event propagation
                  handleDelete(category.id);
                }}>
                  Delete
                </Button>,
              ]}
            >
              <Meta title={category.name} description={category.description} />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={editingCategory ? "Edit Category" : "Add New Category"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <CategoryForm category={editingCategory} onFormSubmit={handleFormSubmit} />
      </Modal>
    </div>
  );
};

export default CategoryList;
