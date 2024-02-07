import Nav_bar from "./components/page";

export default function Home() {
  return (
    <main>
      {/* navbar */}
      <Nav_bar />
      {/* grid 2 columns */}
      <section className="py-2">
        <div className="container max-w-7xl px-4">
          <p className="text-center my-2">grid 2 columns</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-slate-100 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-500 my-1 md:my-0 w-full">123</div>
          </div>
        </div>
      </section>
      {/* grid 3 columns */}
      <section>
        <div className="container max-w-7xl px-4">
          <p className="text-center my-2">grid 3 columns</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-slate-100 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-500 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-100 my-1 md:my-0 w-full">123</div>
          </div>
        </div>
      </section>
      {/* grid 4 columns */}
      <section>
        <div className="container max-w-7xl px-4">
          <p className="text-center my-2">grid 4 columns</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-slate-100 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-500 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-100 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-300 my-1 md:my-0 w-full">123</div>
          </div>
        </div>
      </section>
      {/* grid 5 columns */}
      <section>
        <div className="container max-w-7xl px-4">
          <p className="text-center my-2">grid 5 columns</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
            <div className="bg-slate-100 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-500 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-100 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-300 my-1 md:my-0 w-full">123</div>
            <div className="bg-slate-200 my-1 md:my-0 w-full">123</div>
          </div>
        </div>
      </section>
      {/* flex 2 columns multi varient*/}
      <section>
        <div className="container max-w-7xl px-4">
          <p className="text-center my-2">flex 2 columns multi varient</p>
          <div className="md:flex gap-4">
            <div className="bg-slate-400 my-1 md:my-0 w-full md:w-2/3">123</div>
            <div className="bg-slate-500 my-1 md:my-0 w-full md:w-1/3">123</div>
          </div>
        </div>
      </section>
      {/* flex 2 columns multi varient 2*/}
      <section>
        <div className="container max-w-7xl px-4">
          <p className="text-center my-2">flex 2 columns multi varient 2</p>
          <div className="md:flex gap-4">
            <div className="bg-slate-400 my-1 md:my-0 w-full md:w-1/3">123</div>
            <div className="bg-slate-500 my-1 md:my-0 w-full md:w-2/3">123</div>
          </div>
        </div>
      </section>
      {/* flex 5 columns multi varient*/}
      <section>
        <div className="container max-w-7xl px-4">
          <p className="text-center my-2">flex 5 columns multi varient</p>
          <div className="sm:flex-row md:flex gap-4">
            <div className="bg-slate-400 my-1 md:my-0 w-full md:w-1/5 lg:w-3/12">
              123
            </div>
            <div className="bg-slate-500 my-1 md:my-0 w-full md:w-1/5 lg:w-2/12">
              123
            </div>
            <div className="bg-slate-400 my-1 md:my-0 w-full md:w-1/5 lg:w-2/12">
              123
            </div>
            <div className="bg-slate-300 my-1 md:my-0 w-full md:w-1/5 lg:w-2/12">
              123
            </div>
            <div className="bg-slate-200 my-1 md:my-0 w-full md:w-1/5 lg:w-3/12">
              123
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
