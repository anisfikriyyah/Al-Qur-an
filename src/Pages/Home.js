import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getQuran} from '../redux/Action/QuranAction'
import Loading from '../Component/Loading'
import CardQuran from '../Component/CardQuran'

class Home extends Component {
  componentDidMount(){
    this.props.QuranAction()
  }

  render() {
      console.log(this.props.quran, "ini lah")
    return (
      <div className="row">
        {
          this.props.quran.quran.length > 0 ? (
            this.props.quran.quran.map((list, i)=>(
              <div className="col-md-12">
              <CardQuran key={i} quran={list} />
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
        quran:Store.quran
    }
}

const mapDispatchToProps = dispatch => {
  return {
    QuranAction: (data) => {
      dispatch(getQuran(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
