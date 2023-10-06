"use client"
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import Link from 'next/link'



export default function Home() {

    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <main className="flex min-h-screen flex-col">
            <div className="flex flex-col flex-1 items-center">
                {loading ? (
                    <>
                        <BiLoaderCircle className="animate-spin w-20 h-20 mt-20" />
                        <h1 className="text-center text-2xl font-bold my-5">
                            Pending transaction...
                        </h1>
                        <p className="text-center text-sm">
                            Transacrion will likely process in less than 30 seconds.
                        </p>
                    </>

                ) : (
                    <>
                    <AiFillCheckCircle className="w-20 h-20 mt-20 text-green-600" />
                    <div className="flex flex-col items-center my-10">
                            <p className="text-center text-2xl font-bold">
                                Transaction confirmed.
                            </p>
                            <p className="text-center text-sm">
                                Your transaction of 0.015 ETH has been confirmed.
                            </p>
                            <Link className="text-center text-sm text-blue-400" href="/processing">View on Block Explorer</Link>
                            </div>
                    </>

                )}

                {/*  */}
            </div>
        </main >
    );
}
