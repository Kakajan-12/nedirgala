import ServiceProject from "../../../components/ServiceProject";

export default function Project2() {
    return (
        <ServiceProject
            title={'"Bereketli zaman" ýaşaýyş jaýy'}
            client={"Ahal welaýat häkimligi"}
            mainImageUrl={"..//assets/img/construction/Bereketli zaman1.jpg"}
            location={
                "Turkmenistan, Ahal welaýatynyň Ak bugdaý etraby Gäwers geňeşligi Bereketli zaman şäherçesi"
            }
            text={
                " 2014-2016-njy ýyllarda “Ahal welaýat häkimliginiň buýurmagynda Ahal welaýatynyň Ak \
                                bugdaý etrabynyň Gäwers geňeşliginiň \
                                çägindäki Bereketli zaman şäherçesinde 40 sany ipoteka ýaşaýyş jaýlarynyň gurluşygyny \
                                ýerine ýetirdi."
            }
            imageUrlList={[
                "..//assets/img/construction/Bereketli zaman2.jpg",
                "..//assets/img/construction/Bereketli zaman3.webp",
                "..//assets/img/construction/Bereketli zaman4.webp",
                "..//assets/img/construction/Bereketli zaman5.jpg",
                "..//assets/img/construction/Bereketli zaman6.jpg",
            ]}
            products={""}
            area={""}
            year={"2014-2016"}
            building_type={"Ýaşaýyş jaý"}
        ></ServiceProject>
    );
}
