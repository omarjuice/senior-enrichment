import React, { Component } from 'react';
import { connect } from 'react-redux'
import CampusCard from './CampusCard';
import { getCampuses } from '../actions';
class Campuses extends Component {
    componentDidMount() {
        this.props.getCampuses()
    }
    render() {
        const { campuses } = this.props
        return (
            <div className="columns">
                {campuses.data.map((campus, i) => {
                    return <CampusCard key={campus.id || i + 1} {...campus} />
                })}
            </div>
        );
    }
}
const mapStateToProps = ({ campuses }) => ({ campuses })
export default connect(mapStateToProps, { getCampuses })(Campuses);
