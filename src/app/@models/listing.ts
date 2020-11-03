
export class Price {
    date: string;
    base_price: number;
}

export class Listing {
    id: string;
    owner_id: string;
    name: string;
    slug: string;
    description: string;
    adults: number;
    children: number;
    is_pets_allowed: boolean;
    base_price: number;
    cleaning_fee: number;
    image_url: string;
    weekly_discount: number;
    monthly_discount: number;
    special_prices: Price[];

}
