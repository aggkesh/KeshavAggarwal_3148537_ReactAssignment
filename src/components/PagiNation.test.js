import React from 'react';
import PagiNation, { numberOfPages, paginationItemsGenerator } from './PagiNation';

import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Pagination Snapshot Test Cases', () => {
    it('renders correctly enzyme', () => {
        const wrapper = shallow(<PagiNation productData={ [] } />)
      
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('number of pages calcualted correctly', () => {      
        const productData = {
            productTotalCount: 8
        }

        expect(numberOfPages(productData)).toEqual(1);

        productData.productTotalCount = 16
        expect(numberOfPages(productData)).toEqual(2);

        productData.productTotalCount = 24
        expect(numberOfPages(productData)).toEqual(3);

        productData.productTotalCount = 32
        expect(numberOfPages(productData)).toEqual(4);
    });

    it('number of pagination items to render correctly', () => {      
        const productData = {
            productTotalCount: 8
        }

        expect(paginationItemsGenerator(productData).length).toEqual(1);

        productData.productTotalCount = 16
        expect(paginationItemsGenerator(productData).length).toEqual(2);

        productData.productTotalCount = 24
        expect(paginationItemsGenerator(productData).length).toEqual(3);

        productData.productTotalCount = 32
        expect(paginationItemsGenerator(productData).length).toEqual(4);
    });
})