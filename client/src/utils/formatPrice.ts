export default function formatPrice(price: number): string{
    return new Intl.NumberFormat("sv-SE", { useGrouping: true }).format(price);
}