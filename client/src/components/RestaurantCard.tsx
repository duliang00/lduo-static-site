import { Restaurant } from '@/lib/restaurantData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin, DollarSign, ExternalLink } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  index: number;
}

/**
 * RestaurantCard Component
 * 
 * Design: Heritage & Craft
 * - Asymmetrical hover effects with subtle scale and shadow
 * - Gold accents for premium feel
 * - Clean typography hierarchy
 * - Smooth transitions (300-400ms)
 */

export default function RestaurantCard({ restaurant, index }: RestaurantCardProps) {
  const handleVisit = () => {
    if (restaurant.externalLinks?.google) {
      window.open(restaurant.externalLinks.google, '_blank');
    }
  };

  return (
    <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30">
      {/* Card Header with Tier Badge */}
      <div className="relative p-6 pb-4">
        {/* Tier Badge */}
        <div className="absolute top-4 right-4">
          {restaurant.tier === 'featured' && (
            <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              ★ TOP PICK
            </div>
          )}
          {restaurant.tier === 'popular' && (
            <div className="bg-secondary text-foreground text-xs font-bold px-3 py-1 rounded-full">
              ★ POPULAR
            </div>
          )}
        </div>

        {/* Restaurant Name */}
        <div className="space-y-1 pr-20">
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {restaurant.name}
          </h3>
          {restaurant.chineseName && (
            <p className="text-sm text-muted-foreground chinese-text">
              {restaurant.chineseName}
            </p>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="px-6 pb-4 space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(restaurant.rating)
                    ? 'fill-primary text-primary'
                    : i < restaurant.rating
                    ? 'fill-primary text-primary opacity-50'
                    : 'text-border'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">
            {restaurant.rating.toFixed(1)}
          </span>
          <span className="text-xs text-muted-foreground">
            ({restaurant.reviews} reviews)
          </span>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2 text-sm">
          <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-foreground">{restaurant.location}</p>
            <p className="text-xs text-muted-foreground">{restaurant.postcode}</p>
          </div>
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-2 text-sm">
          <DollarSign className="w-4 h-4 text-primary" />
          <span className="text-foreground font-medium">{restaurant.priceRange}</span>
          <span className="text-muted-foreground">• {restaurant.cuisine.join(', ')}</span>
        </div>

        {/* Specialties */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
            Specialties
          </p>
          <div className="flex flex-wrap gap-1">
            {restaurant.specialty.slice(0, 3).map((spec, idx) => (
              <span
                key={idx}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
              >
                {spec}
              </span>
            ))}
            {restaurant.specialty.length > 3 && (
              <span className="text-xs text-muted-foreground px-2 py-1">
                +{restaurant.specialty.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Hours */}
        <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
          <p className="line-clamp-2">{restaurant.hours}</p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 border-t border-border/50 bg-white/50 space-y-2">
        <Button
          onClick={handleVisit}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg text-sm"
        >
          View Details
          <ExternalLink className="w-3 h-3 ml-2" />
        </Button>

        {/* External Links */}
        <div className="flex gap-2 justify-center">
          {restaurant.externalLinks?.tripadvisor && (
            <a
              href={restaurant.externalLinks.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              title="TripAdvisor"
            >
              TripAdvisor
            </a>
          )}
          {restaurant.externalLinks?.ubereats && (
            <a
              href={restaurant.externalLinks.ubereats}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              title="Uber Eats"
            >
              UberEats
            </a>
          )}
          {restaurant.externalLinks?.instagram && (
            <a
              href={restaurant.externalLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              title="Instagram"
            >
              Instagram
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
