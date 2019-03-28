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
            <>
                {!campuses.data.length && loading && <i className="fas fa-circle-notch fa-spin fa-2x"></i>}
                <div className="columns is-multiline">
                    {campuses.data.map((campus, i) => {
                        return <CampusCard key={campus.id || i + 1} {...campus} />
                    })}
                    {campuses.offset ?
                        <Waypoint onEnter={() => {
                            console.log('WAYPOINT')
                            this.props.getCampuses(campuses.offset, 6)
                        }} />
                        : ''}
                    <style jsx>{`
                    .fetch-more{
                        display: flex;
                        height: 20vh;
                        justify-content: center;
                        align-items: center
                    }
                    `}</style>
                </div>
            </>
        );
    }
}
const mapStateToProps = ({ campuses, loading }) => ({ campuses, loading })
export default connect(mapStateToProps, { getCampuses })(Campuses);
