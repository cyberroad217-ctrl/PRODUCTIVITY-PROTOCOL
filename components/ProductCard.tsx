
import React from 'react';
import { Product } from '../types';
import { STRIPE_PAYMENT_LINK } from '../constants';
import { Star, ShoppingCart, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-100 hover:border-black transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-1 font-bold uppercase">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg leading-tight group-hover:underline cursor-pointer">
            {product.name}
          </h3>
          <span className="font-bold text-xl">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-xs text-gray-400">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-black font-semibold">{product.rating}</span>
            <span className="mx-1">•</span>
            <span>{product.salesCount.toLocaleString()} sales</span>
          </div>
          <a
            href={STRIPE_PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-black text-white px-3 py-1.5 text-xs font-bold hover:bg-gray-800 transition-colors rounded-sm"
          >
            <span>BUY NOW</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
