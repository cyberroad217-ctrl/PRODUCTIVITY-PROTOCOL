
import React from 'react';
import { Product } from '../types';
import { STRIPE_PAYMENT_LINK } from '../constants';
import { Star, ExternalLink, TrendingUp, Zap } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-100 hover:border-black transition-all duration-300 flex flex-col h-full rounded-sm shadow-sm hover:shadow-xl overflow-hidden">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale-[50%] group-hover:grayscale-0"
        />
        <div className="absolute top-3 left-3 bg-black text-white text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest rounded-sm">
          {product.category}
        </div>
        {product.roi && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest rounded-sm flex items-center shadow-lg">
            <TrendingUp className="w-2.5 h-2.5 mr-1" />
            {product.roi}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg leading-tight uppercase tracking-tighter">
            {product.name}
          </h3>
          <span className="font-bold text-xl text-black tabular-nums">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 text-xs mb-6 line-clamp-3 leading-relaxed font-medium">
          {product.description}
        </p>
        
        {product.demandScore && (
          <div className="mb-6">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5">
              <span>Market Demand</span>
              <span>{product.demandScore}%</span>
            </div>
            <div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden">
              <div 
                className="bg-black h-full transition-all duration-1000 group-hover:bg-blue-600" 
                style={{ width: `${product.demandScore}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <div className="flex items-center text-[10px] font-bold text-black uppercase tracking-tight mb-0.5">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{product.rating} <span className="text-gray-400 font-medium ml-1">/ 5.0</span></span>
            </div>
            <div className="text-[10px] text-gray-400 font-mono uppercase">
              {product.salesCount.toLocaleString()} Deployments
            </div>
          </div>
          <a
            href={STRIPE_PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-black text-white px-5 py-2.5 text-[10px] font-black hover:bg-zinc-800 transition-all rounded-sm tracking-[0.2em] shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>ACCESS</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
