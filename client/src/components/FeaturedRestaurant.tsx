import { Restaurant } from '@/lib/restaurantData';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, Award, Flame } from 'lucide-react';

interface FeaturedRestaurantProps {
  restaurant: Restaurant;
}

/**
 * FeaturedRestaurant Component
 * 
 * Design: Heritage & Craft
 * - Asymmetrical layout with left content, right visual
 * - Large hero section with premium feel
 * - Gold accents and crimson red primary color
 * - Storytelling approach highlighting authenticity
 */

export default function FeaturedRestaurant({ restaurant }: FeaturedRestaurantProps) {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-border">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-semibold">EDITOR'S TOP PICK</span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                {restaurant.name}
              </h2>
              {restaurant.chineseName && (
                <p className="text-2xl text-muted-foreground chinese-text">
                  {restaurant.chineseName}
                </p>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(restaurant.rating)
                        ? 'fill-primary text-primary'
                        : i < restaurant.rating
                        ? 'fill-primary text-primary opacity-50'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-bold text-foreground">
                {restaurant.rating.toFixed(1)}/5
              </span>
              <span className="text-muted-foreground">
                ({restaurant.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {restaurant.description}
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              <h4 className="font-semibold text-foreground">Why We Love It</h4>
              <ul className="space-y-2">
                {restaurant.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Location
                </p>
                <p className="text-sm text-foreground font-medium">{restaurant.location}</p>
                <p className="text-xs text-muted-foreground">{restaurant.postcode}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Hours
                </p>
                <p className="text-sm text-foreground font-medium">Mon-Sun</p>
                <p className="text-xs text-muted-foreground">12:00-22:00</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Cuisine
                </p>
                <p className="text-sm text-foreground font-medium">{restaurant.cuisine.join(', ')}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Price Range
                </p>
                <p className="text-sm text-foreground font-medium">{restaurant.priceRange}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-lg"
                onClick={() => window.open(restaurant.website, '_blank')}
              >
                Visit Website
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 rounded-lg"
                onClick={() => {
                  if (restaurant.externalLinks?.tripadvisor) {
                    window.open(restaurant.externalLinks.tripadvisor, '_blank');
                  }
                }}
              >
                View on TripAdvisor
              </Button>
            </div>

            {/* Specialties */}
            <div className="space-y-3 pt-4">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                Must-Try Dishes
              </p>
              <div className="flex flex-wrap gap-2">
                {restaurant.specialty.map((spec, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden lg:block relative h-96">
            {/* Decorative background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-3xl"></div>
            
            {/* Floating elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            
            {/* Content card */}
            <div className="absolute inset-8 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                  <Flame className="w-3 h-3" />
                  <span className="text-xs font-semibold">FEATURED</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  London's premier destination for authentic Mala Xiang Guo and Chengdu Mao Cai, with over 60 customizable ingredients and hand-made noodles prepared fresh daily.
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">RATING</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(restaurant.rating)
                            ? 'fill-primary text-primary'
                            : 'text-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">ESTABLISHED</span>
                  <span className="text-sm font-bold text-foreground">Since 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
