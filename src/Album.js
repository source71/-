// 各項目をインポート
import React from 'react'

// メインここから
const Album = () => {
  return (
    <div className='wrap'>
      {/* タイトル名　*/}
      <h1 className='title'>アルバム機能</h1>
      <br />
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
          <p>
            入校してから４ヶ月間、大変お世話になりました。初めは何もできなかったところから、
            １つのアプリ作成までをできるようになり、非常に有意義な４ヶ月だったと感じています！CodeVillageでプログラミングを学べたこと、
            そして寺崎さんと小野寺さんとこのアプリを作れたことをきっかけにこれからも自己研鑽に励みます！！本当にありがとうございました♪
          </p>
        </div>
      </div>
      {/* 小野寺のボックス */}
      <div className="box3">
        <h2 className="name">小野寺一樹</h2>
        <div className="box3-3">
          <p>CodeVillageでの授業を通して、プログラミングの基礎を始め多くのことを学ぶことができました。<br />
          今後も継続してプログラミングの学習に励んでいきます。
          </p>
        </div>
      </div>
    </div>
  )
}
// メインここまで

export default Album