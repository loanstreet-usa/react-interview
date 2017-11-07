import React from 'react';
import { create } from 'react-test-renderer';
import DealsTableRow from './DealsTableRow';
it('Renders', () => {
    const dealMock = {
        id: 1,
        institution: 'LS Credit Union',
        dealSize: '1000000',
        dealType: 'Consumer Auto',
        isPublished: true,
    };
    const target = create(<DealsTableRow
        deal={dealMock}
        onRemoveDeal={jest.fn()} />);

    expect(target).toMatchSnapshot();

});