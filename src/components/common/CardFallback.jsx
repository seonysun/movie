const CardFallback = ({ num }) => {
  return (
    <div className="flex flex-1 flex-wrap gap-4 py-4 justify-center">
      {Array.from({ length: num }).map((_, i) => (
        <section
          key={i}
          className="mb-2 flex animate-spark flex-col gap-2 px-2"
        >
          <div className="w-[200px] h-[300px] rounded-xl bg-gray-light" />
          <p className="h-2 rounded-lg bg-gray-light text-sm" />
          <p className="h-2 rounded-lg bg-gray-light text-sm" />
        </section>
      ))}
    </div>
  );
};

export default CardFallback;
