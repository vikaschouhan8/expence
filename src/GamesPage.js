import React, { Component } from 'react'
import GamesList from './GamesList';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class GamesPage extends Component {
    render() {
        return (
            <div>
                Games Page list

                <GamesList games={this.props.games} />
            </div>
        )
    }
}
GamesPage.propTypes ={
    games: PropTypes.array.isRequired
}

function mapStateToProps(state){
    return{
        games:state.games
    }
}

export default connect(mapStateToProps)(GamesPage);