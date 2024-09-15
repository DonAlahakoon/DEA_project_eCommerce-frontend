import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { message, Upload, Input, Button, notification, Spin } from "antd";
import "../styles/screen-css.css";
import { saveProductDetails } from "../util/Product-manipulation-util";
import { HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const OrderScreen = () => {
  const [imageUrl, setImageUrl] = useState();
  const [productName, setProductName] = useState();
  const [unitPrice, setUnitPrice] = useState(0);
  const [noOfUnits, setNoOfUnits] = useState(0);
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [api, contextHolder] = notification.useNotification();
  const [isSpinning, setSpinning] = useState(false);
  const userId = localStorage.getItem("id");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("add")
  },[])

  const handleChange = (e) => {
    console.log(e.target.files)
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
  const saveProduct = async () => {
    if (!productName || !unitPrice || !noOfUnits || !description) {
      api.error({ message: "Please fill in all required fields!" });
      return;
    }

    setSpinning(true);
    const isCreated = await saveProductDetails(
      productName,
      noOfUnits,
      description,
      unitPrice,
      image,
      userId
    );
    if (isCreated == 201) {
      setSpinning(false);
      api.success({ message: "Successfully added a new product" });
      clearForm();
      navigate("/view-products");
    } else {
      setSpinning(false);
      api.error({ message: "Failed to insert the product!" });
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <Spin tip="Loading" size="large" spinning={isSpinning}>
      <div className="main-div-wrapper">
        {contextHolder}
        <Row>
          <Col span={8} className="image-col">
            <div className="add-product-main-div">
              <label className="add-product-text">Add a New Product</label>
            </div>
            <div className="upload-main-wrapper">
              <div className="image-tool-tip-div">
                <label className="imageupload-tooltip">
                  Upload an image of the product
                </label>
              </div>
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
              <div>
                <label className="details-topic">Product Details</label>
              </div>
              <div className="details-input">
                <Input
                  placeholder="Product Name"
                  allowClear
                  className="product-name-input"
                  onChange={(e) => setProductName(e.target.value)}
                />
                <Row>
                  <Col span={12}>
                    <input
                      type="number"
                      placeholder="Unit Price"
                      className="number-input"
                      onChange={(e) => setUnitPrice(e.target.value)}
                    />
                  </Col>
                  <Col span={12}>
                    <input
                      type="number"
                      placeholder="No Of Units"
                      className="number-input"
                      onChange={(e) => setNoOfUnits(e.target.value)}
                    />
                  </Col>
                </Row>
                <TextArea
                  placeholder="Product description"
                  allowClear
                  className="product-description-input"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <center>
                <Button
                  type="primary"
                  className="product-delete-button"
                  onClick={() => saveProduct()}
                >
                  Add Product
                </Button>
              </center>
            </div>
          </Col>
        </Row>
      </div>
    </Spin>
  );
};

export default OrderScreen;
