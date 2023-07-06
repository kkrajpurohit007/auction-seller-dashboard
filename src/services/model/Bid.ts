export interface IProductBid {
    bidId: number
    productId: number;
    name: string;
    email: string;
    mobile: string;
    bidAmount: number;
    bidDate: Date;
}

export interface IProductBidList extends IProductBid {
    dateCreated: any
}