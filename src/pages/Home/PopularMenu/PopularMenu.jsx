
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu(); // using the self defined custom hook useMenu()
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-12">
            <SectionTitle
                heading='From Our Menu'
                subHeading='Popular Items'
            ></SectionTitle>
            <div className="flex flex-col justify-center items-center">
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        popular.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>

                <div>
                    <button className="btn btn-outline border-0 border-b-4 my-6">View Full Menu</button>
                </div>
            </div>

        </section>
    );
};

export default PopularMenu;