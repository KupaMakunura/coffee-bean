import Link from "next/link";

const MainSection = () => {
  return (
    <section className="py-20 md:py-32 lg:py-40 text-center text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Discover the Art of Coffee
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Explore our unique coffee blends and brewing equipment.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Shop Now
          </Link>
          <Link
            href="/#about"
            className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
