/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
export default function Contact() {
    return (
        <div className="grid grid-cols-2">
            <div className="contact__info">
                <label className="text-[50px] font-bold">
                    Biziň bilen habarlaşyň
                </label>
                <div className="contact__info-items">
                    <div className="contact__info-item">
                        <div className="contact__info-icon">
                            {/* <svg
                                className="contact__icon"
                                fill="#000000"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 395.71 395.71"
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                        		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                        		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                        		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                                    />
                                </g>
                            </svg> */}
                        </div>
                        <div className="contact__info-text">
                            <h4>Biziň ýerleşýän ýerimiz</h4>
                            <p>
                                Türkmenistan, ş.Aşgabat, Köpetdag etraby, 1972
                                (Atatürk) köçe, j-82, 6 gat, F1
                            </p>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <div className="contact__info-icon">
                            <svg
                                className="contact__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="50px"
                                height="50px"
                            >
                                <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z" />
                            </svg>
                        </div>
                        <div className="contact__info-text">
                            <h4>Telefon belgilerimiz</h4>
                            <p>+993(12)468160</p>
                            <p>+993(12)468161</p>
                            <p>+993(12)468162</p>
                        </div>
                    </div>
                    <div className="contact__info-item">
                        <div className="contact__info-icon">
                            {/* <svg
                                className="contact__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1"
                                viewBox="0 0 256 256"
                                xml:space="preserve"
                            >
                                <defs></defs>
                                <g
                                    style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                                >
                                    <path
                                        d="M 80.89 78.772 H 9.11 c -5.023 0 -9.11 -4.087 -9.11 -9.11 V 20.338 c 0 -5.023 4.087 -9.11 9.11 -9.11 h 71.78 c 5.023 0 9.11 4.087 9.11 9.11 v 49.324 C 90 74.686 85.913 78.772 80.89 78.772 z M 9.11 17.228 c -1.715 0 -3.11 1.396 -3.11 3.11 v 49.324 c 0 1.715 1.395 3.11 3.11 3.11 h 71.78 c 1.715 0 3.11 -1.396 3.11 -3.11 V 20.338 c 0 -1.715 -1.396 -3.11 -3.11 -3.11 H 9.11 z"
                                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                                        transform=" matrix(1 0 0 1 0 0) "
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M 45 55.427 c -5.408 0 -10.599 -2.292 -14.242 -6.288 L 2.493 18.125 l 4.435 -4.042 l 28.265 31.013 c 2.545 2.792 6.028 4.331 9.807 4.331 c 3.779 0 7.262 -1.538 9.808 -4.331 l 28.266 -31.013 l 4.434 4.042 L 59.241 49.138 C 55.599 53.135 50.408 55.427 45 55.427 z"
                                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                                        transform=" matrix(1 0 0 1 0 0) "
                                        stroke-linecap="round"
                                    />
                                    <rect
                                        x="-0.96"
                                        y="57.16"
                                        rx="0"
                                        ry="0"
                                        width="38.98"
                                        height="6"
                                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                                        transform=" matrix(0.7053 -0.7089 0.7089 0.7053 -37.1881 30.8639) "
                                    />
                                    <rect
                                        x="68.47"
                                        y="40.67"
                                        rx="0"
                                        ry="0"
                                        width="6"
                                        height="38.98"
                                        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                                        transform=" matrix(0.709 -0.7053 0.7053 0.709 -21.628 67.9146) "
                                    />
                                </g>
                            </svg> */}
                        </div>
                        <div className="contact__info-text">
                            <h4>Email adreslarymyz</h4>
                            <p>info@nedir-gala.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__map">
                {/* <Script
                    type="text/javascript"
                    charSet="utf-8"
                    strategy="afterInteractive"
                    src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa03926bc18c46afca9eb0fdd86e2a8c9e885cd820760e9dfefc31589211230c7&width=551&height=532&lang=ru_RU&scroll=true"
                /> */}
            </div>
        </div>
    );
}
