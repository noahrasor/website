import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>
                <title>Raz3r12. - About Me</title>
                <meta name="description" content="I love making new friends" />
                <meta name="keywords" content="Developer, Gaming, Traveling, Riding Bike, Music, Coding" />
                <meta name="author" content="Raz3r12." />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Raz3r12. - About me" />
                <meta property="og:description" content="I want to succeed at running my business Chill Hosting and running my Minecraft server The Chill Realm" />
                <meta property="og:url" content="https://raz3r12.xyz/about" />
                <meta property="og:image" content="https://raz3r12.xyz/logo.jpg" />
                <meta name="theme-color" content="#F43F5E" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@Coming Soon" />
                <meta name="twitter:title" content="Raz3r12. - About Me" />
                <meta name="twitter:description" content="I like meet new people and learn new things."/>
                <meta name="twitter:image" content="https://raz3r12.xyz/logo.jpg"/>
            </Head>

            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex flex-grow items-center">
                    <div className="w-full">
                        <div className="container flex mx-auto justify-center">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                                <h1 className="text-center md:text-6xl text-3xl font-bold">
                                    About <span className="text-rose-500">Me</span>
                                </h1>
                                <div className="container lg:w-3/5 w-11/12 mx-auto mt-4">
                                    <div className="text-left md:text-justify space-y-6 text-lg font-medium text-gray-200">
                                        <p>
                                            Hey, I'm Raz3r12 - I am 21, I love coding bots, developing minecraft servers. I love working for people.
                                            
                                            Links: Coming Soon
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
