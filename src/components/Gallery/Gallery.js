import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { getPhotos } from '../../actions/fetchAction';
import Loader from 'react-loader-spinner';
import './styles.scss';
type Props = {
    data : Array<Object>,
    dispatch : Dispatch,
}
export class Gallery extends PureComponent<Props> {
    componentDidMount() {
        const {dispatch } = this.props;
        dispatch(getPhotos());
    }
    render() {
        const { data } = this.props;
        if(!data) return <Loader />;
        return(
            <section className="gallery">
                {data.slice(0,9).map((item,index) => (
                    <div className="singleImage" key={index}><a href={item.link}><img src={item.media.m} alt={item.title}/></a></div>
                ))}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    data : state.photosData.items
});

export default connect(mapStateToProps)(Gallery);