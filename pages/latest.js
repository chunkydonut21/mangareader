import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Head from 'next/head'
import LatestMangaList from '../component/LatestMangaList'
import Footer from '../component/Footer'
import { fetchLatestManga } from '../actions/index'
import { connect } from 'react-redux'
import Navigation from '../component/Navigation'

class Popular extends Component {
    static async getInitialProps({ req, reduxStore, query: { page } }) {
        await reduxStore.dispatch(fetchLatestManga(req, page))
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
                    <LatestMangaList activePage={this.props.page} />
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(
    null,
    { fetchLatestManga }
)(Popular)
