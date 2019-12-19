import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Head from 'next/head'
import Footer from '../component/Footer'
import { getSingleManga } from '../actions/index'
import { connect } from 'react-redux'
import Navigation from '../component/Navigation'
import SingleMangaSection from '../component/SingleMangaSection'

class Reader extends Component {
    static async getInitialProps({ req, reduxStore, query: { chapterId } }) {
        // await reduxStore.dispatch(getSingleManga(req, chapterId))
        return { chapterId }
    }

    render() {
        return (
            <div>
                <Head>
                    <meta name="referrer" content="no-referrer" />
                </Head>
                <Navigation />
                <Container>
                    {this.props.chapterId}
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(
    null,
    { getSingleManga }
)(Reader)
