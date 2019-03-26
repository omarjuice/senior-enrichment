import React, { Component } from 'react';
import { connect } from 'react-redux'
import CampusCard from './CampusCard';
import { getCampuses } from '../actions';
class Campuses extends Component {
    componentDidMount() {
        this.props.getCampuses()
    }
    scroll() {
        const { campuses } = this.props
        document.querySelectorAll('.card')[campuses.offset - 6].scrollIntoView()
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
                        <div className="column is-one-third-desktop is-half-tablet fetch-more">
                            <button onClick={() => this.props.getCampuses(campuses.offset, 5, this.scroll.bind(this))} className={`button is-primary ${loading && 'is-loading'}`}>
                                See More
                        </button>
                        </div>
                        : ''}
                    <style jsx>{`
                    .fetch-more{
                        display: flex;
                        height: 70vh;
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
