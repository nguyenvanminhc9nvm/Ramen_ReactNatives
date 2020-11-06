import { connect } from 'react-redux';
import StoreScreen from '../component/StoresScreen';
import { fetchError, fetchStore } from '../redux/actions/StoreActions';

const mapStateToProps = (state) => ({
    stores: state.storeReucer.stores
});

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchStore: () => {
            dispatch(fetchStore())
        },
        onFetchError: (error) => {
            dispatch(fetchError(error))
        }
    }
    
}

export default connect(mapStateToProps)(mapDispatchToProps)(StoreScreen)