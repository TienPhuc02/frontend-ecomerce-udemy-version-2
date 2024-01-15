"use client";
import React from "react";
import { Button, Image, Card, Rate, Spin } from "antd";
// import Image from "next/image";
interface IProps {
  data: IProduct[];
}
const MainHomeLayout = (props: IProps) => {
  console.log("🚀 ~ MainHomeLayout ~ props:", props);
  return (
    <div className="min-h-[500px] pt-[50px] max-w-[1200px] mx-auto">
      <div className="text-[30px] mb-5">Danh Sách Sản Phẩm</div>
      <div className="list-product grid grid-cols-4">
        {props.data.map((product) => {
          return (
            <div key={product._id}>
              <div key={product._id}>
                <Card hoverable>
                  <div className="item-product min-h-[300px] ">
                    <Image
                      height={100}
                      className="object-cover"
                      width={250}
                      src={product?.images[1]?.url}
                      alt="Image Product"
                    />
                    <p className="mb-2 min-h-[70px]">{product.name}</p>
                    <div className="rating-num-of-review flex">
                      <Rate
                        disabled
                        defaultValue={product.ratings}
                        className="mr-2"
                      />
                      <p>({product.numOfReview})</p>
                    </div>
                    <p className="text-[25px] mt-2 font-medium">
                      ${product.price}
                    </p>
                    <Button className=" w-full " shape="round" size={"large"}>
                      Xem chi tiết sản phẩm
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainHomeLayout;
