//This will be use in product Data

export function calculateDiscountedPrice(originalPrice, discount) {
    let discountedPrice = originalPrice - (originalPrice * discount);
    return discountedPrice;
}

export function calculateDiscountAmount(originalPrice, discount) {
    let discountAmount = originalPrice * discount;
    return discountAmount;
}
