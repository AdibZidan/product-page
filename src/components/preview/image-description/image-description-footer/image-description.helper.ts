export const decrementOnlyIfAboveZero = (quantity: number): number =>
  quantity <= 0 ?
    quantity :
    quantity - 1;
