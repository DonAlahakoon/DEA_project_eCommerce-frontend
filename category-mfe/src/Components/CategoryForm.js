import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';

const CategoryForm = ({ category = {}, onFormSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: category?.name || '',
      description: category?.description || '',
      photoURL: category?.photoURL || ''
    }); 
  }, [category, form]);

  const handleSubmit = async (values) => {
    try {
      onFormSubmit(values);
      form.resetFields(); // Reset form after submit
    } catch (error) {
      message.error('Failed to save category.');
    }
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="name"
        label="Category Name"
        rules={[{ required: true, message: 'Please enter a category name' }]}
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {category?.id ? 'Update Category' : 'Add Category'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryForm;
