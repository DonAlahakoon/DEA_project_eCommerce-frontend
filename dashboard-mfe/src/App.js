import React from "react";
import { Layout } from "antd";
import AppBar from "./Components/AppBar";


function Dashboard() {
  console.log("Rendering Dashboard..."); // Debug log to check if the component renders



  return (
    <Layout>
        <AppBar style={{ backgroundColor: '#1890ff', color: '#fff' }} />
    </Layout>
  );
}

export default Dashboard;

