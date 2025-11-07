/* eslint-disable @next/next/no-img-element */
function ProductItem({
    name,
    text,
    imgUrl,
    weight,
    composition,
    contain_place,
    amount,
    container,
}) {
    return (
        <div className="grid p-6 border border-gray-200 gap-2 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl duration-200">
            <img
                className="w-full aspect-square object-contain"
                src={imgUrl}
                alt=""
            />
            <h5 className="font-bold text-[25px]">{name}</h5>
            <p className="font-bold">Sap agramy: {weight}</p>
            <p className="font-bold">Gaby: {container}</p>
            <p className="font-bold">Düzümi: {composition}</p>
            <p>{text}</p>
            <p>
                <span className="font-bold">{contain_place}: </span>
            </p>
            <p className="font-bold">Düzüminde GMO ýok. Ýokary hilli.</p>
            <p className="font-bold">Ýaramlylyk möhleti: 6 aý.</p>
            <p className="font-bold">Mukdary: {amount}</p>
        </div>
    );
}

export default function Products() {
    // Shared text for all Pomidor üwmeji products
    const tomatoText = `Pomidor goýutmasy, şeker, ýeralma peti, nahar duzy, konserwantlar: kaliý sorbaty E202, sirke turşusy E260, ýakymly ysly ösümlikler: reýhan, şibit, ter arpabadyýyn. Ereýän gury maddalaryň agramlaýyn paýy 23% 100g. önümiň iýmitlik gymmaty: uglewodlar -24.6g. Kuwwatlyk gymmaty - 98.4 kkal.`;
    // Shared text for all Ajy üwmeç products
    const spicyText = `Pomidor goýutmasy, şeker, ýeralma peti, nahar duzy, konserwantlar: kaliý sorbaty E202, sirke turşusy E260, ýakymly ysly ösümlikler: reýhan, ter şibit, üwelen gyzyl burç, üwelen gara burç, ter arpabadyýyn. Ereýän gury maddalaryň agramlaýyn paýy 23% 100g. önümiň iýmitlik gymmaty: uglewodlar -24.6g. Kuwwatlyk gymmaty - 98.4 kkal.`;
    const containPlace = `Saklanyş şerti: 0°C-dan +6°C-a çenli.`;

    return (
        <div>
            <section className="">
                <div className="w-full bg-[#c32d2f] rounded-3xl overflow-hidden flex justify-center">
                    <img
                        src="../../assets/img/products/dayhan.png"
                        alt="dayhan"
                        className="h-[300px]"
                    />
                </div>
                <div className="my-8">
                    <label className="text-[30px] font-bold">Önümler</label>
                </div>
                <div className="products grid grid-cols-3 gap-10 my-6">
                    <ProductItem
                        imgUrl={
                            "../../assets/img/products/ketchup-1-removebg-preview.png"
                        }
                        name={"Pomidor üwmeji"}
                        weight={"270g."}
                        container={"Pet."}
                        composition={""}
                        text={tomatoText}
                        contain_place={containPlace}
                        amount={"blokda 25 sany"}
                    />

                    <ProductItem
                        imgUrl={
                            "../../assets/img/products/ketchup-2-removebg-preview.png"
                        }
                        name={"Ajy üwmeç"}
                        weight={"270g."}
                        container={"Pet."}
                        composition={""}
                        text={spicyText}
                        contain_place={containPlace}
                        amount={"blokda 25 sany"}
                    />

                    <ProductItem
                        imgUrl={
                            "../../assets/img/products/ketchup-3-removebg-preview.png"
                        }
                        name={"Pomidor üwmeji"}
                        weight={"350g."}
                        container={"Plastik."}
                        composition={""}
                        text={tomatoText}
                        contain_place={containPlace}
                        amount={"blokda 24 sany"}
                    />

                    <ProductItem
                        imgUrl={
                            "../../assets/img/products/ketchup-4-removebg-preview.png"
                        }
                        name={"Ajy üwmeç"}
                        weight={"350g."}
                        container={"Plastik."}
                        composition={""}
                        text={spicyText}
                        contain_place={containPlace}
                        amount={"blokda 24 sany"}
                    />

                    <ProductItem
                        imgUrl={
                            "../../assets/img/products/ketchup-5-removebg-preview.png"
                        }
                        name={"Pomidor üwmeji"}
                        weight={"1000g."}
                        container={"Plastik."}
                        composition={""}
                        text={tomatoText}
                        contain_place={containPlace}
                        amount={"blokda 12 sany"}
                    />

                    <ProductItem
                        imgUrl={
                            "../../assets/img/products/ketchup-6-removebg-preview.png"
                        }
                        name={"Ajy üwmeç"}
                        weight={"1000g."}
                        container={"Plastik."}
                        composition={""}
                        text={spicyText}
                        contain_place={containPlace}
                        amount={"blokda 12 sany"}
                    />
                </div>
            </section>
            <a
                download={"DayhanCatatlog.pdf"}
                target="_blank"
                href="../../assets/pdf/Dayhan_Catalog.pdf"
            >
                <div className="hover:bg-slate-200 duration-200 rounded-2xl p-4 w-max flex items-center">
                    <img
                        src="../../assets/img/pdf.png"
                        alt="Download catalog"
                        className="max-w-[50px]"
                    />
                    <p className="text-[20px]">Ýükle</p>
                </div>
            </a>
        </div>
    );
}
