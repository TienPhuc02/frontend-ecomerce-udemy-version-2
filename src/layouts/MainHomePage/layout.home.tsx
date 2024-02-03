"use client";
import React from "react";
import { Button, Image, Card, Rate } from "antd";
import Slider from "react-slick";
import { Settings } from "react-slick";
import ButtonMUI from "@mui/material/Button/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaginationComponent from "@/components/pagination/component.pagination";
interface IProps {
  data: IProduct[];
  filteredProductCount: number | undefined;
  message: string;
}

const MainHomeLayout = (props: IProps) => {
  return (
    <div className="min-h-[550px] pt-[50px] max-w-[1000px] mx-auto">
      <div className="text-[30px] mb-5">Danh Sách Sản Phẩm</div>
      <div className="list-product grid grid-cols-3 gap-3">
        {props.data.map((product) => {
          return (
            <div key={product._id} className="mr-3 max-w-[300px]">
              <Card hoverable>
                <div className="item-product min-h-[300px] ">
                  <Image
                    height={100}
                    className="object-cover"
                    width={250}
                    src={product?.images[1]?.url}
                    alt="Image Product"
                  />
                  <p className="mb-2 min-h-[70px] text-center">
                    {product.name}
                  </p>
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
          );
        })}
      </div>
      <PaginationComponent total={props.filteredProductCount} />
    </div>
  );
};

export default MainHomeLayout;
