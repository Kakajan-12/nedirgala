/* eslint-disable @next/next/no-img-element */
export default function Home() {
    return (
        <div className=" max-w-[1400px] mx-auto p-2">
            <header>
                <div>
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center">
                            <a href="/tk">
                                <img
                                    className="max-w-[170px] w-full"
                                    src="../assets/img/logo.png"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <nav className="hidden md:flex">
                            <div className="flex items-center space-x-8">
                                <div className="relative group">
                                    <span className="cursor-pointer text-gray-700 duration-200 p-2 hover:bg-gray-200 rounded-md">
                                        Hyzmatlar
                                    </span>

                                    {/* Dropdown */}
                                    <div className="absolute z-10 border border-gray-200 left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                            href="/tk/lift.html"
                                        >
                                            Lift
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                            href="/tk/greenhouse.html"
                                        >
                                            Ýyladyşhana
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                            href="/tk/tomate.html"
                                        >
                                            Tomat zawody
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                            href="/tk/construction.html"
                                        >
                                            Gurluşyk
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 duration-200"
                                            href="/tk/technics.html"
                                        >
                                            Tehnikalar
                                        </a>
                                    </div>
                                </div>
                                <a
                                    className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                    href="/tk/products.html"
                                >
                                    Önümler
                                </a>
                                <a
                                    className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                    href="/tk/product-base.html"
                                >
                                    Önümçilik bazasy
                                </a>
                                <a
                                    className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                    href="/tk/about.html"
                                >
                                    Biz barada
                                </a>
                                <a
                                    className="text-gray600 duration-200 p-2 hover:bg-gray-200 rounded-md"
                                    href="/tk/contact.html"
                                >
                                    Kontakt
                                </a>
                            </div>
                        </nav>

                        {/* Lang flags */}
                        <div className="flex items-center gap-2">
                            <a href="/tk">
                                <img
                                    className="w-[35px] h-[25px] overflow-hidden rounded-md border border-gray-200 hover:shadow-gray-400 duration-200"
                                    src="../assets/img/lang/turkmen.png"
                                    alt="lang"
                                />
                            </a>
                            <a href="/en">
                                <img
                                    className="w-[35px] h-[25px] overflow-hidden rounded-md border border-gray-200 hover:shadow-gray-400 duration-200"
                                    src="../assets/img/lang/english.webp"
                                    alt="lang"
                                />
                            </a>
                            <a href="/ru">
                                <img
                                    className="w-[35px] h-[25px] overflow-hidden rounded-md border border-gray-200 hover:shadow-gray-400 duration-200"
                                    src="../assets/img/lang/russian.webp"
                                    alt="lang"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <section
                className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center overflow-hidden rounded-2xl max-h-[300px] md:max-h-[800px]"
                style={{ backgroundImage: "url('../assets/img/berkarar.jpg')" }}
            >
                <div className="bg-black/50 text-white bg-opacity-50 w-full h-full rounded-lg flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold">
                        Nedir Gala
                    </h1>
                    <h6 className="text-xl md:text-2xl mt-2">hususy kärhana</h6>
                </div>
            </section>

            <section className="py-16 ">
                <div className="grid md:grid-cols-2 gap-8 content-start">
                    <div>
                        <img
                            src="../assets/img/berkarar.jpg"
                            alt="nedir gala"
                            className="rounded-2xl overflow-hidden w-full"
                        />
                    </div>
                    <div>
                        <p className="text-gray-600 leading-relaxed ">
                            “Nedir Gala” Hususy Kärhanasy 2011-nji ýylyň 7-nji
                            martynda döredildi. “Nedir Gala” Hususy Kärhanasy
                            Türkmenistanyň Ykdysadyýet we ösüş ministrliginiň
                            Edara görnüşindäki taraplary we maýa goýum
                            taslamalaryny döwlet tarapyndan hasaba almak
                            müdirligi tarapyndan 24.02.2017-nji ýylda berlen
                            23675020 belgili ýeke-täk döwlet sanawyna girizmek
                            baradaky şahadatnamasy we Hususy Kärhananyň
                            Tertipnamasy esasynda telekeçilik işini amala
                            aşyrýar.“Nedir Gala” Hususy kärhanasy köp ýyllaryň
                            dowamynda telekeçilik işleriniň görnüşleri bilen
                            meşgullanyp, bu ugurda netijeli görkezijileri
                            gazanyp gelýär. Kärhana özüne berilen degişli
                            ygtyýarnamalary laýyklykda, birnäçe desgalaryň
                            gurluşyk işlerini ýerine ýetirdi. Olardan
                            2011-2012-nji ýyllarda “Türkmenistanda ýerleşen
                            HHR-nyň CNPC kompaniýasynyň ýanyndaky jogapkärçiligi
                            çäklendirilen Çuansin buraw inžener kompaniýasynyň”
                            buýurmagynda Mary welaýatynyň Ýolöten etrabynda
                            “UPPK2”,”UPPK3” we “4 sany potstansiýa binasy”
                            hem-de “Bug gazan binasynyň binýady” uly göwrümli
                            binalarynyň gurluşyk-gurnama işlerini ýerine
                            ýetirdi. Mundan başga-da 2018-nji ýylda baglaşylan
                            şertnama laýyklykda, “Türkmenistanyň “Bagtyýarlyk”
                            ylalaşylan meýdançasynda Demirýolunyň aşagyndan
                            turba geçirmek boýunça gurluşyk işleri” desgasy...
                        </p>
                        <a
                            href="/tk/about.html"
                            className="mt-4 inline-block text-blue-600 hover:underline"
                        >
                            Giňişleýin
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-8">Hyzmatlarymyz</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceItem
                            href="/greenhouse"
                            imgUrl={"../assets/img/lift/lift1.png"}
                            name={"Lift"}
                        ></ServiceItem>

                        <ServiceItem
                            href="/greenhouse"
                            imgUrl="../assets/img/greenhouse/teplisa1.JPG"
                            name="Teplisa"
                        />
                        <ServiceItem
                            href="/products"
                            imgUrl="../assets/img/products/ketchup_main.jpg"
                            name="Önümler"
                        />
                        <ServiceItem
                            href="/tomate"
                            imgUrl="../assets/img/tomato_plant/tomato2.jpg"
                            name="Tomat zawody"
                        />
                        <ServiceItem
                            href="/construction"
                            imgUrl="../assets/img/construction/construction6.png"
                            name="Gurluşyk"
                        />
                        <ServiceItem
                            href="/technics"
                            imgUrl="../assets/img/technics/tehnika20.JPG"
                            name="Tehnikalar"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100 rounded-2xl my-4">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-8">
                        Hyzmatdaşlarymyz
                    </h3>
                    <div className="flex justify-center items-center space-x-12">
                        <div className="">
                            <img
                                className="w-[180px] aspect-square border border-gray-200 rounded-2xl object-contain overflow-hidden bg-white"
                                src="../assets/img/brands/CNPC logo.webp"
                                alt="logo"
                            />
                        </div>
                        <div className="">
                            <img
                                className="w-[180px] aspect-square border border-gray-200 rounded-2xl object-contain overflow-hidden bg-white"
                                src="../assets/img/brands/schindler.jpg"
                                alt="logo"
                            />
                        </div>
                        <div className="">
                            <img
                                className="w-[180px] aspect-square border border-gray-200 rounded-2xl object-contain overflow-hidden bg-white"
                                src="../assets/img/brands/TSTB.svg"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white py-4 overflow-hidden rounded-2xl my-2">
                <div className="container mx-auto text-center">
                    Nedir Gala <span>{new Date().getFullYear()}</span>
                </div>
            </footer>
        </div>
    );
}

function ServiceItem({ name, imgUrl, href }) {
    return (
        <a href={href} className="group block">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                    src={imgUrl}
                    alt={name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <p className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 text-slate-600 p-4 text-lg font-semibold">
                    {name}
                </p>
            </div>
        </a>
    );
}

function PartnersItem({ imgUrl }) {
    return (
        <div className="grayscale hover:grayscale-0 transition-all">
            <img src={imgUrl} alt="logo" />
        </div>
    );
}
