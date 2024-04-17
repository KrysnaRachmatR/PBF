"use client";

import MyApp from "@/components/atoms/myapp";
import ContactPage from "@/components/templates/contacts_page";

export default function Home() {
    return <MyApp Component={ContactPage} pageProps={undefined}/>;
}