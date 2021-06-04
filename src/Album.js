// 各項目をインポート
import React from 'react'
import { Link } from 'react-router-dom'
import  './Album.css'

// メインここから
const Album = () => {
  return (
    <div>
      {/* タイトル名　*/}
      <h1>アルバム機能</h1>
      <br />
      {/* 各項目へのリンク */}
      <div className="transition">
        <Link to={`/`}>TODOリスト</Link>
        <Link to={`/room`}>room</Link>
        <Link to={`/profile`}>profile</Link>
        <Link to={`/Recommended`}>おすすめ機能</Link>
      </div>
      {/* 寺崎のボックス */}
      <div className="box1">
        <h2 className="name">寺崎 遼</h2>
        <div className="box1-1">
          <p>ここに文章を入れます
            <br />ここに文章を入れます
            <br />ここに文章を入れます
          </p>
        </div>
      </div>
      {/* 谷崎のボックス */}
      <div className="box2">
        <h2 className="name">谷崎 奨</h2>
        <div className="box2-2">
          <p>ここに文章を入れます
            <br />ここに文章を入れます
            <br />ここに文章を入れます
          </p>
        </div>
      </div>
      {/* 小野寺のボックス */}
      <div className="box3">
        <h2 className="name">小野寺一樹</h2>
        <div className="box3-3">
          <p>ここに文章を入れます
            <br />ここに文章を入れます
            <br />ここに文章を入れます
          </p>
        </div>
      </div>
    </div>
  )
}
// メインここまで

export default Album