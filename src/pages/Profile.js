import React, { useState, useEffect } from 'react'
import firebase, {storage} from '../config/firebase'

const Profile = () => {
    const [image, setImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const handleImage = event => {
        const image = event.target.files[0]
        setImage(image)
    }
    
    const onSubmit = event => {
        event.preventDefault()
        if (image === '') {
            alert('ファイルが選択されていません')
        }
        const uploadTask = storage.ref(`/images/${image.name}`).put(image)
            uploadTask.on (
                firebase.default.storage.TaskEvent.STATE_CHANGED,
                    next,
                    error,
                    complete
        )
    }

    const next = snapshot => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(percent + '% done')
        console.log(snapshot)
    }

    const error = error => {
        console.log(error)
    }

    const complete = () => {
        storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then(fireBaseUrl => {
                setImageUrl(fireBaseUrl)
            })
    }

    //  テキストボックス内を定義
    const [profile, setProfile] = useState([])
    const [profileValue, setProfileValue] = useState('')
    // firebaseからインスタンスを取得
    useEffect(() => {
    firebase.default.firestore().collection('coments')
    .onSnapshot((snapshot) => {
    const profileMessages = snapshot.docs.map(doc => {
        return doc.data()
    })
    setProfile(profileMessages)
    })
    }, [])

    // 挙動のキャンセルとアラート機能、テキストの追加
    const handleSubmitProfile = e => {
    e.preventDefault()
    if ( profileValue ==='') {
    alert('入力してください');
    return false;
    } else　{
    } firebase.default.firestore().collection('coments').add({
        coment: profileValue,
    })
    setProfileValue('')
    } 

    return (
        <>
            <div className="wrap">
                <h1 className='title'>Profile</h1>
                <form className='profile' onSubmit={onSubmit}>
                    <img src={imageUrl} className='user-image' />
                    <input type="file" onChange={handleImage} />
                    <button style={{margin:'unset'}}>Upload</button>
                </form>
                    <li>
                        {profile.map((plofileMessage) => {
                        return <li>{plofileMessage.coment}</li>;
                      })}
                    </li>
                    <form onSubmit={handleSubmitProfile}>
                        <input
                            type='text'
                            value={profileValue}
                            onChange={e => {
                                setProfileValue(e.target.value)
                                }}
                        />
                        <button type="submit">送信</button>
                    </form>
            </div>
        </>
    )
}

export default Profile