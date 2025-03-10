const DetailFallback = () => {
  return (
    <section className="flex animate-spark gap-4 px-6">
      <div className="w-1/2 rounded-lg h-[500px] bg-gray-light" />
      <div className="flex w-1/2 h-[500px] flex-col gap-3">
        <p className="h-[20%] rounded-lg bg-gray-light" />
        <p className="h-[10%] rounded-lg bg-gray-light" />
        <p className="h-[10%] rounded-lg bg-gray-light" />
        <p className="h-[30%] rounded-lg bg-gray-light" />
        <p className="h-[10%] rounded-lg bg-gray-light" />
        <p className="h-[10%] rounded-lg bg-gray-light" />
      </div>
    </section>
  );
};

export default DetailFallback;
