export interface ProductInputDTO {
     name?: string,
     price?: number,
     amount?: number
}

export interface ProductInsert extends ProductInputDTO {
    id?: string
}