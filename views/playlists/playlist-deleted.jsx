const React = require("react");

import Head from '../page-components/head-component';
import Header from '../page-components/header-component';

class PlaylistDeleted extends React.Component {
    render() {
        return (
            <html>
                <Head />
                <body>
                    <Header />
                    <div className="nav">
                        <div className="overlay"></div>
                        <a href="/" className="nav__link home-link"><p>Home</p></a>
                        <a href="/playlists/" className="nav__link show-all-playlists"><p>All Playlists</p></a>
                    </div>
                    <main>
                    <div className="form__wrapper">
                        <h1 className="delete__header">Playlist Deleted!</h1>
                    </div>
                    </main>
                </body>
            </html>
        );
    }
}

module.exports = PlaylistDeleted;