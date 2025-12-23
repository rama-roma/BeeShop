import { baseApi } from "../../utils/api";

export interface Color {
    id: number;
    colorName: string;
    colorCode: string;
}
interface ColorsResponse{
    colors: Color[]
}

export const colorApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getColors: builder.query<ColorsResponse, void>({   
            query: () => "/Color/get-colors"
        }),         
    })
});
export const {
    useGetColorsQuery
} = colorApi;