import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Head from 'next/head'
// import PopularMangaList from '../component/PopularMangaList'
import Footer from '../component/Footer'
import { fetchMangaByCategory } from '../actions/index'
import { connect } from 'react-redux'
import Navigation from '../component/Navigation'
import CategoryList from '../component/CategoryList'

class Category extends Component {
    static async getInitialProps({ req, reduxStore, query: { category, page } }) {
        await reduxStore.dispatch(fetchMangaByCategory(req, category, page))
        return { category: category, page: page }
    }

    render() {
        return (
            <div>
                <Head>
                    <meta name="referrer" content="no-referrer" />
                </Head>
                <Navigation />
                <Container>
                    {/* <PopularMangaList activePage={this.props.page} /> */}

                    <CategoryList catName={this.props.category} page={this.props.page} />
                </Container>
                <Footer />
            </div>
        )
    }
}

export default connect(
    null,
    { fetchMangaByCategory }
)(Category)
