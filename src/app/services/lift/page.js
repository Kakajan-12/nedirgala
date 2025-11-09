"use client";

import Tab from "../../components/Tab";
import ServiceProject from "../../components/ServiceProject";
import { useState } from "react";

export default function Lift() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="grid gap-4">
            <div>
                <Tab
                    onChange={(index) => {
                        setActiveIndex(index);
                    }}
                    buttons={[
                        "Abraýly mebel",
                        "Altyn Zaman",
                        "Aşgabat söwda we dynç alyş merkezi",
                        "Kämil söwda merkezi",
                    ]}
                ></Tab>
            </div>
            {activeIndex == 0 && (
                <ServiceProject
                    title={"Abraýly mebel"}
                    mainImageUrl={"../../assets/img/lift/abrayly-mebel.JPG"}
                    location={"Aşgabat, Türkmenistan"}
                    text={
                        " Baha, hil, göze ýakymlylyk boýunça has amatly we dünýä ülňülerine doly gabat gelýän “SCHINDLER” liftleri, Aşgabat we \
                    Arkadag şäherlerindäki we ýurdumyzyň welaýatlaryndaky ýaşaýyş we durmuş ähmiýetli iri desgalaryň birnäçesinde gurnalyp \
                    häzirki wagtda uly höwes bilen ulanylýar. Şeýle hem häzirki wagtda ýokary hilli dünýa belli liftleri gurnamak we\
                    liftleri gelejekde bökdençsiz işletmek boýunça ýokary gatly binalarda howpsyz lift gatnawyny üpjün etmek boýunça\
                    hyzmatlary kärhanamyzdaky ýokary derejeli, birnäçe daşary ýurtlarda bu ugurda ýörüte okuwlary geçen we degişliligi\
                    boýunça sertifikatlary bolan tejribeli hünärmenlerimiz tarapyndan ýerine ýetirilýär."
                    }
                    imageUrlList={[
                        "../../assets/img/lift/abrayly-mebel.JPG",
                        "../../assets/img/lift/abrayly-mebel1.JPG",
                        "../../assets/img/lift/abrayly-mebel2.JPG",
                        "../../assets/img/lift/abrayly-mebel3.JPG",
                        "../../assets/img/lift/abrayly-mebel4.JPG",
                        "../../assets/img/lift/abrayly-mebel5.JPG",
                        "../../assets/img/lift/abrayly-mebel6.JPG",
                    ]}
                ></ServiceProject>
            )}
            {activeIndex == 1 && (
                <ServiceProject
                    title={"Altyn zaman"}
                    mainImageUrl={"../../assets/img/lift/altyn-zaman.jpg"}
                    location={"Aşgabat, Türkmenistan"}
                    text={
                        "  Baha, hil, göze ýakymlylyk boýunça has amatly we dünýä ülňülerine doly gabat gelýän “SCHINDLER” liftleri, Aşgabat we\
                                Arkadag şäherlerindäki we ýurdumyzyň welaýatlaryndaky ýaşaýyş we durmuş ähmiýetli iri desgalaryň birnäçesinde gurnalyp\
                                häzirki wagtda uly höwes bilen ulanylýar. Şeýle hem häzirki wagtda ýokary hilli dünýa belli liftleri gurnamak we\
                                liftleri gelejekde bökdençsiz işletmek boýunça ýokary gatly binalarda howpsyz lift gatnawyny üpjün etmek boýunça\
                                hyzmatlary kärhanamyzdaky ýokary derejeli, birnäçe daşary ýurtlarda bu ugurda ýörüte okuwlary geçen we degişliligi\
                                boýunça sertifikatlary bolan tejribeli hünärmenlerimiz tarapyndan ýerine ýetirilýär."
                    }
                    imageUrlList={[
                        "../../assets/img/lift/altyn-zaman.jpg",
                        "../../assets/img/lift/altyn-zaman1.jpg",
                        "../../assets/img/lift/altyn-zaman2.jpg",
                        "../../assets/img/lift/altyn-zaman3.jpg",
                        "../../assets/img/lift/altyn-zaman4.jpg",
                        "../../assets/img/lift/altyn-zaman5.jpg",
                        "../../assets/img/lift/altyn-zaman6.jpg",
                    ]}
                ></ServiceProject>
            )}
            {activeIndex == 2 && (
                <ServiceProject
                    title={"Aşgabat söwda we dynç alyş merkezi"}
                    mainImageUrl={"../../assets/img/lift/ashgabat-mall.jpg"}
                    location={"Aşgabat, Türkmenistan"}
                    text={
                        "  Baha, hil, göze ýakymlylyk boýunça has amatly we dünýä ülňülerine doly gabat gelýän “SCHINDLER” liftleri, Aşgabat we\
                                Arkadag şäherlerindäki we ýurdumyzyň welaýatlaryndaky ýaşaýyş we durmuş ähmiýetli iri desgalaryň birnäçesinde gurnalyp\
                                häzirki wagtda uly höwes bilen ulanylýar. Şeýle hem häzirki wagtda ýokary hilli dünýa belli liftleri gurnamak we \
                                liftleri gelejekde bökdençsiz işletmek boýunça ýokary gatly binalarda howpsyz lift gatnawyny üpjün etmek boýunça\
                                hyzmatlary kärhanamyzdaky ýokary derejeli, birnäçe daşary ýurtlarda bu ugurda ýörüte okuwlary geçen we degişliligi\
                                boýunça sertifikatlary bolan tejribeli hünärmenlerimiz tarapyndan ýerine ýetirilýär."
                    }
                    imageUrlList={[
                        "../../assets/img/lift/ashgabat-mall.jpg",
                        "../../assets/img/lift/ashgabat-mall1.jpg",
                        "../../assets/img/lift/ashgabat-mall2.jpg",
                        "../../assets/img/lift/ashgabat-mall3.jpg",
                    ]}
                ></ServiceProject>
            )}
            {activeIndex == 3 && (
                <ServiceProject
                    title={"Kämil söwda merkezi"}
                    mainImageUrl={"../../assets/img/lift/kamil.JPG"}
                    location={"Aşgabat, Türkmenistan"}
                    text={
                        "  Baha, hil, göze ýakymlylyk boýunça has amatly we dünýä ülňülerine doly gabat gelýän “SCHINDLER” liftleri, Aşgabat we\
                        Arkadag şäherlerindäki we ýurdumyzyň welaýatlaryndaky ýaşaýyş we durmuş ähmiýetli iri desgalaryň birnäçesinde gurnalyp\
                        häzirki wagtda uly höwes bilen ulanylýar. Şeýle hem häzirki wagtda ýokary hilli dünýa belli liftleri gurnamak we\
                        liftleri gelejekde bökdençsiz işletmek boýunça ýokary gatly binalarda howpsyz lift gatnawyny üpjün etmek boýunça\
                        hyzmatlary kärhanamyzdaky ýokary derejeli, birnäçe daşary ýurtlarda bu ugurda ýörüte okuwlary geçen we degişliligi\
                        boýunça sertifikatlary bolan tejribeli hünärmenlerimiz tarapyndan ýerine ýetirilýär."
                    }
                    imageUrlList={[
                        "../../assets/img/lift/kamil.JPG",
                        "../../assets/img/lift/kamil1.jpg",
                        "../../assets/img/lift/kamil2.jpg",
                    ]}
                ></ServiceProject>
            )}
        </div>
    );
}
