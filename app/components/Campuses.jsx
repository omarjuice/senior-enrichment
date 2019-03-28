import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Waypoint } from 'react-waypoint'
import CampusCard from './CampusCard';
import { getCampuses } from '../actions';
class Campuses extends Component {
    componentDidMount() {
        if (this.props.campuses.data.length < 1) {
            this.props.getCampuses(0, 12)
        }
    }
    render() {
        const { campuses, loading } = this.props
        return (
            <div>
                {!campuses.data.length && loading && <i className="fas fa-circle-notch fa-spin fa-2x"></i>}
                <div className="columns is-multiline">
                    {campuses.data.map((campus, i) => {
                        return <CampusCard animate={i > campuses.offset - 7} key={campus.id || i + 1} {...campus}
                            wayPoint={
                                campuses.offset && i === campuses.offset - 1 &&
                                <Waypoint onEnter={() => {
                                    console.log('ENTER');
                                    this.props.getCampuses(campuses.offset, 6)
                                }} />} />
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ campuses, loading }) => ({ campuses, loading })
export default connect(mapStateToProps, { getCampuses })(Campuses);
