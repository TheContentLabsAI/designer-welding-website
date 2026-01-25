import ReviewWidget from "@/components/common/ReviewWidget";

const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-3 block">Social Proof</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase leading-none">
              Trusted By <br/><span className="text-zinc-500">Orange County</span>
            </h2>
          </div>
        </div>

        {/* Live Review Widget */}
        <ReviewWidget />
      </div>
    </section>
  );
};

export default Testimonials;
