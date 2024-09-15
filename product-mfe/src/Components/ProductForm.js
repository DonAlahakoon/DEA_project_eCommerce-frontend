import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';

const ProductForm = ({ product = {}, onFormSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: product?.name || '',
      description: product?.description || '',
      photoURL: product?.photoURL || '',
      quantity: product?.quantity || '',
      categoryId: product?.categoryId || '',
      price: product?.price || ''
    }); 
  }, [product, form]);

  const handleSubmit = async (values) => {
    try {
      onFormSubmit(values);
      form.resetFields(); // Reset form after submit
    } catch (error) {
      message.error('Failed to save product.');
    }
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="name"
        label="Product Name"
        rules={[{ required: true, message: 'Please enter a product name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please enter a description' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="photoURL"
        label="Photo URL"
        rules={[{ required: true, message: 'Please enter a photo URL' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="quantity"
        label="No of items"
        rules={[{ required: true, message: 'Please enter the quantity' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="categoryId"
        label="Category Id"
        rules={[{ required: true, message: 'Please enter the category id' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: 'Please enter price' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {product?.id ? 'Update Product' : 'Add Product'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
