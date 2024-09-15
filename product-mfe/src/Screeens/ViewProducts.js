import React, { useEffect, useState } from "react";
import { Col, Row, Avatar, Card, Spin } from "antd";
import {EditOutlined,EllipsisOutlined,SettingOutlined,ShoppingCartOutlined,MoneyCollectOutlined,} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {getProductsForCustomer,getProductsForSuppiler,} from "../util/Product-manipulation-util";
import { USER_TYPES } from "../contants/contants";

const { Meta } = Card;

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [isSpinning, setSpinning] = useState(false);

  const userType = localStorage.getItem("type");
  const userId = localStorage.getItem("id");

  const navigate = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      setSpinning(true);   
      try {
        const fetchedProducts = userType === USER_TYPES.SUPPLIER
          ? await getProductsForSuppiler(userId)
          : await getProductsForCustomer();
  
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setSpinning(false); 
      }
    };
  
    getAllProducts();
  }, [userType, userId]);



  return (
    <Spin tip="Loading" size="large" spinning={isSpinning}>
      <div>
        {products?.length == 0 ? (
          <h1 className="product-empty-text">Product List is Empty!!!</h1>
        ) : (
          <Row justify="space-around">
            {products?.map((product, index) => (
              <Col span={5} key={index}>
                <Card
                  className="product-card"
                  cover={
                    product.image ? (
                      <img src={product.image} />
                    ) : (
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    )
                  }
                  actions={
                    userType == USER_TYPES.SUPPLIER
                      ? [
                          <EditOutlined
                            key="Edit"
                            onClick={() =>
                              navigate(`/editProducts/${product.productId}`)
                            }
                          />,
                        ]
                      : [
                          <ShoppingCartOutlined key="cart" />,
                          <MoneyCollectOutlined key="Buy Now" />,
                        ]
                  }
                >
                  <Meta
                    title={product?.productName}
                    description={
                      <>
                        <label>{product?.productDescription}</label>
                        <br />
                        <label>Unit Price: Rs.{product?.price}</label> <br />
                        <label>Quantity : {product?.quantity}</label>
                        <br />
                        {product?.supplier ? (
                          <label>Supplier : {product?.supplier} </label>
                        ) : null}
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </Spin>
  );
};

export default ViewProducts;
