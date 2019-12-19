import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Head from 'next/head'
import PopularMangaList from '../component/PopularMangaList'
import Footer from '../component/Footer'
import { fetchPopularManga, fetchLatestManga } from '../actions/index'
import { connect } from 'react-redux'
import Navigation from '../component/Navigation'

class Popular extends Component {
    static async getInitialProps({ req, reduxStore, query: { page } }) {
        await reduxStore.dispatch(fetchPopularManga(req, page))
        return { page: page }
    }

    render() {
        return (
            <div>
                <Head>
                    <meta name="referrer" content="no-referrer" />
                </Head>
                <Navigation />
                <Container>
                    <PopularMangaList activePage={parseInt(this.props.page)} />
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(
    null,
    { fetchPopularManga }
)(Popular)
