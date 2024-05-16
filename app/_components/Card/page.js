import KeyValueText from "../KeyValueText/page";

const Card = ({ item, setSelectedCountry }) => {
    
  return (
    <div className="max-w-sm rounded overflow-hidden bg-white dark:bg-slate-800 dark:text-white min-w-[300px] flex-col p-4 cursor-pointer" onClick={() => setSelectedCountry(item)}>
      <img
        src={item?.flags?.png}
        alt={item?.flags?.alt}
        height={200}
        style={{ height: "200px", verticalAlign: "middle" }}
      ></img>

      <div className="px-3 font-[800] my-3 text-base">
        {item?.name?.common}
      </div>

      <KeyValueText label={"Population"} value={item.population}>
      </KeyValueText>
      <KeyValueText label={"Region"} value={item.region}>
      </KeyValueText>
      <KeyValueText label={"Capital"} value={item.capital[0]}>
      </KeyValueText>
    </div>
  );
};

export default Card;
