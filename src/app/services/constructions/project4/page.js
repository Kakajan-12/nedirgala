import ServiceProject from "../../../components/ServiceProject";

export default function Project4() {
    return (
        <ServiceProject
            title={"Kotež"}
            client={"“Nedir gala”"}
            mainImageUrl={"/assets/img/construction/1A.jpg"}
            location={"Turkmenistan, Ahal welaýatynyň Änew şäheri"}
            text={
                "“Nedir gala” Hususy kärhanasy tarapyndan 2019-2022-nji ýyllarda Ahal welaýatynyň Änew şäherinde kotež görnüli ýaşaýyş jaýlarynyň gurluşygy alnyp baryldy."
            }
            imageUrlList={[
                "/assets/img/construction/1A.jpg",
                "/assets/img/construction/2A.jpg",
                "/assets/img/construction/3A.jpg",
                "/assets/img/construction/4A.jpg",
            ]}
            products={""}
            area={""}
            year={"2019-2022"}
            building_type={"Ýaşaýyş jaý"}
        ></ServiceProject>
    );
}
