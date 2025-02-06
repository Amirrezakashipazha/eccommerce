import Card from "./card";
import Seperator from "./seprator";

export default function HotSale() {

    const hotSaleValue = [
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Adenium Plant</p>
                    <div className="flex items-center gap-3">
                        <p>$ 350</p>
                        <del className="text-error">$ 450</del>
                    </div>
                </div>
            ,
            image: "/assets/images/hotSale/hotSale_1.png"
        },
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Ficus Twilight</p>
                    <div className="flex items-center gap-3">
                        <p>$ 350</p>
                        <del className="text-error">$ 450</del>
                    </div>
                </div>
            ,
            image: "/assets/images/hotSale/hotSale_2.png"
        },
        {
            caption:
                <div className="flex flex-col gap-2 items-start text-2xl">
                    <p className="font-semibold">Rhoeo Plant</p>
                    <div className="flex items-center gap-3">
                        <p>$ 350</p>
                        <del className="text-error">$ 450</del>
                    </div>
                </div>
            ,
            image: "/assets/images/hotSale/hotSale_3.png"
        },
        {
            caption:
            <div className="flex flex-col gap-2 items-start text-2xl">
            <p className="font-semibold">Ctenanthe burle</p>
            <div className="flex items-center gap-3">
                <p>$ 350</p>
                <del className="text-error">$ 450</del>
            </div>
        </div>
            ,
            image: "/assets/images/hotSale/hotSale_4.png"
        }
    ]
    return (
        <div className="w-full mx-auto max-w-[1200px] px-10 mb-[120px]">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-text text-[48px] leading-[5.5rem] text-center">Hot Sale</h2>
                <Seperator />
            </div>
            <ul className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 items-center gap-10">
                {hotSaleValue.map((item, index) => (
                    <div className="col-span-1" key={index}>
                        <Card image={item.image} text={"Buy"} caption={item.caption} />
                    </div>
                ))}
            </ul>
        </div>
    );
}
