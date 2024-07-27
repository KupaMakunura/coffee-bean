import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="about">
      <div className="container px-4 md:px-6 grid gap-8 md:gap-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            About Us
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            At our coffee company, we are passionate about sourcing and roasting
            the finest quality beans from around the world. Our mission is to
            bring you the perfect cup of coffee, every time. We believe in
            sustainable practices, fair trade, and creating a warm, welcoming
            atmosphere for our customers.
          </p>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
