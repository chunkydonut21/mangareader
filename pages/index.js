import React, { Component } from 'react'
import Link from 'next/link'
import { Row, Col, Container } from 'reactstrap'
import { connect } from 'react-redux'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import PopularMangaSection from '../component/PopularMangaSection'
import { fetchPopularManga, fetchLatestManga } from '../actions/index'
import Head from 'next/head'
import LatestMangaSection from '../component/LatestMangaSection'
import MangaCategorySection from '../component/MangaCategorySection'

class Index extends Component {
    static async getInitialProps({ req, reduxStore }) {
        await reduxStore.dispatch(fetchPopularManga(req, 1))
        await reduxStore.dispatch(fetchLatestManga(req, 1))
        return {}
    }

    render() {
        return (
            <div>
                <Head>
                    <meta name="referrer" content="no-referrer" />
                </Head>
                <Navigation />
                <Container>
                    <PopularMangaSection />
                    <LatestMangaSection />
                </Container>
                <Container>
                    <MangaCategorySection />
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(
    null,
    { fetchPopularManga, fetchLatestManga }
)(Index)
