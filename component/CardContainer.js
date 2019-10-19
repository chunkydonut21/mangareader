import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap'
import Link from 'next/link'

class CardContainer extends Component {
    render() {
        const { a, im, t, i } = this.props.item
        return (
            <div className="w-20 mt-3">
                <Link
                    href={{
                        pathname: '/manga',
                        query: { slug: a }
                    }}
                    as={`/manga/${a}`}
                >
                    <div className="card-style">
                        <img
                            src={
                                im
                                    ? `https://cdn.mangaeden.com/mangasimg/${im}`
                                    : 'https://cdn.mangaeden.com/images/no_image.svg'
                            }
                            className="img-style"
                            alt="Card image cap"
                        />
                        <div className="text-center text-white bg-secondary w-100 ellipse">
                            {t.length > 15 ? `${t.slice(0, 15)}...` : t}{' '}
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default CardContainer
