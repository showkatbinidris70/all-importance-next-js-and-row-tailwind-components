import Nav_bar from "./components/page";

export default function Home() {
    return (
        <main> {/* navbar */}
            <Nav_bar/> {/* grid 2 columns */}
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
            {/* Image hover effect */}
            <section>
                <div class="container mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
                    <div class="text-center">
                        <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 md:w-full w-9/12 mx-auto">
                            Simple Image Hove Efect</h2>
                    </div>
                    <div class="mt-10 max-w-sm mx-auto">
                        <div class="relative group">
                            <img src="https://images.unsplash.com/photo-1565440707934-c9bacbad2146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=80" alt="Photo by Sébastien Goldberg on Unsplash" class="w-full rounded shadow-xl hover:shadow-2xl"/>
                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                <div class="flex-row text-center">
                                    <h1 class="text-gray-50 font-bold text-lg">Be careful on the way.</h1>
                                    <p class="text-gray-200 font-medium text-sm">Tulus</p>
                                    <small class="text-xs font-light text-gray-300">Photo by Sébastien Goldberg on Unsplash</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
