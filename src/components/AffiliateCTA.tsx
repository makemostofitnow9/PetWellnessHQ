import Image from 'next/image';
import { ExternalLink, ShoppingCart } from 'lucide-react';

interface AffiliateCTAProps {
  productName: string;
  description: string;
  amazonUrl: string;
  chewyUrl?: string;
  imageUrl?: string;
  price?: string;
}

export default function AffiliateCTA({ productName, description, amazonUrl, chewyUrl, imageUrl, price }: AffiliateCTAProps) {
  return (
    <div className="my-8 rounded-xl border border-amber-200 bg-amber-50 overflow-hidden not-prose">
      <div className="px-4 py-2 bg-amber-100 border-b border-amber-200">
        <span className="text-xs font-semibold text-amber-800 uppercase tracking-wide">Our Pick — Recommended Product</span>
      </div>
      <div className="p-5 flex gap-4 items-start">
        {imageUrl && (
          <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white border border-amber-100">
            <Image src={imageUrl} alt={productName} fill className="object-contain p-1" sizes="80px" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 text-base">{productName}</h4>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">{description}</p>
          {price && <p className="text-brand-primary font-semibold text-sm mt-1">{price}</p>}
          <div className="flex flex-wrap gap-2 mt-3">
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <ShoppingCart size={16} />
              Check Price on Amazon
            </a>
            {chewyUrl && (
              <a
                href={chewyUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink size={14} />
                View on Chewy
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="px-5 pb-3 text-xs text-amber-700">This article contains affiliate links. We may earn a commission at no extra cost to you.</p>
    </div>
  );
}
