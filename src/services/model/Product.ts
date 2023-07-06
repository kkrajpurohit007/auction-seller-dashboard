export interface IProduct {
    productId: number;
    name: string;
    shortDiscription: string;
    detailDiscription: string;
    category: string;
    staringPrice: number;
    bidStartDate: Date;
}

export interface IProductList extends IProduct {
    dateCreated: any
}