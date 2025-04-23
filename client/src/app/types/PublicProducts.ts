export interface ProductForCard{
    id: number,
    product_name: string,
    brand: string,
    img: string,
    price: number,
    campaign_price: number | null,
    slug: string
}

export interface ProductForDetails extends ProductForCard {
    description: string,
    supercategory: string,
    category: string
}