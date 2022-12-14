export default function HeaderCard(props) {
  return (
    <div className="flex justify-between desktop:flex-row tab:flex-row flex-col gap-2">
      <h1 className="font-bold text-[20px]">{props.title}</h1>
      {!props.button ? <p className="text-green-700 text-sm cursor-pointer font-semibold">{props.action}</p> : <button className={props.classNameBtn}>+ {props.actionBtn}</button>}
    </div>
  );
}
