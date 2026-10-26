import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Shell } from '@/components/site';
import './globals.css';
const manrope=Manrope({subsets:['latin'],variable:'--font-manrope',display:'swap'});
export const metadata:Metadata={title:{default:'Kariba Fisheries | Fish Farming & Pond Construction Zimbabwe',template:'%s | Kariba Fisheries'},description:'Fish pond construction, fingerlings, damliners, aquaculture supplies, training and farm visits across Zimbabwe. Talk to Kariba Fisheries.',icons:{icon:'/icon.png'},openGraph:{title:'Kariba Fisheries | From the first pond to the next harvest',description:'Practical fish farming solutions across Zimbabwe.',images:[{url:'/images/pond-landscape.webp',width:1179,height:882}]}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body className={manrope.variable}><Shell>{children}</Shell></body></html>}
