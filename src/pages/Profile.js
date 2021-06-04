import React, { useState } from 'react'
import firebase, {storage} from '../config/firebase'
import Text from './Text'

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

    return (
        <>
            <div className="wrap">
                <h1>Profile</h1>
                <form className='profile' onSubmit={onSubmit}>
                    <img src={imageUrl} className='user-image' />
                    <input type="file" onChange={handleImage} />
                    <button style={{margin:'unset'}}>Upload</button>
                    <Text />
                </form>
            </div>
        </>
    )
}

export default Profile