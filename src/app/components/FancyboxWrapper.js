"use client"; // Required for App Router

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function FancyboxWrapper({ children, options }) {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            // Optional: Add your custom Fancybox options here
            ...(options || {}),
        });

        return () => {
            Fancybox.destroy();
        };
    }, [options]);

    return <>{children}</>;
}
