import React from 'react';
import { create} from 'react-test-renderer';
import DealsHeader from './DealsHeader';

it('Renders', () => {
    const mockHeader = {
        title: 'Mock Header',
        value: 'mock',
        isSortField: true,
        onSort: jest.fn(),
    };

    const target = create(<DealsHeader {...mockHeader} />)
    expect(target).toMatchSnapshot();
});
