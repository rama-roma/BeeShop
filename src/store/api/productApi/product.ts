import { baseApi } from "../../utils/api";

export interface Product {
  id: number;
  name: string;
  price: number;
  productInMyCart: []
}

interface ProductsResponse {
  products: Product[];
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, void>({
      query: () => "/Product/get-products",
    }),

    getProductById: builder.query<Product, number>({
      query: (id) => `/Product/get-product-by-id?id=${id}`,
      transformResponse: (res: { data: Product }) => res.data,
    }),

    getProductByIdSubCategory: builder.query<Product[], number>({
      query: (subCategoryId) => `/Product/get-products?SubcategoryId=${subCategoryId}`,
      transformResponse: (res: { data: Product[] }) => res.data,
    }),

  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductByIdSubCategoryQuery
} = productApi;
