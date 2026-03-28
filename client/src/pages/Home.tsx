import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, MapPin, Clock, DollarSign, Flame, Award, Users } from 'lucide-react';
import { restaurants, getCuisineTypes, getSpecialties, sortRestaurants } from '@/lib/restaurantData';
import { useState, useMemo } from 'react';
import RestaurantCard from '@/components/RestaurantCard';
import FeaturedRestaurant from '@/components/FeaturedRestaurant';

/**
 * Home Page - East London Chinese Restaurant Guide
 * 
 * Design Philosophy: Heritage & Craft
 * - Deep Crimson Red (#C41E3A) primary color for appetite stimulation
 * - Warm Gold (#D4AF37) accents for prosperity and premium feel
 * - Soft Cream (#F5F1E8) background for warmth and approachability
 * - Playfair Display for headlines (premium, traditional)
 * - Poppins for body text (modern, readable)
 * - Asymmetrical layout with generous whitespace
 * - Storytelling approach: each restaurant tells a story
 */

export default function Home() {
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'name'>('featured');

  const cuisineTypes = getCuisineTypes();
  const specialties = getSpecialties();

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants;
    if (selectedCuisine) {
      filtered = filtered.filter(r => r.cuisine.includes(selectedCuisine));
    }
    if (selectedSpecialty) {
      filtered = filtered.filter(r => r.specialty.includes(selectedSpecialty));
    }
    return sortRestaurants(filtered, sortBy);
  }, [selectedCuisine, selectedSpecialty, sortBy]);

  const featuredRestaurant = restaurants.find(r => r.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">East London Chinese</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="#restaurants" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Restaurants
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Discover East London's
                  <span className="text-primary"> Authentic </span>
                  Chinese Restaurants
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your guide to the best Chinese dining in East London. From bold Sichuan spices to delicate dim sum, explore authentic flavors curated by local food experts.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-lg"
                  onClick={() => document.getElementById('restaurants')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Restaurants
                </Button>
                {featuredRestaurant && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 rounded-lg"
                    onClick={() => window.open(featuredRestaurant.website, '_blank')}
                  >
                    Visit Top Pick
                  </Button>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Restaurants</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">4.2★</div>
                  <div className="text-sm text-muted-foreground">Avg Rating</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Cuisines</div>
                </div>
              </div>
            </div>

            {/* Right: Decorative Element */}
            <div className="hidden lg:block relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
              <div className="absolute inset-4 bg-gradient-to-tl from-secondary/20 to-transparent rounded-xl"></div>
              <div className="absolute top-8 right-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-8 left-8 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurant */}
      {featuredRestaurant && <FeaturedRestaurant restaurant={featuredRestaurant} />}

      {/* Restaurants Section */}
      <section id="restaurants" className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                All Restaurants
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Browse our complete guide to East London's Chinese restaurants. Filter by cuisine, specialty, or sort by rating to find your next favorite spot.
              </p>
            </div>

            {/* Filters */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4">
                {/* Cuisine Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">Cuisine Type</label>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCuisine === null ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCuisine(null)}
                      className="rounded-full"
                    >
                      All Cuisines
                    </Button>
                    {cuisineTypes.map(cuisine => (
                      <Button
                        key={cuisine}
                        variant={selectedCuisine === cuisine ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCuisine(cuisine)}
                        className="rounded-full"
                      >
                        {cuisine}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Specialty Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">Specialty</label>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedSpecialty === null ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedSpecialty(null)}
                      className="rounded-full"
                    >
                      All Specialties
                    </Button>
                    {specialties.slice(0, 8).map(specialty => (
                      <Button
                        key={specialty}
                        variant={selectedSpecialty === specialty ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedSpecialty(specialty)}
                        className="rounded-full"
                      >
                        {specialty}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">Sort By</label>
                  <div className="flex gap-2">
                    <Button
                      variant={sortBy === 'featured' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('featured')}
                      className="rounded-lg"
                    >
                      Featured
                    </Button>
                    <Button
                      variant={sortBy === 'rating' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('rating')}
                      className="rounded-lg"
                    >
                      Top Rated
                    </Button>
                    <Button
                      variant={sortBy === 'name' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSortBy('name')}
                      className="rounded-lg"
                    >
                      A-Z
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurant Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant, index) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
              ))}
            </div>

            {filteredRestaurants.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No restaurants found matching your filters. Try adjusting your selection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white border-t border-border">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl font-bold text-foreground">About This Guide</h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                East London Chinese is an independent guide to authentic Chinese restaurants in East London, created by local food enthusiasts who are passionate about authentic cuisine and supporting community restaurants.
              </p>
              
              <p>
                Our mission is to help non-Chinese customers discover genuine Chinese dining experiences, from bold Sichuan spices to delicate Cantonese dim sum. We believe that authentic food tells the story of a culture and brings communities together.
              </p>

              <h3 className="text-xl font-semibold text-foreground pt-4">Our Methodology</h3>
              <p>
                Restaurants are selected based on authenticity, quality of ingredients, skill of preparation, value for money, and community reputation. We prioritize establishments that maintain traditional cooking methods and source quality ingredients, whether they're serving family recipes passed down through generations or innovative takes on classic dishes.
              </p>

              <h3 className="text-xl font-semibold text-foreground pt-4">Why East London?</h3>
              <p>
                East London has emerged as one of London's most vibrant culinary neighborhoods, with a diverse community of Chinese restaurants ranging from casual family-run establishments to contemporary dining experiences. This guide celebrates the authentic flavors and cultural heritage that make East London's food scene special.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Have a restaurant recommendation? Know about a hidden gem? We'd love to hear from you.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <h4 className="font-semibold">East London Chinese</h4>
              <p className="text-sm text-white/70">Your guide to authentic Chinese dining in East London.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#restaurants" className="hover:text-white transition-colors">Restaurants</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Follow Us</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 East London Chinese. All rights reserved. | Independent restaurant guide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
