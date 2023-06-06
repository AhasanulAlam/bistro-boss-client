import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import imgFeatured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                heading='FROM OUR MENU'
                subHeading='Check it out'
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-30 pb-20 pt-12 px-36">
                <div>
                    <img src={imgFeatured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p className="uppercase">Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;