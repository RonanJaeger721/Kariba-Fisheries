import { notFound } from 'next/navigation';
import { InnerPage } from '@/components/site';
const names:Record<string,string>={about:'About us',services:'Our services',products:'Products & pond packages',gallery:'Our work in pictures',training:'Training & farm visits',contact:'Get in touch'};
export function generateStaticParams(){return Object.keys(names).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:names[slug]||'Page not found',alternates:{canonical:'/'+slug}}}
export default async function Page({params}:{params:Promise<{slug:string}>}) {const {slug}=await params;if(!names[slug])notFound();return <InnerPage slug={slug}/>}
