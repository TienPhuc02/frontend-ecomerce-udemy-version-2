import { Schema } from "inspector";

export {};
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {
  interface IRequest {
    url: string;
    method: string;
    body?: { [key: string]: any };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
  }
  interface IBackendRes<T> {
    // slice(start: number, end: number): unknown;
    error?: string | string[];
    message: string;
    filteredProductCount?: number;
    statusCode?: number | string;
    products?: T;
  }
  interface IProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    ratings: number;
    images: IImageProduct[];
    category: string;
    seller: string;
    stock: number;
    numOfReview: string;
    reviews: IReviewProduct[];
    __v: number;
    createdAt: string;
    updatedAt: string;
  }
  //   interface IModelPaginate<T> {
  //     meta: {
  //       current: number;
  //       pageSize: number;
  //       pages: number;
  //       total: number;
  //     };
  //     result: T[];
  //   }
  interface IImageProduct {
    public_id: string;
    url: string;
    _id: string;
  }
  interface IReviewProduct {
    user: string;
    rating: number;
    comment: string;
    _id: string;
  }
}
