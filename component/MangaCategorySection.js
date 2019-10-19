import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'

class MangaCategorySection extends Component {
    state = {
        categories: [
            'Action',
            'Adult',
            'Adventure',
            'Comedy',
            'Doujinshi',
            'Ecchi',
            'Fantasy',
            'Harem',
            'Historical',
            'Horror',
            'Josei',
            'Martial Arts',
            'Mature',
            'Gender Bender',
            'Mecha',
            'Mystery',
            'One Shot',
            'Psychological',
            'Romance',
            'School Life',
            'Sci-fi',
            'Seinen',
            'Shoujo',
            'Shounen',
            'Slice of Life',
            'Smut',
            'Sports',
            'Supernatural',
            'Tragedy',
            'Webtooms',
            'Yaoi',
            'Yuri'
        ]
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md={3} className="mt-4">
                        <div className="card bg-light mb-3">
                            <div className="card-header bg-primary text-white text-uppercase">
                                <i className="fa fa-list" /> Categories
                            </div>
                            <ul className="list-group category_block">
                                {this.state.categories.map((category, key) => {
                                    return (
                                        <Link
                                            href={{
                                                pathname: '/directory',
                                                query: { category: category, page: 1 }
                                            }}
                                            as={`/directory/${category.toLowerCase().replace(/ /g, '-')}?page=1`}
                                        >
                                            <li class="list-group-item">{category}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default MangaCategorySection
