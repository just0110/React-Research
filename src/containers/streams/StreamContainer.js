import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { StreamCreate, StreamDelete, StreamDetail, StreamEdit, StreamList } from './streams'

export default class StreamContainer extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={StreamList}/>
            <Route path="/streams/new" exact component={StreamCreate}/>
            <Route path="/streams/edit" exact component={StreamEdit}/>
            <Route path="/streams/delete" exact component={StreamDelete}/>
            <Route path="/streams/show" exact component={StreamDetail}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}