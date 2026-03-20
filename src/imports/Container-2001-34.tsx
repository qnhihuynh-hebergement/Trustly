function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-[92.625px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[30px] left-0 not-italic text-[#0f172a] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Historique</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Satoshi:Medium',sans-serif] leading-[20px] left-[28.5px] not-italic text-[#2563eb] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Voir tout</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="Container">
      <Heading />
      <Button />
    </div>
  );
}