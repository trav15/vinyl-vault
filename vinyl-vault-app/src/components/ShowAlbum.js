import React, { Component } from 'react'
import {Col, Button, Icon, Input, Card, CardTitle} from 'react-materialize'

 const Show = (album) => {
      <li className="album" album={album} key={album.id}>
        <Col s={12} m={4}>
          <Card header={<CardTitle reveal image={album.cover_url} waves='light'/>}
              title = {album.title}
              reveal={
                <button className="deleteAlbumBtn" onClick={(e) => this.deleteAlbum(album.id)}>Remove Album</button>}>
              <p>{album.artist}</p>
          </Card>
        </Col>
      </li>
}

export default ShowAlbum
