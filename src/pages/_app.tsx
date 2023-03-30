import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";

import { WebsiteProvider } from "@/makasi/core/website/website.context";

import "@/styles/globals.css";

const firebaseConfig = {
  apiKey: "AIzaSyD4IaUkWbDHkJ76lAgDJ5sF_7AmOKDpND4",
  authDomain: "makasi-8698c.firebaseapp.com",
  projectId: "makasi-8698c",
  storageBucket: "makasi-8698c.appspot.com",
  messagingSenderId: "626906378632",
  appId: "1:626906378632:web:5e4d92be18060ff4b04a3d",
  measurementId: "G-C9PJYFR5VM",
};

initializeApp(firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WebsiteProvider>
      <Component {...pageProps} />
    </WebsiteProvider>
  );
}
