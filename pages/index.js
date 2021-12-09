import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
        <Head>
            <meta charSet="UTF-8"/>
            <title>Zackery.</title>
            <meta name="description" content="I'VE OFFICIALLY BECAME YOUR BEST FRIEND!" />
            <meta name="keywords" content="Music,Friends,Family,Singing,Stage,Besties,BestFriends,Personal" />
            <meta name="author" content="Zackery" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Zackery." />
            <meta property="og:description" content="I'm trying my best to do everything I can in life." />
            <meta property="og:url" content="https://zackeryjs.xyz/" />
            <meta property="og:image" content="https://zackeryjs.xyz/logo.jpg" />
            <meta name="theme-color" content="#F43F5E" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@skyystw" />
            <meta name="twitter:title" content="Zackery." />
            <meta name="twitter:description" content="Just your new best friend."/>
            <meta name="twitter:image" content="https://zackeryjs.xyz/logo.jpg"/>
        </Head>

        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="container flex mx-auto justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <h1 className="md:text-6xl text-3xl font-bold">
                              Hi there, I'm <span className="text-rose-500">Zackery!</span>
                            </h1>
                            <p className="text-gray-200 text-lg font-medium">
                                your new Best Friend. :)
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
