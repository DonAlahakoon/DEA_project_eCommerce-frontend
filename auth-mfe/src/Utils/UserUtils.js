import { syscoShopBff } from "../apiInstances/apiInstence";
import { HTTP_METHOD } from "../contants/contants";

export const saveUsersInDB = async (
  username,
  address,
  userType,
  fullName,
  companyName,
  poolId
) => {
  const userDetails = {
    email: username,
    address: address,
    userType: userType,
    fullName: fullName,
    companyName: companyName,
    poolId: poolId,
  };
  return syscoShopBff
    .request({
      url: "/user/save",
      method: HTTP_METHOD.POST,
      data: userDetails,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const userConfirmation = async (username, userOtp) => {
  const details = {
    username: username,
    userOtp: userOtp,
  };
  return syscoShopBff
    .request({
      url: "/user/confirm",
      method: HTTP_METHOD.POST,
      data: details,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const registerUserDetails = async (
  username,
  address,
  userType,
  fullName,
  companyName,
  password
) => {
  const userDetails = {
    email: username,
    password: password,
    address: address,
    userType: userType,
    fullName: fullName,
    companyName: companyName,
  };
  return syscoShopBff
    .request({
      url: "/user/register",
      method: HTTP_METHOD.POST,
      data: userDetails,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const userLogin = async (username, password) => {
  return syscoShopBff
    .request({
      url: "/user/login",
      method: "post",
      data: { username: username, password: password },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
