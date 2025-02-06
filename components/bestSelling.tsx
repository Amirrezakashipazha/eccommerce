import Card from "./card";
import Seperator from "./seprator";

export default function BestSelling() {

    const sellingValue = [
        {
            title: "gifting",
            image: "/assets/images/best_selling/best_1.png"
        }, {
            title: "seeds",
            image: "/assets/images/best_selling/best_2.png"
        }, {
            title: "Succulents",
            image: "/assets/images/best_selling/best_3.png"
        }
    ]
    return (
        <div className="w-full mx-auto max-w-[1200px] px-10 mb-[120px]">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-text text-[48px] leading-[5.5rem] text-center">Best Selling</h2>
                <Seperator />
            </div>
            <ul className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-10">
                {sellingValue.map((item, index) => (
                    <Card key={index} image={item.image} text={"Shop Now"} />
                ))}
            </ul>
        </div>
    );
}
