import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import recommendPic from '../../../assets/home/slide5.jpg';

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                heading='Chef Recommends'
                subHeading='Should Try'
            ></SectionTitle>

            <div className="flex flex-col md:flex-row gap-4 mb-16">
                <div className="card card-compact w-96 bg-slate-100 shadow-xl">
                    <figure><img src={recommendPic} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline btn-warning border-0 border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-slate-100 shadow-xl">
                    <figure><img src={recommendPic} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline btn-warning border-0 border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-slate-100 shadow-xl">
                    <figure><img src={recommendPic} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline btn-warning border-0 border-b-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ChefRecommends;