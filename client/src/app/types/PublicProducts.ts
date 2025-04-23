export interface ProductForCard{
    id: number,
    product_name: string,
    brand: string,
    img: string,
    price: number,
    campaign_price: number | null,
    slug: string
}