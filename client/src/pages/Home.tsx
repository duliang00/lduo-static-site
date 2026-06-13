import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Award,
  ChefHat,
  ChevronRight,
  Clock,
  Flame,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShoppingBag,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";

const restaurant = {
  name: "New Beijing Chinese Restaurant",
  displayName: "New Beijing",
  chineseName: "Da Shi Hui",
  strapline: "Authentic Sichuan heat, Beijing comfort, and hand-made noodles in Limehouse.",
  address: "8 East India Dock Road, Limehouse, London E14 6JJ",
  shortAddress: "8 East India Dock Road, E14 6JJ",
  phone: "+44 (0)20 7987 8888",
  website: "https://dashihui.uk",
  maps: "https://www.google.com/maps/search/New+Beijing+Chinese+Restaurant+8+East+India+Dock+Rd",
  tripadvisor:
    "https://www.tripadvisor.com/Restaurant_Review-g186338-d14102712-Reviews-New_Beijing_Chinese_Restaurant-London_England.html",
  ubereats:
    "https://www.ubereats.com/gb/store/new-beijing-chinese-restaurant-%E5%A4%A7%E9%A3%9F%E6%B1%87/mo2Gme7JShKH87kSlACdrg",
  instagram: "https://www.instagram.com/dashihui.london",
  facebook: "https://www.facebook.com/dashihui.london",
  rating: "4.4",
  reviews: "150+",
  hours: "Lunch and dinner service. Check live channels for today's hours.",
  heroImage: "/assets/new-beijing-feast.png",
};

const signatureDishes = [
  {
    name: "Mala Xiang Guo",
    tag: "Customer favourite",
    description:
      "Choose your ingredients, pick your spice level, and get a wok-tossed dry pot loaded with chilli, garlic, Sichuan peppercorn, and fragrant oil.",
    details: ["60+ ingredient combinations", "Mild to extra hot", "Great for sharing"],
  },
  {
    name: "Chengdu Mao Cai",
    tag: "Big bowl comfort",
    description:
      "A deep, aromatic Sichuan broth built for cold London evenings, packed with vegetables, tofu, noodles, meat, and a slow-building chilli warmth.",
    details: ["Rich broth", "Customisable toppings", "Fast lunch option"],
  },
  {
    name: "Hand-made Noodles",
    tag: "Made fresh",
    description:
      "Springy noodles prepared for slurping with savoury sauces, chilli oil, sesame, herbs, and regional toppings.",
    details: ["Fresh texture", "Saucy and satisfying", "Vegetarian friendly options"],
  },
];

const cravings = [
  "Sichuan peppercorn tingle",
  "Steaming noodle bowls",
  "Crispy chilli aromatics",
  "Late dinner near Canary Wharf",
  "Lunch from Limehouse",
  "Affordable sharing plates",
];

const galleryCards = [
  {
    title: "Wok-fired spice",
    body: "Bold chilli oil, garlic, herbs, and peppercorn fragrance cooked hot and fast.",
  },
  {
    title: "Noodles with bite",
    body: "Fresh noodle texture for sauce-heavy dishes and warming broths.",
  },
  {
    title: "Shareable table",
    body: "Bring friends, split plates, and build a meal around different heat levels.",
  },
];

const testimonials = [
  {
    quote:
      "The place to go when you want real Sichuan-style heat without travelling across London.",
    name: "Local diner",
  },
  {
    quote:
      "Good value, big flavours, and the kind of dry pot that makes you plan the next visit before leaving.",
    name: "Regular customer",
  },
  {
    quote:
      "A practical Limehouse favourite for lunch, dinner, takeaway, and group cravings.",
    name: "East London food fan",
  },
];

const phoneHref = `tel:${restaurant.phone.replace(/[^\d+]/g, "")}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(12,9,9,0.92)] text-white backdrop-blur-xl">
        <div className="container flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-3" aria-label="New Beijing home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-white shadow-lg shadow-primary/20">
              <Flame className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold leading-tight">{restaurant.displayName}</span>
              <span className="block text-xs text-white/62">{restaurant.chineseName} - London E14</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/76 md:flex">
            <a className="transition hover:text-white" href="#menu">
              Menu highlights
            </a>
            <a className="transition hover:text-white" href="#gallery">
              Gallery
            </a>
            <a className="transition hover:text-white" href="#visit">
              Visit
            </a>
          </nav>

          <Button asChild className="hidden rounded-md bg-white text-ink hover:bg-white/90 sm:inline-flex">
            <a href={restaurant.ubereats} target="_blank" rel="noreferrer">
              Order now
              <ShoppingBag className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="hero-band relative min-h-[calc(100vh-64px)] overflow-hidden text-white">
          <img
            src={restaurant.heroImage}
            alt="A steaming table of mala xiang guo, noodles, dumplings, chilli oil, and Chinese sharing dishes"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,7,7,.92)_0%,rgba(9,7,7,.76)_38%,rgba(9,7,7,.26)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

          <div className="container relative flex min-h-[calc(100vh-64px)] items-center py-16">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm text-white/84 shadow-2xl backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-gold" />
                Authentic Chinese food in Limehouse since 2015
              </div>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                  New Beijing Chinese Restaurant
                </p>
                <h1 className="max-w-3xl text-5xl font-black leading-[0.95] md:text-7xl">
                  Feed the craving for real Sichuan flavour.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                  {restaurant.strapline} Build your mala dry pot, warm up with Chengdu mao cai,
                  or settle into a table full of noodles, dumplings, and chilli oil.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-md bg-primary px-6 text-white hover:bg-primary/90">
                  <a href={restaurant.ubereats} target="_blank" rel="noreferrer">
                    Order delivery
                    <ShoppingBag className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-md border-white/30 bg-white/10 px-6 text-white hover:bg-white/18"
                >
                  <a href={restaurant.maps} target="_blank" rel="noreferrer">
                    Get directions
                    <Navigation className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid max-w-2xl grid-cols-3 gap-3 pt-4">
                <div className="rounded-md border border-white/12 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-1 text-gold">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-2xl font-bold text-white">{restaurant.rating}</span>
                  </div>
                  <p className="mt-1 text-xs text-white/66">{restaurant.reviews} public reviews</p>
                </div>
                <div className="rounded-md border border-white/12 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold text-white">60+</p>
                  <p className="mt-1 text-xs text-white/66">dry pot ingredients</p>
                </div>
                <div className="rounded-md border border-white/12 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-2xl font-bold text-white">E14</p>
                  <p className="mt-1 text-xs text-white/66">minutes from Canary Wharf</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="container grid gap-4 py-4 md:grid-cols-[1fr_auto_auto] md:items-center">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">{restaurant.shortAddress}</p>
                <p className="text-sm text-muted-foreground">{restaurant.hours}</p>
              </div>
            </div>
            <Button asChild variant="outline" className="rounded-md">
              <a href={phoneHref}>
                <Phone className="h-4 w-4" />
                Call restaurant
              </a>
            </Button>
            <Button asChild className="rounded-md bg-ink text-white hover:bg-ink/90">
              <a href={restaurant.website} target="_blank" rel="noreferrer">
                Official website
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="section-kicker">Why customers come back</p>
                <h2 className="max-w-xl text-4xl font-black leading-tight md:text-5xl">
                  A proper Chinese table, built for London cravings.
                </h2>
                <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                  New Beijing is not a generic takeaway page. The restaurant is strongest when the
                  site shows heat, freshness, choice, and the joy of sharing a table.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {cravings.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border bg-card p-3">
                    <Flame className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["01", "Choose your base", "Pick meat, seafood, vegetables, tofu, noodles, or rice cakes."],
                ["02", "Set your spice", "Keep it gentle or go full mala with numbing Sichuan peppercorn."],
                ["03", "Share the table", "Add dumplings, noodles, and small plates for a full feast."],
              ].map(([step, title, copy]) => (
                <Card key={step} className="rounded-md border-border/70 p-6 shadow-none">
                  <p className="text-sm font-bold text-primary">{step}</p>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="bg-ink py-16 text-white md:py-24">
          <div className="container space-y-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-4">
                <p className="section-kicker text-gold">Signature dishes</p>
                <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
                  Lead with the dishes people search for.
                </h2>
              </div>
              <Button asChild variant="outline" className="rounded-md border-white/20 bg-white/[0.08] text-white hover:bg-white/[0.14]">
                <a href={restaurant.website} target="_blank" rel="noreferrer">
                  View full menu
                  <Utensils className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {signatureDishes.map((dish) => (
                <Card key={dish.name} className="rounded-md border-white/10 bg-white/[0.06] p-6 text-white shadow-none">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-primary/18 px-3 py-1 text-xs font-semibold text-gold">
                      {dish.tag}
                    </span>
                    <ChefHat className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold">{dish.name}</h3>
                  <p className="mt-4 leading-7 text-white/70">{dish.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {dish.details.map((detail) => (
                      <span key={detail} className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/70">
                        {detail}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-16 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="relative overflow-hidden rounded-lg bg-ink shadow-2xl">
              <img
                src={restaurant.heroImage}
                alt="Close table view of spicy Chinese food, dumplings, noodles, and chilli oil"
                className="aspect-[16/10] h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="steam steam-one" />
              <div className="steam steam-two" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-4 text-white sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-gold">Short-form food story</p>
                  <h2 className="mt-2 text-3xl font-black">Steam, chilli, noodles, repeat.</h2>
                </div>
                <a
                  href={restaurant.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white/90"
                >
                  Watch on Instagram
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <p className="section-kicker">Media that sells the craving</p>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                Make the first screen taste like dinner.
              </h2>
              <p className="leading-8 text-muted-foreground">
                The new visual direction uses a rich food hero, tighter copy, menu-led cards, and
                social/video CTAs so visitors immediately know what to order and where to go.
              </p>
              <div className="grid gap-3">
                {galleryCards.map((card) => (
                  <div key={card.title} className="rounded-md border bg-card p-5">
                    <h3 className="font-bold">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container space-y-10">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <p className="section-kicker">Social proof</p>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                Built around what hungry customers need to hear.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <Card key={item.name} className="rounded-md border-border/70 p-6 shadow-none">
                  <div className="flex gap-1 text-primary">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 text-lg leading-8">"{item.quote}"</p>
                  <p className="mt-6 text-sm font-semibold text-muted-foreground">{item.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="py-16 md:py-24">
          <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5">
              <p className="section-kicker">Visit or order</p>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                Easy from Limehouse, Canary Wharf, Poplar, and the City.
              </h2>
              <p className="leading-8 text-muted-foreground">
                Put the useful actions up front: directions, phone, delivery, official menu, and
                social channels. Keep opening times live on official channels to avoid stale
                information.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Card className="rounded-md border-border/70 p-6 shadow-none">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-2xl font-bold">Find us</h3>
                <p className="mt-3 text-muted-foreground">{restaurant.address}</p>
                <Button asChild className="mt-6 rounded-md bg-primary text-white hover:bg-primary/90">
                  <a href={restaurant.maps} target="_blank" rel="noreferrer">
                    Open Google Maps
                  </a>
                </Button>
              </Card>

              <Card className="rounded-md border-border/70 p-6 shadow-none">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-2xl font-bold">Plan dinner</h3>
                <p className="mt-3 text-muted-foreground">{restaurant.hours}</p>
                <Button asChild variant="outline" className="mt-6 rounded-md">
                  <a href={phoneHref}>Call {restaurant.phone}</a>
                </Button>
              </Card>

              <Card className="rounded-md border-border/70 p-6 shadow-none md:col-span-2">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-2xl font-bold">First time order</h3>
                <p className="mt-3 text-muted-foreground">
                  Start with mala xiang guo at a comfortable spice level, add hand-made noodles,
                  and include dumplings or vegetables to balance the heat.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-md bg-ink text-white hover:bg-ink/90">
                    <a href={restaurant.ubereats} target="_blank" rel="noreferrer">
                      Order on Uber Eats
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-md">
                    <a href={restaurant.tripadvisor} target="_blank" rel="noreferrer">
                      Read reviews
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-10 text-white">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">{restaurant.name}</p>
            <p className="mt-1 text-sm text-white/62">{restaurant.address}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <a className="hover:text-white" href={restaurant.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="hover:text-white" href={restaurant.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="hover:text-white" href={restaurant.tripadvisor} target="_blank" rel="noreferrer">
              TripAdvisor
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
