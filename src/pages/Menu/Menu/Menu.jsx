import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import offeredBgImage from '../../../assets/home/05.png';
import menuBgImage from '../../../assets/menu/menu-bg.jpg';
import dessertBgImage from '../../../assets/menu/dessert-bg.jpeg';
import pizzaBgImage from '../../../assets/menu/pizza-bg.jpg';
import saladBgImage from '../../../assets/menu/salad-bg.jpg';
import soupBgImage from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={menuBgImage} title='Our Menu' ></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered} title="offered" img={offeredBgImage} ></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title="dessert" img={dessertBgImage}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title="pizza" img={pizzaBgImage}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title="salad" img={saladBgImage}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title="soup" img={soupBgImage}></MenuCategory>
        </div>
    );
};

export default Menu;