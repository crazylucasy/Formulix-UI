export interface Props {
  uri: string;
  type: string;
  name: string;
  address: string;
  id: number;
  amount: number;
}

export default function ListCard(props: Props) {
  return (
    <div className="w-[900px] jsutify-between gap-2 px-[40px]">
      <div id="icon"></div>
      <div id="type"></div>
      <div id="address"></div>
      <div id="id"></div>
      <div id="amount"></div>
      <div id="approve"></div>
    </div>
  );
}
