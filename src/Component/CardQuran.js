import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CardQuran extends Component {
    render() {
        return (
            <Link to={`/surah/${this.props.quran.number}`}>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        {this.props.quran.englishName}
                        <span class="badge badge-primary badge-pill">{this.props.quran.numberOfAyahs} Ayat</span>
                    </li>
                </ul>
            </Link>
        );
    }
}

export default CardQuran;
