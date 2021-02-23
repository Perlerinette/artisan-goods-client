import {useState} from 'react';

const CLOUD_URL = 'https://api.cloudinary.com/v1_1/natescloudinary/image/upload'

const ImgageUpload = (props) => {

    const [imageUrl, setImageUrl] = useState('#')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/user/cloudsign', {
            method: 'GET',
            headers: {
                'Authorization': props.token
            }
        })

        const { sig, ts } = await response.json()

        const file = document.getElementById('file-input').files[0]
        const forData = new FormData()

        FormData.append('file', file)
        FormData.append('upload_preset', 'cloudinary-mayhem')
        FormData.append('api_key', '322896181919414')
        FormData.append('signature', sig)
        FormData.append('timestamp', ts)

        const results = await (await fetch(CLOUD_URL, {
            method: 'POST',
            body: FormData
        })).json()

        console.log(results)

        const final = await (await fetch('http://localhost:3000/product/photoURL', {
            method: 'PUT',
            headers: {
                'Authorization': props.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: results.secure_url })
        })).json()

    }

    return (
        <>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <input id="file-input" type="file" />
                <button>Upload Product Image!</button>
            </form>
            <img src={imageUrl} alt="product image" />
        </>
    )
}

export default ImgageUpload;