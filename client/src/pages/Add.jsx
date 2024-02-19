import React, { useState } from 'react'
import newRequest from '../utils/newRequest';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Add = () => {
    const [file, setFile] = useState(null);
    const [productDetails, setProductDetails] = useState({
        title: "",
        price: 0,
        desc: ""
    });

    let category = []

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await newRequest.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    // const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const queryClient = useQueryClient();
    const mutation = useMutation(
        {
            mutationFn: (newProduct) => {
                return newRequest.post("/product", newProduct);
            },
            onSuccess: () => {
                queryClient.invalidateQueries(["product"]);
            },
        },

    );

    const handleClick = async (e) => {
        e.preventDefault();
        let imgUrl = "";
        if (file) imgUrl = await upload();
        console.log(file);
        mutation.mutate({ ...productDetails, category: category, img: imgUrl })
    }

    const handleChange = (e) => {
        setProductDetails((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        category.push(e.target[0].value)
    }

    return (
        <div>
            <input type="text" placeholder='title' name='title' onChange={handleChange} />
            <input type="number" placeholder='price' name='price' onChange={handleChange} />
            <input type="text" placeholder='desc' name='desc' onChange={handleChange} />
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='category' />
                <button type='submit' >add</button>
            </form>
            <button onClick={handleClick} >submit</button>
        </div>
    )
}

export default Add