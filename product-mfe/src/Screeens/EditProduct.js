import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { message, Upload, Input, Button, notification, Spin } from "antd";
import "../styles/screen-css.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProductDetails,
  getProductDetailsByProductId,
  updateProductDetails,
} from "../util/Product-manipulation-util";

const { TextArea } = Input;

const EditProductScreen = () => {
  const [imageUrl, setImageUrl] = useState();
  const [productName, setProductName] = useState();
  const [unitPrice, setUnitPrice] = useState(0);
  const [noOfUnits, setNoOfUnits] = useState(0);
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [api, contextHolder] = notification.useNotification();
  const [isSpinning, setSpinning] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();
  const userId = localStorage.getItem("id")

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    setSpinning(true);

    const productDetails = await getProductDetailsByProductId(id);

    if (productDetails) {
      setProductName(productDetails.productName);
      setUnitPrice(productDetails.price);
      setNoOfUnits(productDetails.quantity);
      setDescription(productDetails.productDescription);
      setImageUrl(productDetails.image);
      setSpinning(false);
    } else {
      setSpinning(false);
      api.error({ message: "Failed to get the product!" });
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setImage(file);
  };

  const clearForm = () => {
    setDescription();
    setImage();
    setNoOfUnits(0);
    setProductName();
    setUnitPrice(0);
  };

  const updateProduct = async () => {
    setSpinning(true);

    const isCreated = await updateProductDetails(
      productName,
      noOfUnits,
      description,
      unitPrice,
      image,
      userId,
      imageUrl,
      id
    );
    if (isCreated == 201) {
      setSpinning(false);
      api.success({ message: "Successfully updated the product" });
      clearForm();
      navigate("/view-products");
    } else {
      setSpinning(false);
      api.error({ message: "Failed to update the product!" });
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const deleteProduct = async () => {
    setSpinning(true);

    const isDeleted = await deleteProductDetails(id);
    if (isDeleted == 204) {
      setSpinning(false);
      api.success({ message: "Successfully deleted the product" });
      clearForm();
      navigate("/view-products");
    } else {
      setSpinning(false);
      api.error({ message: "Failed to delete the product!" });
    }
  };

  return (
    <Spin tip="Loading" size="large" spinning={isSpinning}>
      <label className="edit-products-txt">Edit Product details - {id}</label>

      <div className="main-div-wrapper">
        {contextHolder}
        <Row>
          <Col className="image-col" span={8}>
            <div style={{ marginTop: "8vh" }}></div>
            <div className="upload-main-wrapper">
              <div className="image-tool-tip-div"></div>
              <center>
                <div className="avatar-uploader">
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      className="uploaded-image"
                    />
                  ) : (
                    <button className="upload-button" onClick={handleClick}>
                      Upload Image
                    </button>
                  )}
                </div>
              </center>
            </div>
          </Col>
          <Col span={16}>
            <div className="product-details-warpper">
              <div className="details-input">
                <Input
                  placeholder="Product Name"
                  value={productName}
                  allowClear
                  className="product-name-input"
                  onChange={(e) => setProductName(e.target.value)}
                />
                <Row>
                  <Col span={12}>
                    <input
                      type="number"
                      value={unitPrice}
                      placeholder="Unit Price"
                      className="number-input"
                      onChange={(e) => setUnitPrice(e.target.value)}
                    />
                  </Col>
                  <Col span={12}>
                    <input
                      type="number"
                      value={noOfUnits}
                      placeholder="No Of Units"
                      className="number-input"
                      onChange={(e) => setNoOfUnits(e.target.value)}
                    />
                  </Col>
                </Row>
                <TextArea
                  placeholder="Product description"
                  allowClear
                  value={description}
                  className="product-description-input"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <center>
                <Row>
                  <Col span={12}>
                    <Button
                      type="primary"
                      className="product-delete-button"
                      onClick={() => deleteProduct()}
                      danger
                    >
                      Delete Product
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button
                      type="primary"
                      className="product-delete-button"
                      onClick={updateProduct}
                    >
                      Save Product
                    </Button>
                  </Col>
                </Row>
              </center>
            </div>
          </Col>
        </Row>
      </div>
    </Spin>
  );
};

export default EditProductScreen;
