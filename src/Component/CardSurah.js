import React, { Component } from 'react';

class CardSurah extends Component {
    render() {
        return (
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <span class="badge badge-primary badge-pill">{this.props.surah.numberInSurah}</span>
                        {this.props.surah.text}
                    </li>
                </ul>
        );
    }
}

export default CardSurah;
