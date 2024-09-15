// import { HttpStatusCode } from "axios";
// import { syscoShopProductMS } from "../apiInstances/apiIntance";
// import { uploadToS3Bucket } from "./uploadImagetoS3";
// import { HTTP_METHOD } from "../contants/contants";

// export const saveProductDetails = async (productName,noOfUnits,description,unitPrice,image,userId) => {
//     const url = await uploadToS3Bucket(image);
//     const productDetails = {
//       productName: productName,
//       quantity: noOfUnits,
//       productDescription: description,
//       price: unitPrice,
//       image: url,
//       supplierId: userId,
//     };

//     return new Promise((resolve, reject) => {
//       syscoShopProductMS.request({
//         url:'/product',
//         method: HTTP_METHOD.POST,
//         data: productDetails
//       }).then((response) => {
//         resolve(response.status)
  
//       })
//       .catch((error) => {
//         reject(error)
//       });
//     })

//   };

// export const updateProductDetails = async (productName,noOfUnits,description,unitPrice,image,userId,imageUrl,id) => {
//     let url;

//     if (image) {
//       url = await uploadToS3Bucket(image);
//     } else {
//       url = imageUrl;
//     }

//     const productDetails = {
//       productName: productName,
//       quantity: noOfUnits,
//       productDescription: description,
//       price: unitPrice,
//       image: url,
//       supplierId: userId,
//     };

//       return syscoShopProductMS
//       .request({
//         url: `/product/${id}`,
//         method: HTTP_METHOD.PUT,
//         data: productDetails,
//       })
//       .then((response) => {
//         return response.status

//       })
//       .catch((error) => {
//         return error;
//       });
    
//   };

// export const deleteProductDetails = (id) => {

//     return new Promise((resolve, reject) => {
//       syscoShopProductMS
//       .request({
//         url: `/product/${id}`,
//         method: HTTP_METHOD.DELETE,
//       })
//       .then((response) => {
//         resolve(response.status);
//         clearForm();
//       })
//       .catch((error) => {
//         reject(error);
//       });
//     })
//   }

//   export const getProductsForSuppiler = async(supplierId) => {
//       return syscoShopProductMS.request({
//         url:'/product',
//         method: HTTP_METHOD.GET,
//         params: {
//           supplierId: supplierId
//         }
//       }).then((result) => {
//         return result?.data?.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }

//   export const getProductsForCustomer = async () => {
//       return syscoShopProductMS.request({
//         url:'/product',
//         method: HTTP_METHOD.GET,
//       }).then((result) => {
//         return result?.data?.data;
//       })
//       .catch((error) => {
//         return error;
//       });
//   }

// export const getProductDetailsByProductId = (id) => {
//   return syscoShopProductMS
//     .request({
//       url: `/product/${id}`,
//       method: HTTP_METHOD.GET,
//     })
//     .then((response) => {
//       return response?.data?.data;
//     })
//     .catch((error) => {
//       return error
//     });
// }