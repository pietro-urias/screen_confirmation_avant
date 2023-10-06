"use client"
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri"
import Link from 'next/link'
import { useForm } from '@mantine/form';




export default function Home() {

    const [status, setStatus] = useState<"initial" | "pending" | "finished">("initial");
    const [loading, setLoading] = useState(true);

    function handleSubmit() {
        setStatus("pending")

        setTimeout(() => {
            setStatus("finished");
        }, 1000);
    }
    setTimeout(() => {
        setLoading(false);
    }, 1000);

    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <main className="flex min-h-screen flex-col justify-between items-center bg-slate-50">
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
            </div>

            {/* daqui para baixo é o form usando o Mantine/form */}


            {status !== "finished" ? <form onSubmit={form.onSubmit(() => handleSubmit())}
                className=" rounded-lg flex flex-col items-center shadow- xl bg-white p-7 ">
                <RiPagesLine className="w-10 h-10" />
                <p className="font-bold">
                    Prepare an invoice
                </p>
                <p className="text-sm mb-7">
                    Generate and send an invoice after the transaction is complete.
                </p>

                <div className="flex flex-col justify-start items-start w-full ">
                    {/* Campo email */}
                    <label htmlFor="email" className="text-sm ">
                        Email:
                    </label>
                    <input
                        id="email"
                        className="text-sm mb-2 border border-gray-200 rounded-lg w-full p-1"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />
                    {/* Campo checkbox */}
                    <label htmlFor="checkbox" className="text-sm mr-2">
                        <input
                            className="mr-2"
                            id="checkbox"
                            type="checkbox"
                            {...form.getInputProps('checkbox')}
                        />
                        Sign up for Mass Market newsletters!
                    </label>
                    {/* Campo Botão */}
                    <button className="bg-blue-600 text-white rounded-lg p-2 w-full mt-2">
                        {status === "initial" ? "Send Invoice" : "Loading..."}
                    </button>
                </div>
            </form>
                :
                <>
                    <form className="rounded-lg flex flex-col items-center shadow- xl bg-white p-7">
                    <AiFillCheckCircle className="h-10 w-10 text-green-600" />
                        <p className="font-bold">
                            Invoice generated
                        </p>
                        <p className="text-sm">
                            An invoice will be sent to <strong>{form.values.email}</strong> after the transaction is processed
                        </p>
                    </form>
                </>
            }
        </main>
    );
}
