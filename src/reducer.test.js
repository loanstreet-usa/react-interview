import { createStore } from 'redux';
import reducer, { initialState } from './reducer';

import {
  createDeal,
  selectDeal,
  sortDeals,
  removeDeal,
  publishDeal,
  cancelSelection,
} from './actions';

const dealA = {
  id: 1,
  institution: 'LS Credit Union',
  dealSize: '1000000',
  dealType: 'Consumer Auto',
  isPublished: true,
}

const dealB = {
  id: 2,
  institution: 'LS Credit Union',
  dealSize: '5000000',
  dealType: 'Real Estate',
  isPublished: false,
}

const dealC = {
  id: 3,
  institution: 'Cappa Credit Union',
  dealSize: '2200000',
  dealType: 'Finance',
  isPublished: true,
}

const dealD = {
  id: 4,
  institution: 'Delta Credit Union',
  dealSize: '3150000',
  dealType: 'Science',
  isPublished: false,
}

const blankDeal = {
  id: 0,
  institution: '',
  dealSize: '',
  dealType: '',
  isPublished: false,
}

describe('Redux reducer,', () => {
  initialState.deals[2] = dealC;
  initialState.deals[3] = dealD;

  test('has an initial state as described', () => {
    expect(initialState.deals[0]).toMatchObject(dealA);
    expect(initialState.deals[1]).toMatchObject(dealB);
    expect(initialState.selectedDeal).toMatchObject(blankDeal);
    expect(initialState.selectionReason).toEqual('');
  });

  describe('upon dispatching the createDeal action,', () => {
      const dealE = {
        institution: 'Exodia Lenders',
        dealSize: '4500000',
        dealType: 'Techonology',
        isPublished: false,
      }
      const dealF = {
        institution: 'Full Bright Creditors',
        dealSize: '2350000',
        dealType: 'Advertising',
        isPublished: false,
      }

      const store = createStore(reducer);
      const previousState = store.getState();
      store.dispatch(createDeal(dealE));
      store.dispatch(createDeal(dealF));
      const newState = store.getState();

    test('saves the deal to state', () => {
      const expectedDealE = Object.assign({},dealE, { id: 3 });
      const expectedDealF = Object.assign({},dealF, { id: 4 });
      expect(newState.deals).toEqual(expect.arrayContaining([expectedDealE, expectedDealF]));
    });

    test('does not mutate state', () => {
      expect(previousState).not.toBe(newState);
      expect(previousState.deals).not.toBe(newState.deals);
    });

  });

  describe('upon dispatching the selectDeal action,', () => {
    const store = createStore(reducer);
    const previousState = store.getState();
    store.dispatch(selectDeal(dealA, 'publish'));
    const newState = store.getState();

    test('saves the selected deal to state', () => {
      expect(newState.selectedDeal).toMatchObject(dealA);
      expect(newState.selectionReason).toEqual('publish');
    });

    test('does not mutate state', () => {
      expect(previousState).not.toBe(newState);
      expect(previousState.selectedDeal).not.toBe(newState.selectedDeal);
    });

  });

  describe('upon dispatching the sortDeals action,', () => {
    const store = createStore(reducer);
    const previousState = store.getState();

    test('sort by institution', () => {
      store.dispatch(sortDeals('Institution'));
      const newState = store.getState();

      expect(newState.deals[0]).toMatchObject(dealC);
      expect(newState.deals[1]).toMatchObject(dealD);
      expect(newState.deals[2]).toMatchObject(dealA);
      expect(newState.deals[3]).toMatchObject(dealB);
    });

    test('sort by Deal Type', () => {
      store.dispatch(sortDeals('Deal Type'));
      const newState = store.getState();

      expect(newState.deals[0]).toMatchObject(dealA);
      expect(newState.deals[1]).toMatchObject(dealC);
      expect(newState.deals[2]).toMatchObject(dealB);
      expect(newState.deals[3]).toMatchObject(dealD);
    });

    test('sort by Deal Size', () => {
      store.dispatch(sortDeals('Deal Size'));
      const newState = store.getState();

      expect(newState.deals[0]).toMatchObject(dealA);
      expect(newState.deals[1]).toMatchObject(dealC);
      expect(newState.deals[2]).toMatchObject(dealD);
      expect(newState.deals[3]).toMatchObject(dealB);
    });

    test('sort by Publicaiton status', () => {
      const store = createStore(reducer);
      const previousState = store.getState();
      store.dispatch(sortDeals('Is Published?'));
      const newState = store.getState();

      expect(newState.deals[0]).toMatchObject(dealA);
      expect(newState.deals[1]).toMatchObject(dealC);
      expect(newState.deals[2]).toMatchObject(dealB);
      expect(newState.deals[3]).toMatchObject(dealD);
    });

    test('state is not being mutated', () => {
      const newState = store.getState();
      expect(previousState).not.toBe(newState);
      expect(previousState.deals).not.toBe(newState.deals);
    });

  });

  describe('upon dispatching the removeDeal action,', () => {
    const store = createStore(reducer);
    const previousState = store.getState();
    const dealToBeRemoved = initialState.deals[0];
    store.dispatch(removeDeal(dealToBeRemoved));
    const newState = store.getState();

    test('removes the selected deal from state', () => {
      expect(newState.deals).not.toEqual(expect.arrayContaining([dealToBeRemoved]));
    });

    test('does not mutate state', () => {
      expect(previousState).not.toBe(newState);
      expect(previousState.deals).not.toBe(newState.deals);
    });

  });

  describe('upon dispatching the publishDeal action,', () => {
    const store = createStore(reducer);
    const previousState = store.getState();
    const dealToBePublished = initialState.deals[1];
    store.dispatch(publishDeal(dealToBePublished));
    const newState = store.getState();

    test('publishes the selected deal on state', () => {
      expect(previousState.deals[1].isPublished).toBeFalsy();
      expect(newState.deals[1].isPublished).toBeTruthy();
    });

    test('does not mutate state', () => {
      expect(previousState).not.toBe(newState);
      expect(previousState.deals[1]).not.toBe(newState.deals[1]);
    });

  });

  describe('upon dispatching the cancelSelection action,', () => {
    const store = createStore(reducer);
    const previousState = store.getState();
    store.dispatch(cancelSelection());
    const newState = store.getState();

    test('resets the selected deal on state to a blank deal', () => {
      expect(newState.selectedDeal).toMatchObject(blankDeal);
      expect(newState.selectionReason).toEqual('');
    });

    test('does not mutate state', () => {
      expect(previousState).not.toBe(newState);
      expect(previousState.selectedDeal).not.toBe(newState.selectedDeal);
    });

  });

});
