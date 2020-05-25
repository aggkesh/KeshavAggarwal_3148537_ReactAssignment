import React from 'react';
import ProductDeck from './ProductDeck';

import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Product Deck Snapshot Test Cases', () => {
    it('renders correctly enzyme', () => {
        const products = [
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
        const wrapper = shallow(<ProductDeck products={ products } />)
      
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});