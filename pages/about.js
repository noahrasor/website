import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>
                <title>Zackery. - About me</title>
                <meta name="description" content="I'VE OFFICIALLY BECAME YOUR BEST FRIEND!" />
                <meta name="keywords" content="Music,Friends,Family,Singing,Stage,Besties,BestFriends,Personal" />
                <meta name="author" content="Zackery." />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Zackery. - About me" />
                <meta property="og:description" content="I'm trying my best to do everything I can in life." />
                <meta property="og:url" content="https://zackeryjs.xyz/about" />
                <meta property="og:image" content="https://zackeryjs.xyz/logo.jpg" />
                <meta name="theme-color" content="#F43F5E" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@skysstw" />
                <meta name="twitter:title" content="Zackery. - About Me" />
                <meta name="twitter:description" content="Just your new best friend."/>
                <meta name="twitter:image" content="https://zackeryjs.xyz/logo.jpg"/>
            </Head>

            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex flex-grow items-center">
                    <div className="w-full">
                        <div className="container flex mx-auto justify-center">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                                <h1 className="text-center md:text-6xl text-3xl font-bold">
                                    About <span className="text-rose-500">me</span>
                                </h1>
                                <div className="container lg:w-3/5 w-11/12 mx-auto mt-4">
                                    <div className="text-left md:text-justify space-y-6 text-lg font-medium text-gray-200">
                                        <p>
                                            Hey, I'm Zackery - I am a young "highschooler" trying my best to pursue Content Creation and Music. It's always been my dream to be able to sing on a stage, and when I get every chance I have, whether may it be on a real stage, or even on my Twitch channel. I take my chances. Music has always been a releif in me for years, same thing with family and friends. I have 2 projects I am working on, ClumsyHosting and Electronomy eSports. Both are which, coming out in 2022. So please stay tuned for them :D
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
