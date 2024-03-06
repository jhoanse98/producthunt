import { Nunito_Sans, Poppins, Roboto_Slab } from "next/font/google";

export const nunito_sans_init = Nunito_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito_sans',
    weight: ['300', '600'],
});

export const poppins_init = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['300', '600'],
})

export const roboto_slab_init = Roboto_Slab({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto_slab',
    weight: ['300', '700'],
})

export const nunito_sans = nunito_sans_init.variable;
export const poppins = poppins_init.variable;
export const roboto_slab = roboto_slab_init.variable;