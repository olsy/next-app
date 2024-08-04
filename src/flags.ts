import { unstable_flag as flag } from '@vercel/flags/next';

export const showPrice = flag({
  key: 'show-price',
  decide: () => process.env.FF_SHOW_PRODUCT_PRICE === 'true',
});
