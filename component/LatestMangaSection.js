import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import CardContainer from './CardContainer'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'

class LatestMangaSection extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <div className="d-flex mt-5 header d-flex align-items-center">
                            <div>Latest Manga</div>
                            <div className="ml-auto" style={{ cursor: 'hover' }}>
                                <Link
                                    href={{
                                        pathname: '/latest',
                                        query: { page: 1 }
                                    }}
                                >
                                    <span>
                                        <span>more &nbsp;</span>
                                        <FontAwesomeIcon icon={faAngleRight}/>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-wrap">
                        {this.props.latest.docs.map(item => (
                            <CardContainer item={item} id={item._id}/>
                        ))}
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ manga }) => ({
    latest: manga.latest
})

export default connect(mapStateToProps)(LatestMangaSection)
