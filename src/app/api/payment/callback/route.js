import { grantToken, makeHeaders } from "@/lib/bkashPayment";
import axios from "axios";
import { redirect } from "next/navigation";

export async function GET(request) {
    // const { paymentID, status } = request.nexturl.searchParams

  const searchParams = request.nextUrl.searchParams
  const paymentID = searchParams.get('paymentID');
  const status = searchParams.get('status');

  console.log( "Payment id , status :",  paymentID, status);

    if (status === 'cancel' || status === 'failure') {
        
        redirect(`/payment/error?message=${status}`);
    }
    if (status === 'success') {
        try {
            const bkashGrantToken = await grantToken();
            const { data } = await axios.post(process.env.BKASH_EXECUTE_PAYMENT_URL, { paymentID }, {
                headers: makeHeaders(bkashGrantToken)
            })
            if (data && data.statusCode === '0000') {
                //const userId = globals.get('userId')
                // await paymentModel.create({
                //     userId: Math.random() * 10 + 1 ,
                //     paymentID,
                //     trxID: data.trxID,
                //     date: data.paymentExecuteTime,
                //     amount: parseInt(data.amount)
                // })

                console.log('come here for success');

                redirect('/payment/success?message=success');
            }else{
                redirect(`/payment/error?message=${data.statusMessage}`)
            }
        } catch (error) {
            console.log(error)
            redirect(`/payment/error?message=${error.message}`)
        }
    }
}