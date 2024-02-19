import Ethmark from '../assets/ethmark.svg';

export interface Props {
  imageLink: string;
  name: string;
  blueprintid: number;
  tsupply: number;
  mintprice: number;
  mintlimit: number;
}

export function BlueprintCard(props: Props) {
  return (
    <div
      id="container"
      className="w-[280px] h-[480px] border border-black bg-black rounded-3xl border-block"
      style={{ overflow: 'hidden' }}
    >
      <div className="relative w-full">
        <div
          id="badge"
          className="absolute left-[152px] top-[26px] w-[175.5px] h-[30px] bg-[#0047FF] text-white text-center text-[18px] leading-[20.37px] rotate-[38.86deg] py-auto px-[35px]"
        >
          Blueprint
        </div>
        <img src={props.imageLink} alt="okoko" />
        <div
          id="gradient"
          className="absolute top-[260px] bg-gradient-to-t from-[#000000] from-20% bg-opacity-100 to-[#000407]/0 w-[280px] h-[82px] mt-"
        ></div>
        <div
          id="infor"
          className="relative flex flex-col w-[237px] gap-y-1 top-[-8px] left-[25px]"
        >
          <div id="name" className="text-white">
            <p className="text-xs font-mono text-[#858584]">Name</p>
            <p className="text-lg font-mono">{props.name}</p>
          </div>

          <div id="id_supply" className="flex justify-between text-white">
            <div id="id" className="">
              <p className="text-xs font-mono text-[#858584]">ID</p>
              <p className="text-lg font-mono">{props.blueprintid}</p>
            </div>
            <div id="id" className="text-end">
              <p className="text-xs font-mono text-[#858584]">Total Supply</p>
              <p className="text-lg font-mono">{props.tsupply}</p>
            </div>
          </div>

          <div id="id_supply" className="flex justify-between text-white">
            <div id="id" className="">
              <p className="text-xs font-mono text-[#858584]">Mint Price</p>
              <p className="text-lg font-mono">{props.mintprice}</p>
            </div>
            <div id="id" className="text-end">
              <p className="text-xs font-mono text-[#858584]">Mint Limit</p>
              <p className="text-lg font-mono">
                {/* <span>
                  <Ethmark />
                </span> */}
                {props.mintlimit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
