import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { fetchList } from './moduleActions'

class Module extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    }
    componentDidMount() {
        const { fetchList } = this.props
        fetchList()
    }
    render() {
        const { list } = this.props;
        return <div>
            LIST
            <br />
            {list.map((item, index) => (
                <div key={index}>{item.name} : {item.type}</div>
            ))}
        </div>
    }
}
const mapStateToProps = state => ({
    list: state.module.list
})
const mapDispachtoProps = {
    fetchList
}
export default connect(mapStateToProps, mapDispachtoProps)(Module)