export interface PucharseInputDTO {
     nameProduct?: string,
     amount?: number,
     price?: number,
     productId?: string
}

export interface PucharseInsert extends PucharseInputDTO {
    id?: string,
    totalPrice?: number
}
