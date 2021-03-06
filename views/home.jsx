const React = require("react");

import Head from './page-components/head-component';
import Header from './page-components/header-component';

class Home extends React.Component {

    render() {

        const displayLoggedInUser = () => {
            if (this.props.currentUser) {
                return (<div className="user__wrapper">
                    <p className="user-email">Logged in as: {this.props.currentUser.email}</p>
                    </div>)
            } else {
                return;
            }
        }

        return (
            <html>
                <Head />
                <body>

                    <Header />
                    <main>

                    <div className="banner">
                        <div className="landing-page__nav">
                            <div className="overlay"></div>
                            <a href="/artists/" className=" landing-page-link">ARTISTS</a>
                        </div>
                    </div>
                    <div className="login-register__wrapper home">
                            {displayLoggedInUser()}
                            <form type="hidden" method="POST" action={`/auth/logout`} className="add-form logout-form">
                            <button type="submit" className="logout-btn"><p>Logout</p></button>
                            </form>
                            <a href='./favourites' className="favourites-link"><p>Favourites</p></a>
                    </div>
                    <div className="featured-artist">
                        <h2 className="featured-artist__header">Featured Artist</h2>
                        <a href={`./artists/${this.props.singleArtist.id}`} className="featured-artist__name">{this.props.singleArtist.name}</a>
                        <div className="featured-artist__img-wrapper">
                            <img className="featured-artist__img" src={this.props.singleArtist["photo_url"]} />
                        </div>
                    </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = Home;