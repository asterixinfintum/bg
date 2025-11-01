import { Resend } from "resend";

import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_SIGN);

//"Updates <important-update@bvextrade.com"

async function deliverEmail({ from, to, subject, html }) {
    console.log(from, to, subject, html)
    try {
        const { data, error } = await resend.emails.send({
            from,
            to,
            subject,
            html
        });

        if (error) {
            return console.error({ error });
        }

        console.log({ data });

        console.log('delivery successful')

        return { message: 'delivery successful' }
    } catch (error) {
        console.log(error)
    }
}

export default deliverEmail