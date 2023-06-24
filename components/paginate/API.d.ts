declare namespace APIComPaginate {

    type Props = {
        params?: {
            page?: number;
        },
        uri: string;
        total: number;
        size: number;
        page: number;
    }

}