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
interface IProps {
  data: IProduct[];
}

const MainHomeLayout = (props: IProps) => {
  console.log("🚀 ~ MainHomeLayout ~ props:", props);
  const NextArrow = (props: any) => {
    return (
      <ButtonMUI
        variant="outlined"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          backgroundColor: "#f2f2f2",
          color: "black",
          border: "unset",
          right: 0,
          top: "45%",
          zIndex: 2,
          minWidth: 30,
          width: 50,
          ":hover": {
            border: "unset",
            backgroundColor: "#f2f2f2",
          },
        }}
      >
        <ChevronRightIcon />
      </ButtonMUI>
    );
  };

  const PrevArrow = (props: any) => {
    return (
      <ButtonMUI
        variant="outlined"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          top: "45%",
          backgroundColor: "#f2f2f2",
          color: "black",
          border: "unset",
          zIndex: 2,
          minWidth: 50,
          width: 30,
          ":hover": {
            border: "unset",
            backgroundColor: "#f2f2f2",
          },
        }}
      >
        <ChevronLeftIcon />
      </ButtonMUI>
    );
  };

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="min-h-[500px] pt-[50px] max-w-[1000px] mx-auto">
      <div className="text-[30px] mb-5">Danh Sách Sản Phẩm</div>
      <Slider {...settings}>
        {/* <div className="list-product grid grid-cols-4 gap-3"> */}
        {props.data.map((product) => {
          return (
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
                  <p className="mb-2 min-h-[70px] text-center">{product.name}</p>
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
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default MainHomeLayout;
