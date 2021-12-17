import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
        <Head>
            <meta charSet="UTF-8"/>
            <title>Raz3r12.</title>
            <meta name="description" content="I'VE OFFICIALLY BECAME YOUR BEST FRIEND!" />
            <meta name="keywords" content="Music,Friends,Family" />
            <meta name="author" content="Raz3r12" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Raz3r12." />
            <meta property="og:description" content="I'm trying my best to do everything I can in life." />
            <meta property="og:url" content="https://raz3r12.xyz/" />
            <meta property="og:image" content="https://raz3r12.xyz/logo.jpg" />
            <meta name="theme-color" content="#F43F5E" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@Coming Soon" />
            <meta name="twitter:title" content="Raz3r12." />
            <meta name="twitter:description" content="Just your new best friend."/>
            <meta name="twitter:image" content="https://Raz3r12.xyz/logo.jpg"/>
        </Head>

        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="container flex mx-auto justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <h1 className="md:text-6xl text-3xl font-bold">
                              Hi there, I'm <span className="text-rose-500">Raz3r12!</span>
                            </h1>
                            <p className="text-gray-200 text-lg font-medium">
                                Contact me if you want me as a worker :)
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}
