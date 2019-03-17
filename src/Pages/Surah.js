import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getSurah} from '../redux/Action/SuratAction'
import Loading from '../Component/Loading'
import CardSurah from '../Component/CardSurah';

class Surah extends Component {
  componentDidMount(){
    this.props.SurahAction(this.props.match.params.nomor)
  }

  render() {
      console.log(this.props.surah, "ini lah")
    return (
      <div className="row">
        {
          this.props.surah.surah.length > 0 ? (
            this.props.surah.surah.map((list, i)=>(
              <div className="col-md-12">
              <CardSurah key={i} surah={list} />
              </div>
            ))
          ) : (<Loading />)
        }
      </div>
    )
  }
}

const mapStateToProps = (Store) => {
    return {
        surah:Store.surah
    }
}

const mapDispatchToProps = dispatch => {
  return {
    SurahAction: (data) => {
      dispatch(getSurah(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Surah);
