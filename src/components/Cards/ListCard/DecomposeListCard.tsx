import { Icon } from '@iconify/react/dist/iconify.js';

export interface Props {
  uri: string;
  type: string;
  name: string;
  address: string;
  id: number;
  amount: number;
}

export default function DecomposeListCard(props: Props) {
  return (
    <div
      className={`flex gap-3 w-[400px] md:w-[80%] h-[80px] justify-between items-center md:px-[40px] py-2 border ${
        props.type == 'ERC20'
          ? 'bg-[#09F5D8]/10 border-[#09F5D8]'
          : props.type == 'ERC721'
          ? 'bg-[#099EF5]/10 border-[#099EF5]'
          : props.type == 'Blueprint'
          ? 'bg-[#FFFFFF]/10 border-[#FFFFFF]'
          : 'bg-[#7414D5]/10 border-[#7414D5]'
      } rounded-3xl text-white text-base`}
    >
      <div id="icon" className="flex justify-center w-[64px] py-2">
        <img src={props.uri} className=" h-[68px] rounded-full" />
      </div>

      <div
        id="type"
        className="flex text-white justify-center items-center w-[15%]"
      >
        {props.type}
      </div>

      <div id="name" className="flex flex-col justify-center w-[20%]">
        <p className="text-[#858584] text-xs">Name</p>
        <p>{props.name}</p>
      </div>

      <div
        id="address"
        className="hidden md:block flex-col justify-center w-[30%]"
      >
        <p className="text-[#858584] text-xs">Address</p>
        <div className="flex gap-2">
          {props.address.substring(0, 9)} ... {props.address.slice(-7)}
          <button>
            <Icon icon="solar:copy-outline" className="item-center my-auto" />
          </button>
        </div>
      </div>

      <div id="id" className="w-[5%] justify-center">
        <p className="text-[#858584] text-xs">Id</p>
        <p>{props.id}</p>
      </div>

      <div id="amount" className="w-[20%]">
        <p className="text-[#858584] text-xs">Amount</p>
        <p>{props.amount}</p>
      </div>
    </div>
  );
}
