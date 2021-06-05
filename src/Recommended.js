// reactインポート
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from 'react-player';
import firebase from './config/firebase';

// メイン部分ここから
// おすすめ機能を定義
const Recommended = () => {
  // 共通のタブ内部分を定義
  const [messages, setMessages] =useState([])
  const [value, setValue] = useState('')
  
  // firebaseからインスタンスを取得
  useEffect(() => {
    firebase.default.firestore().collection('text')
    .onSnapshot((snapshot) => {
      const messages = snapshot.docs.map(doc => {
        return doc.data()
      })
      setMessages(messages)
    })
  }, [])
  
  // 挙動のキャンセルとアラート機能、テキストの追加
  const handleSubmit = e => {
    e.preventDefault()
    if ( value ==='') {
      alert('入力してください');
      return false;
    } else {
    }
    firebase.default.firestore().collection('text').add({
      content: value,
    }) 
    setValue('')
  }

  // 寺崎のタブ内部分を定義
  const [terasaki, setTerasaki] =useState([])
  const [terasakiValue, setTerasakiValue] = useState('')
  
  // firebaseからインスタンスを取得
  useEffect(() => {
    firebase.default.firestore().collection('terasaki')
    .onSnapshot((snapshot) => {
      const terasakiMessages = snapshot.docs.map(doc => {
        return doc.data()
      })
      setTerasaki(terasakiMessages)
    })
  }, [])
  
  // 挙動のキャンセルとアラート機能、テキストの追加
  const handleSubmitTerasaki = e => {
    e.preventDefault()
    if ( terasakiValue ==='') {
      alert('入力してください');
      return false;
    } else {
    }
    firebase.default.firestore().collection('terasaki').add({
      terasakimessage: terasakiValue,
    }) 
    setTerasakiValue('')
  }
  
  //  谷崎のタブ内を定義
    const [tanizaki, setTanizaki] = useState([])
    const [tanizakiValue, setTanizakiValue] = useState('')
  // firebaseからインスタンスを取得
  useEffect(() => {
    firebase.default.firestore().collection('tanizaki')
    .onSnapshot((snapshot) => {
      const tanizakiMessages = snapshot.docs.map(doc => {
        return doc.data()
      })
      setTanizaki(tanizakiMessages)
    })
  }, [])

  // 挙動のキャンセルとアラート機能、テキストの追加
  const handleSubmit3 = e => {
    e.preventDefault()
    if ( tanizakiValue ==='') {
      alert('入力してください');
      return false;
    } else{
    } firebase.default.firestore().collection('tanizaki').add({
      tanizakimessage: tanizakiValue,
    })
    setTanizakiValue('')
  }

  //  小野寺のタブ内を定義
    const [onodera, setOnodera] = useState([])
    const [oValue, setOValue] = useState('')
  // firebaseからインスタンスを取得
  useEffect(() => {
    firebase.default.firestore().collection('onodera')
    .onSnapshot((snapshot) => {
      const oMessages = snapshot.docs.map(doc => {
        return doc.data()
      })
      setOnodera(oMessages)
    })
  }, [])

  // 挙動のキャンセルとアラート機能、テキストの追加
  const handleSubmit4 = e => {
    e.preventDefault()
    if ( oValue ==='') {
      alert('入力してください');
      return false;
    } else{
    } firebase.default.firestore().collection('onodera').add({
      onoderamessage: oValue,
    })
    setOValue('')
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
              }}       
              className="form-text"
            />
            <button type="submit" className="button">送信</button>
          </form>
        </TabPanel>
        {/* 寺崎のタブパネル */}
        <TabPanel>
          <h2>寺崎おすすめ</h2><br />
          <ul>
            <li>
              {terasaki.map((tMessage) => {
                return <li>{tMessage.terasakimessage}</li>;
              })}
            </li>
            <br />
            <form onSubmit={handleSubmitTerasaki}>
              <input
                type='text'
                value={terasakiValue}
                onChange={e => {
                  setTerasakiValue(e.target.value)
                }}
                className="form-text"
              />
            <button type="submit" className="button">送信</button>
            </form>
            <br />
            <li>
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
          <h2>谷崎おすすめ</h2><br />
          <li>
            {tanizaki.map((tanizakiMessage) => {
              return <li>{tanizakiMessage.tanizakimessage}</li>;
            })}
          </li>
          <br />
          <form onSubmit={handleSubmit3}>
            <input
              type='text'
              value={tanizakiValue}
              onChange={e => {
                setTanizakiValue(e.target.value)
              }}
              className="form-text"
            />
            <button type="submit" className="button">送信</button>
          </form><br />
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
          <h2>小野寺おすすめ</h2><br />
          <li>
            {onodera.map((oMessage) => {
              return <li>{oMessage.onoderamessage}</li>;
            })}
          </li>
          <br />
          <form onSubmit={handleSubmit4}>
            <input
              type='text'
              value={oValue}
              onChange={e => {
                setOValue(e.target.value)
              }}
              className="form-text"
            />
            <button type="submit" className="button">送信</button>
          </form><br />
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