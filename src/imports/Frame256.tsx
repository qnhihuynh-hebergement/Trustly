export default function Frame() {
  return (
    <div className="bg-[rgba(37,99,235,0.06)] content-stretch flex items-center justify-center px-[15px] py-[4px] relative rounded-[14px] size-full">
      <div aria-hidden="true" className="absolute border-[#2563eb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Satoshi:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2563eb] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Crédits 9/10</p>
    </div>
  );
}