export const business = { name: 'Kariba Fisheries', phone: '+263 71 481 1640', secondary: '+263 77 709 1968', additional: '+263 78 791 0033', whatsapp: '263714811640', address: '14 Kawadza Lane, opposite Mbare Netball Complex', instagram: 'https://www.instagram.com/karibafisherieszim/', facebook: 'https://www.facebook.com/search/top?q=Kariba%20Fisheries', hours: [{day:'Monday',time:'07:00 – 16:00'}, ...['Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(day=>({day,time:'Please confirm by phone'}))] };
export const wa = (message='Hello Kariba Fisheries, I would like to enquire about your fish farming solutions.') => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const photos = [
 {src:'pond-landscape',title:'A pond, ready for the next chapter',category:'Ponds'},
 {src:'installation',title:'Geomembrane installation on site',category:'Construction'},
 {src:'harvest',title:'Bream at harvest',category:'Fish'},
 {src:'fingerlings',title:'Fingerlings prepared for transport',category:'Fish'},
 {src:'reservoir',title:'Lined reservoir construction',category:'Construction'},
 {src:'pond-reflection',title:'A completed lined pond',category:'Ponds'},
 {src:'team',title:'Hands-on work, from the ground up',category:'Construction'},
 {src:'pond-care',title:'Plankton Booster and Anti-Fungus',category:'Products'},
 {src:'sunset-installation',title:'Pond lining at sunset',category:'Construction'},
 {src:'bream',title:'Fish from the farm',category:'Fish'},
 {src:'finished-pond',title:'Water-filled lined pond',category:'Ponds'},
 {src:'fresh-fish',title:'Kariba bream',category:'Fish'}
];
export const packages = [
 {size:'20m × 20m',fish:6000,price:2780,image:'pond-landscape',feed:true},
 {size:'20m × 10m',fish:3000,price:1555,image:'pond-reflection',feed:true},
 {size:'10m × 10m',fish:1500,price:854,image:'finished-pond',feed:true},
 {size:'10m × 5m',fish:1000,price:577,image:'installation',feed:false},
 {size:'5m × 5m',fish:750,price:465,image:'sunset-installation',feed:true}
];
export type Product = {name:string;category:string;price?:string;description:string;image?:string};
export const products: Product[] = [
 ...packages.map(p=>({name:`${p.size} Full Pond Package`, category:'Pond packages',price:`US$${p.price.toLocaleString('en-US',{minimumFractionDigits:2})}`,description:`${p.fish.toLocaleString()} fingerlings. ${p.feed?'Feed for 6 months.':'Ask us for the full feed specification.'}`,image:p.image})),
 {name:'Healthy fingerlings',category:'Fish & fingerlings',price:'US$65 / thousand',description:'Book your fingerlings and discuss stocking and transport.',image:'fingerlings'},
 {name:'Breeders',category:'Fish & fingerlings',description:'Speak to us about breeder availability.',image:'fresh-fish'},
 {name:'Kariba breams ready for market',category:'Fish & fingerlings',description:'Enquire about available fish and collection.',image:'harvest'},
 {name:'Quality Matemba',category:'Fish & fingerlings',price:'US$235.00',description:'30kg, approximately 7 buckets. Confirm availability.'},
 {name:'pH and temperature test kit',category:'Pond products',price:'US$20.00',description:'Check pond pH and water temperature.'},
 {name:'Fish feed',category:'Pond products',description:'Discuss feed requirements for your fish farming setup.'},
 {name:'Plankton Booster',category:'Pond products',description:'Pond fertiliser. Ask for application guidance.',image:'pond-care'},
 {name:'Anti-Fungus',category:'Pond products',description:'Enquire about pond treatment and suitable use.',image:'pond-care'},
 {name:'Damliners & UV treated geomembranes',category:'Liners & accessories',description:'Liners for fish ponds, irrigation reservoirs and gold leaching ponds.',image:'installation'},
 {name:'Birdnets',category:'Liners & accessories',description:'Protect your pond. Ask about dimensions and availability.'},
 {name:'Harvest nets',category:'Liners & accessories',description:'Discuss the right net for your pond and harvest.',image:'harvest'},
 {name:'Aerators',category:'Liners & accessories',description:'Enquire about aeration options for your pond.'},
 {name:'Pond construction',category:'Services & repairs',price:'US$400.00',description:'Listed construction price. Site conditions and scope require a quotation.',image:'reservoir'},
 {name:'Pond & damliner repairs',category:'Services & repairs',description:'Discuss leaks, liner damage and pond repairs.',image:'sunset-installation'},
 {name:'Farm visits',category:'Services & repairs',description:'Practical guidance at your farm. Confirm visit arrangements.',image:'team'}
];
export const serviceGroups = [
 {title:'Build the right foundation.',label:'01 / CONSTRUCTION',image:'installation',description:'Practical construction for fish farming, water storage and other lined pond applications.',items:['Fish pond construction','Irrigation reservoirs','Gold leaching ponds','Irrigation and fish pond construction','Pond repairs','Damliner repairs']},
 {title:'Stock. Equip. Grow.',label:'02 / SUPPLY',image:'fingerlings',description:'Source your fish, liners and pond essentials from one team.',items:['Fingerlings and breeders','UV treated geomembranes','Damliners and pondliners','pH and temperature test kits','Fish feed','Plankton Booster','Anti-Fungus','Birdnets','Aerators','Harvest nets']},
 {title:'Know your next step.',label:'03 / GUIDANCE',image:'team',description:'Start with a conversation and get support for the practical decisions on your farm.',items:['Fish farming training','Farm visits','Pond management','Setup guidance','Online fish farming training enquiries']}
];
