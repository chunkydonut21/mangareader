import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from "reactstrap"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

class SingleMangaSection extends Component {
    render() {
        console.log(this.props.singleManga)
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <div className="d-flex mt-5 header d-flex align-items-center">
                            <div>{this.props.singleManga.title}</div>
                        </div>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                        <div className="boxed" style="width: 250px; height: 350px;">
                            <img className="img-responsive"
                                 src={`https://cdn.mangaeden.com/mangasimg/${this.props.singleManga.image}`}
                                 alt={this.props.singleManga.title}/>
                        </div>
                    </Col>
                    <Col md={8} sm={12}>
                        <div>
                            <span>Status</span>
                            <span>Ongoing</span>
                        </div>
                        <div>
                            <span>Other names</span>
                            <span>Case Closed, Meitantei Conan</span>
                        </div>
                        <div>
                            <span>Author(s)</span>
                            <span>Aoyama Gosho</span>
                        </div>
                        <div>
                            <span>Date of release</span>
                            <span>1994</span>
                        </div>
                        <div>
                            <span>Categories</span>
                            <span>Mystery, Shounen</span>
                        </div>
                        <div>
                            <span>Views</span>
                            <span>137</span>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ manga }) => ({
    singleManga: manga.singleManga
})

export default connect(mapStateToProps)(SingleMangaSection)
