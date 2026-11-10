const brands = [
  { name: "Vaillant", imageUrl: "/lovable-uploads/49e1cf90-c74d-4037-bcbd-dbe506cc2108.png" },
  { name: "Worcester Bosch", imageUrl: "/lovable-uploads/be8fcfc5-921b-4e89-9bf5-4cb130f86b44.png" },
  { name: "Glow-worm", imageUrl: "/lovable-uploads/0e0e1d58-e270-46d4-ada9-5cf3aa12c713.png" },
  { name: "Gas Safe Register", imageUrl: "/lovable-uploads/d0641dab-cf90-489f-88c5-e2060752b6d9.png" },
] as const;

export default function BrandCarousel() {
  return (
    <section className="bg-gray-50 py-16" aria-labelledby="brands-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 id="brands-heading" className="mb-3 text-2xl font-bold text-ukb-blue md:text-3xl">Brands and systems we work with</h2>
          <p className="text-gray-600">Product selection, installer requirements and warranty terms are confirmed for the individual job.</p>
        </div>
        <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {brands.map((brand) => (
            <li key={brand.name} className="flex flex-col items-center rounded-lg bg-white p-6 shadow-subtle">
              <img src={brand.imageUrl} alt={`${brand.name} logo`} width="160" height="64" className="mb-3 h-16 w-auto object-contain" loading="lazy" decoding="async" />
              <span className="text-sm font-medium text-gray-700">{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
