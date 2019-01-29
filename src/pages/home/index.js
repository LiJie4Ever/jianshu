import React, { PureComponent } from 'react';
import {HomeWrapper, 
				HomeLeft,
				HomeRight,
				BackTop} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';


class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0, 0);
	}

	render() {
		const { showScroll } = this.props;
		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt='' className='banner-img' src='https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{ showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
			</HomeWrapper>
		)
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow)
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData(action) {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow(e) {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true));
		} else {
			dispatch(actionCreators.toggleTopShow(false));
		}
	}
});

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
});

export default connect(mapState, mapDispatch)(Home);

