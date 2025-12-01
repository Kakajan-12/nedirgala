/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
    const translation = useTranslations("home");
    const serviceTranlation = useTranslations("services");
    const contactTranslation = useTranslations("contact");
    const footerTranslation = useTranslations("footer");
    return (
        <footer className=" text-[#272727] text-[18px] mt-8 ">
            <div className="bg-white flex items-center px-4 py-4 md:px-8">
                <img
                    className="md:h-10 h-[30px]"
                    alt=""
                    src={"/assets/img/footer-logo.png"}
                ></img>
            </div>

            <div className="grid bg-[#272727] text-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 py-10 md:px-8 px-4 gap-4">
                    <div className="grid content-start gap-1 md:gap-8">
                        <label className="text-[25px] font-semibold">
                            {contactTranslation("location_title")}
                        </label>
                        <span className="text-[12px] max-w-[180px]">
                            {contactTranslation("location_address")}
                        </span>
                    </div>
                    <div className="grid md:gap-8 gap-1">
                        <label className="text-[25px] font-semibold">
                            {footerTranslation("navigation")}
                        </label>
                        <div className="grid">
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="#"
                            >
                                {translation("services")}
                            </Link>
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="/services/lift"
                            >
                                {serviceTranlation("lift")}
                            </Link>
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="/services/greenhouse"
                            >
                                {serviceTranlation("greenhouse")}
                            </Link>
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="/about"
                            >
                                {translation("about_us")}
                            </Link>
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="/contact"
                            >
                                {translation("contact")}
                            </Link>
                        </div>
                    </div>
                    <div className="grid gap-1 md:gap-8">
                        <label className="text-[25px] font-semibold">
                            {footerTranslation("navigation")}
                        </label>
                        <div className="grid">
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="/product_base"
                            >
                                {translation("production_base")}
                            </Link>
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="/products"
                            >
                                {translation("products")}
                            </Link>
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="/services/tomate"
                            >
                                {serviceTranlation("tomate")}
                            </Link>
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="/services/constructions"
                            >
                                {serviceTranlation("constructions")}
                            </Link>
                            <Link
                                className="hover:bg-gray-100 duration-200 py-1 w-max rounded-md"
                                href="/technics"
                            >
                                {serviceTranlation("technics")}
                            </Link>
                        </div>
                    </div>
                    <div className="grid content-start gap-1.5">
                        <label className="text-[25px] font-semibold mb-8">
                            {contactTranslation("title")}
                        </label>
                        <label className="font-semibold">
                            {contactTranslation("phone_title")}
                        </label>
                        <Link
                            className="hover:bg-gray-100 duration-100 w-max rounded-md"
                            href={"tel:+993(12)468160"}
                        >
                            +993(12)468160
                        </Link>
                        <Link
                            className="hover:bg-gray-100 duration-100 w-max rounded-md"
                            href={"tel:+993(12)468161"}
                        >
                            +993(12)468161
                        </Link>
                        <Link
                            className="hover:bg-gray-100 duration-100 w-max rounded-md"
                            href={"tel:+993(12)468162"}
                        >
                            +993(12)468162
                        </Link>
                        <Link
                            className="hover:bg-gray-100 duration-100 w-max rounded-md"
                            href={"mail:info@nedir-gala.com"}
                        >
                            Email: info@nedir-gala.com
                        </Link>
                    </div>
                </div>
                <div className="text-center text-[16px] md:text-[20px] font-semibold p-4">
                    Nedir Gala <span>{new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
}
