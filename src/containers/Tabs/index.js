import { connect } from 'react-redux';
import Tabs from '../../components/Tabs';

const mapStateToProps = (state) => ({
    tabName : state.tabs.tabName
});
const mapDispatchToProps = () => ({

});

export default connect(
    mapStateToProps, mapDispatchToProps
)(Tabs);
