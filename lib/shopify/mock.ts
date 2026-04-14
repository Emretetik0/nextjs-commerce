import { Product, Collection, Menu, Page, Cart } from './types';

const mockProducts: Product[] = [
  {
    id: 'gid://shopify/Product/1',
    handle: 'nextjs-t-shirt',
    availableForSale: true,
    title: 'Next.js T-Shirt',
    description: 'High-quality cotton t-shirt with Next.js logo.',
    descriptionHtml: '<p>High-quality cotton t-shirt with Next.js logo.</p>',
    options: [{ id: '1', name: 'Size', values: ['S', 'M', 'L', 'XL'] }],
    priceRange: {
      maxVariantPrice: { amount: '25.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '25.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1',
        title: 'S',
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: 'S' }],
        price: { amount: '25.0', currencyCode: 'USD' }
      }
    ],
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7487%2Fproducts%2Ft-shirt-1.png&w=1200&q=75',
        altText: 'Next.js T-Shirt',
        width: 1200,
        height: 1200
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7487%2Fproducts%2Ft-shirt-1.png&w=1200&q=75',
      altText: 'Next.js T-Shirt',
      width: 1200,
      height: 1200
    },
    seo: { title: 'Next.js T-Shirt', description: 'Next.js T-Shirt' },
    tags: [],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'gid://shopify/Product/2',
    handle: 'acme-cup',
    availableForSale: true,
    title: 'Acme Cup',
    description: 'The best cup for your morning coffee.',
    descriptionHtml: '<p>The best cup for your morning coffee.</p>',
    options: [{ id: '2', name: 'Color', values: ['White', 'Black'] }],
    priceRange: {
      maxVariantPrice: { amount: '15.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '15.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'gid://shopify/ProductVariant/2',
        title: 'White',
        availableForSale: true,
        selectedOptions: [{ name: 'Color', value: 'White' }],
        price: { amount: '15.0', currencyCode: 'USD' }
      }
    ],
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7487%2Fproducts%2Fcup-black.png&w=1200&q=75',
        altText: 'Acme Cup',
        width: 1200,
        height: 1200
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7487%2Fproducts%2Fcup-black.png&w=1200&q=75',
      altText: 'Acme Cup',
      width: 1200,
      height: 1200
    },
    seo: { title: 'Acme Cup', description: 'Acme Cup' },
    tags: [],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'gid://shopify/Product/3',
    handle: 'sticker-pack',
    availableForSale: true,
    title: 'Acme Sticker Pack',
    description: 'A pack of high-quality stickers.',
    descriptionHtml: '<p>A pack of high-quality stickers.</p>',
    options: [{ id: '3', name: 'Pack Size', values: ['5', '10'] }],
    priceRange: {
      maxVariantPrice: { amount: '5.0', currencyCode: 'USD' },
      minVariantPrice: { amount: '5.0', currencyCode: 'USD' }
    },
    variants: [
      {
        id: 'gid://shopify/ProductVariant/3',
        title: '5 Pack',
        availableForSale: true,
        selectedOptions: [{ name: 'Pack Size', value: '5' }],
        price: { amount: '5.0', currencyCode: 'USD' }
      }
    ],
    images: [
      {
        url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7487%2Fproducts%2Fstickers-1.png&w=1200&q=75',
        altText: 'Sticker Pack',
        width: 1200,
        height: 1200
      }
    ],
    featuredImage: {
      url: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7487%2Fproducts%2Fstickers-1.png&w=1200&q=75',
      altText: 'Sticker Pack',
      width: 1200,
      height: 1200
    },
    seo: { title: 'Sticker Pack', description: 'Sticker Pack' },
    tags: [],
    updatedAt: new Date().toISOString()
  }
];

export async function getCollectionProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  return mockProducts.find(p => p.handle === handle);
}

export async function getCollections(): Promise<Collection[]> {
  return [
    {
      handle: 'all',
      title: 'All',
      description: 'All products',
      seo: { title: 'All', description: 'All products' },
      path: '/search/all',
      updatedAt: new Date().toISOString()
    }
  ];
}

export async function getMenu(): Promise<Menu[]> {
  return [
    { title: 'Home', path: '/' },
    { title: 'All', path: '/search/all' }
  ];
}

export async function getPage(): Promise<Page> {
  return {
    id: '1',
    title: 'About',
    handle: 'about',
    body: 'About us',
    bodySummary: 'About us',
    seo: { title: 'About', description: 'About us' },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

export async function getCart(): Promise<Cart | undefined> {
  return undefined;
}
