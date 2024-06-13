"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PaymentSuccess = () => {
    const searchparams = useSearchParams();
    const router = useRouter();

    return (
        <div className='flex justify-center p-24 flex-col h-screen'>
      <div className="flex justify-center">
      <h2>{searchparams.get("message")}</h2>
      <button
        onClick={
          () => {
            router.push('/');
          }
        }
      >
        Try again got to home
      </button>
      </div>
    </div>
    )
}

export default PaymentSuccess;