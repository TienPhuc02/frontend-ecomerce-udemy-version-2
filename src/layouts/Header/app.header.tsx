"use client";
import Image from "next/image";
import React from "react";
import { Input } from "antd";
import { Button, Badge } from "antd";
const HeaderLayout = () => {
  return (
    <div className="header-container min-h-[64px] flex items-center">
      <div className="header-logo min-w-[300px] flex items-center pl-[40px]">
        <Image
          className="mr-[12px]"
          src={
            "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          }
          alt="logo-app"
          width={40}
          height={40}
        />
        <span className="font-medium">Ant Design</span>
      </div>
      <div className="header-input-search min-w-[800px]">
        <Input placeholder="Enter Product Name....." variant="borderless" />
      </div>
      <div className="header-cart mr-[100px]">
        <Badge count={3}>
          <Button>Giỏ Hàng</Button>
        </Badge>
      </div>
      <div className="header-authenticated">
        <Button type="primary">Đăng Nhập</Button>
      </div>
    </div>
  );
};

export default HeaderLayout;
