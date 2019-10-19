import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import CardContainer from './CardContainer'
import { Row, Col } from 'reactstrap'
import Pagination from 'react-js-pagination'
import Link from 'next/link'
import Router from 'next/router'

class LatestMangaList extends Component {
    state = {
        activePage: 1
    }
    handlePageChange = e => {
        this.setState({ activePage: e })
        Router.push({ pathname: '/latest', query: { page: e } })
    }

    render() {
        console.log(this.props.activePage, 'LOL')
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <div className="d-flex mt-5 header d-flex align-items-center">
                            <div>Latest Manga</div>
                        </div>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-wrap">
                        {this.props.latest.docs.map(item => (
                            <CardContainer item={item} id={item._id} />
                        ))}
                        <Pagination
                            hideNavigation
                            pageRangeDisplayed={10}
                            itemClass="page-item"
                            linkClass="page-link"
                            activePage={this.state.activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={550}
                            onChange={e => this.handlePageChange(e)}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ manga }) => ({
    latest: manga.latest
})

export default connect(mapStateToProps)(LatestMangaList)
