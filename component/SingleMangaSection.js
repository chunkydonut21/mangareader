import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Badge, ListGroup, ListGroupItem } from "reactstrap"
import moment from 'moment'
import Link from "next/link"
import Router from "next/router"

class SingleMangaSection extends Component {
    render() {
        const { singleManga } = this.props
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <div className="d-flex mt-5 header d-flex align-items-center">
                            <div>{singleManga.title}</div>
                        </div>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                        <div className="boxed" style={{ width: 250, height: 350 }}>
                            <img className="img-responsive"
                                 src={`https://cdn.mangaeden.com/mangasimg/${singleManga.image}`}
                                 alt={singleManga.title}/>
                        </div>
                    </Col>
                    <Col md={8} sm={12}>
                        <div>
                            <span>Status: </span>
                            <strong>{singleManga.status}</strong>
                        </div>
                        <div className="my-2">
                            <span>Author(s): </span>
                            <strong>{singleManga.author}</strong>
                        </div>
                        <div className="my-2">
                            <span>Date of release: </span>
                            <strong>{singleManga.released}</strong>
                        </div>
                        <div className="my-2">
                            <span>Categories: </span>
                            {singleManga.categories.map(i => <Badge className="mr-2" color="primary" onClick={() => {
                                 Router.push({ pathname: `/directory/${i.toLowerCase().split(" ").join("-")}`, query: { page: 1 }})
                            }}>{i}</Badge>)}
                        </div>
                        <div className="my-2">
                            <span>Views: </span>
                            <strong>{singleManga.hits}</strong>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="d-flex mt-5 header d-flex align-items-center">
                            <div>Chapters</div>
                        </div>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {
                                singleManga.chapters.map((i) => {
                                    return (
                                        <Link
                                            href={{
                                                pathname: '/reader',
                                                query: { chapterId: i[3] }
                                            }}
                                            as={`/reader/${i[3]}`}
                                        >
                                            <ListGroupItem className="d-flex justify-content-between">
                                                <div>{singleManga.title} <em className="ml-3">Chapter</em> - <strong>{i[0]}</strong>
                                                </div>
                                                <div>{moment(i[1]).format("YYYY-MM-DD")}</div>
                                            </ListGroupItem>

                                        </Link>
                                    )
                                })
                            }
                        </ListGroup>
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
