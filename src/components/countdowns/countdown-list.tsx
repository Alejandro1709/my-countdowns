function CountdownList() {
  return (
    <section className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-8">
      <article className="flex flex-row overflow-hidden rounded-md border bg-white shadow-md dark:bg-zinc-900">
        <aside className="p-3">
          <h2 className="font-semibold">Llamar al banco</h2>
          <p>Thu, 29 2024</p>
        </aside>
        <aside className="ml-auto flex w-[20%] flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800">
          <h3 className="text-xl font-bold">25</h3>
          <p className="text-sm">days left</p>
        </aside>
      </article>
      <article className="flex flex-row overflow-hidden rounded-md border bg-white shadow-md dark:bg-zinc-900">
        <aside className="p-3">
          <h2 className="font-semibold">Llamar al banco</h2>
          <p>Thu, 29 2024</p>
        </aside>
        <aside className="ml-auto flex w-[20%] flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-800">
          <h3 className="text-xl font-bold">25</h3>
          <p className="text-sm">days left</p>
        </aside>
      </article>
    </section>
  );
}

export default CountdownList;
