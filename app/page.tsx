import Image from 'next/image'
import { GrFormClose } from "react-icons/gr"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="flex w-full items-center justify-center text-sm border border-b p-1">
        <GrFormClose className="absolute left-0" />
        <p className="text-center">
          Items
        </p>
      </header>
      <div className="flex flex-col flex-1  items-center">
        <Image
          src="/images/por-do-sol-na-cidade.png"
          alt="Imagem teste"
          width={100}
          height={24}
          priority
          className='rounded-lg m-10'
        />
        <h1 className="text-center text-2xl font-bold my-5">
          You're all set!
        </h1>
        <p className="text-center text-sm font-bold my-5">
          Milian Travel Poster is ready to be wrapped and packaged.
        </p>
        <div className="flex flex-col items-center my-10">
          <p className="text-center text-sm font-bold">
            Transaction of <b>0.0015eth</b> is confirmed.
          </p>
          <Link className="text-center text-sm text-blue-400" href="/">View on Block Explorer</Link>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-sm">
            An invoice has been sent to
          </p>
          <p className="text-center text-sm font-bold">
            example@gmail.com
          </p>
          <Link className="text-center text-sm text-blue-400" href="/">Send invoice again</Link>
        </div>
      </div>
    </main>
  )
}
