import DealsList from './DealsTable';
import React from 'react';
import { create } from 'react-test-renderer';

it('Renders', () => {
    const dealsMockState =
        {
            sortField: 'dealType',
            reverseSort: false,
            deals: [{
                id: 1,
                institution: 'LS Credit Union',
                dealSize: '1000000',
                dealType: 'Consumer Auto',
                isPublished: true,
            }
                ,
            {
                id: 2,
                institution: 'LS Credit Union',
                dealSize: '5000000',
                dealType: 'Real Estate',
                isPublished: false,
            }
            ]
        };

        const target = create(<DealsList {...dealsMockState} />)
        expect(target).toMatchSnapshot();
});