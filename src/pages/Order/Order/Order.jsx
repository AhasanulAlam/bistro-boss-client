import Cover from '../../Shared/Cover/Cover';
import orderCoverImage from '../../../assets/shop/orderBg.jpg';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered');
    const popular = menu.filter(item => item.category === 'popular');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const desserts = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={orderCoverImage} title="Order Food" ></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Offered</Tab>
                    <Tab>Popular</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab foodItems={offered}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab foodItems={popular}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab foodItems={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab foodItems={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab foodItems={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab foodItems={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab foodItems={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;