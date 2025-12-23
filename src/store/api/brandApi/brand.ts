import { baseApi } from "../../utils/api";

export interface Brand {
    id: number;
    brandName: string;
}
interface BrandsResponse{
    brands: Brand[]
}

export const brandApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBrands: builder.query<BrandsResponse, void>({
            query: () => "/Brand/get-brands"
        }),         
    })
});
export const {
    useGetBrandsQuery
} = brandApi;