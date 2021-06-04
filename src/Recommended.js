// reactインポート
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from 'react-player';
// import firebase from './config/firebase';

// メイン部分ここから
// おすすめ機能を定義
const Recommended = () => {
  const [messages, setMessages] =useState([])
  const [value, setValue] = useState('')

// // firebaseからインスタンスを取得
//   useEffect(() => {
//     firebase.firestore().collection('messages')
//         .onSnapshot((snapshot) => {
//             const messages = snapshot.docs.map(doc => {
//                 return doc.data()
//             })
//             setMessages(messages)
//         })
// }, [])

// 挙動のキャンセルとアラート機能、テキストの追加
const handleSubmit = e => {
  e.preventDefault()
  if ( value ==='') {
    alert('入力してください');
    return false;
  } 
  // firebase.firestore().collection('messages').add({
  //     content: value,
  // })
}

  return(
    <div className='wrap'>
      {/* タイトル名 */}
      <h1 className='title'>おすすめ機能</h1>
      <br />
      {/* タブの大枠 */}
      <Tabs className="tabs">
        <TabList>
          <Tab  className="tab_item">共通</Tab>
          <Tab　className="tab_item">寺崎</Tab>
          <Tab　className="tab_item">谷崎</Tab>
          <Tab　className="tab_item">小野寺</Tab>
        </TabList>
        {/* 共通のタブパネル */}
        <TabPanel>
          <a href="https://js.course.codevillage.jp/">
          CodeVillage
          </a>
          <br />
          <li>
            {messages.map((message) => {
              return <li>{message.content}</li>;
            })}
          </li>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={value}
              onChange={e => {
                setValue(e.target.value)
                console.log(e.target.value)
              }}
            />
            <button type="submit">送信</button>
          </form>
        </TabPanel>
        {/* 寺崎のタブパネル */}
        <TabPanel>
          <ul>
            <li> 動画サンプル
              <ReactPlayer 
                url='https://youtu.be/M3ijyTqsE9M'　
                controls={true}
                volume
                muted
                width="560px"
                height="315px"
              />
            </li>
          </ul>
        </TabPanel>
        {/* 谷崎のタブパネル */}
        <TabPanel>
          <h2>谷崎おすすめ</h2>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/H5_OSFV7j4Y" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          />
        </TabPanel>
        {/* 小野寺のタブパネル */}
        <TabPanel>
          <h2>小野寺おすすめ</h2>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/mC6IuzpTe5Q" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            />
        </TabPanel>    
      </Tabs>

    </div>
  )
}
// メイン部分ここまで

// Recommendedを外に出す
export default Recommended