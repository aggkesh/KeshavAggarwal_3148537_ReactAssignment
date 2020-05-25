import React from 'react';
import DashboardHeader from './DashboardHeader';

import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { DEFAULT_SORT } from '../redux/productList/productsTypes';

Enzyme.configure({ adapter: new Adapter() })

describe('Dashboard Header Snapshot Test Cases', () => {
    it('renders correctly enzyme', () => {
        const productData = {
            activePage: 2,
            sort: DEFAULT_SORT,
            products: [
                {
                  id: 1,
                  title: "Google Pixel - Black",
                  img: "/img/product-1.png",
                  price: 19999,
                  info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify."
                },
                {
                  id: 2,
                  title: "Samsung S7",
                  img: "/img/product-2.png",
                  price: 16,
                  info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify."
                },
            ]
        }
        const wrapper = shallow(<DashboardHeader productData={ productData } />)
      
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});