"use client";
import React, { useState } from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
interface IProps {
  total: number | undefined;
}
const PaginationComponent = (props: IProps) => {
  console.log("🚀 ~ PaginationComponent ~ props:", props.total);
  const router = useRouter();

  const showTotal: PaginationProps["showTotal"] = (total) =>
    `Total ${props.total} items`;

  const onChange = (currentPage: number, pageSize: number) => {
    router.push(`/?currentPage=${currentPage}&pageSize=${pageSize}`);
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="max-w-[1000px]">
        <Pagination
          onChange={onChange}
          showTotal={showTotal}
          size="small"
          total={props.total}
          defaultPageSize={3}
          showSizeChanger
          showQuickJumper
          pageSizeOptions={[3, 6, 8]}
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
