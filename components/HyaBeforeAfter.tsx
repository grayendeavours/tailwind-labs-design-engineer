import Image from "next/image";
import hyaDashboardBefore from '/public/hya-dashboard-before.png';
import hyaDashboardAfter from '/public/hya-dashboard-after.png';
import hyaCreateBefore from '/public/hya-create-before.png';
import hyaCreateAfter from '/public/hya-create-after.png';

export function HyaBeforeAfter () {
  return (
    <div className="p-4 md:p-8 bg-gray-50 border-y -mx-2 sm:-mx-8 border-gray-200">
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-8 max-w-screen-xl m-auto">
      <Image loading="lazy" className="border border-gray-200 opacity-50 hover:opacity-100 scale-90 origin-bottom md:origin-right transition-opacity" src={hyaDashboardBefore} alt="hya dashboard before" />
      <Image loading="lazy" className="border border-gray-200 shadow-2xl z-10" src={hyaDashboardAfter} alt="hya dashboard after" />
      <Image loading="lazy" className="border border-gray-200 opacity-50 hover:opacity-100 scale-90 origin-bottom md:origin-right transition-opacity" src={hyaCreateBefore} alt="hya create a role before" />
      <Image loading="lazy" className="border border-gray-200 shadow-2xl z-10" src={hyaCreateAfter} alt="hya create a role after" />
    </div>
    </div>
  )
}