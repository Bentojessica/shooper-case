export interface ProductInputDTO {
     name?: string,
     price?: number,
     amout?: number
}

export interface ProductInsert extends ProductInputDTO {
    id?: string
}