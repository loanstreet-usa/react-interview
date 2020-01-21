import { connect } from 'react-redux';
import { togglePublishDeal } from '../actions';
import DealsTableRow from '../components/DealsTableRow';

const mapDispatchToProps = dispatch => {
    return {
        onTogglePublishDeal: id => dispatch(togglePublishDeal(id))
    };
};

export default connect(undefined, mapDispatchToProps)(DealsTableRow);
