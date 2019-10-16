import React from 'react';
import PropTypes from 'prop-types'

export default function GamesList ({games}) {
    const emptyMessage = (
        <p>Your games collection is empty</p>
    )
    const gamesList=(
        <p>games list</p>
    )
    return(
        <div>
            {games.length===0?emptyMessage:gamesList}
        </div>
    );
}

GamesList.propTypes = {
    games:PropTypes.array.isRequired
}