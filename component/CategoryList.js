import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import CardContainer from './CardContainer'
import { Row, Col } from 'reactstrap'
import Pagination from 'react-js-pagination'
import Link from 'next/link'
import Router from 'next/router'

class CategoryList extends Component {
    state = {
        activePage: parseInt(this.props.page)
    }
    handlePageChange = e => {
        this.setState({ activePage: e })
        Router.push({ pathname: `/directory/${this.props.catName}`, query: { page: e } })
    }

    render() {
        console.log(this.state, 'LOL')
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <div className="d-flex mt-5 header d-flex align-items-center">
                            <div>{this.props.catName} Manga</div>
                        </div>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-wrap">
                        {this.props.mangaByCategory.docs.map(item => (
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
    mangaByCategory: manga.mangaByCategory
})

export default connect(mapStateToProps)(CategoryList)
