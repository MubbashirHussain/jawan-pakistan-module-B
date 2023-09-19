
import { useParams } from "react-router-dom"
import axios from "axios"
import React from "react"
import { Button, TextField, Typography } from "@mui/material"


function FormPage() {
    const [model, setmodel]: any = React.useState({
        "postId": "",
        "id": "",
        "name": "",
        "email": "Hayden@althea.biz",
        "body": ""
    })

    let params = useParams()
    let paramsCheck = () => (Object.keys(params).length > 0) ? true : false

    let getselectedComment = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
        setmodel({ ...data })
    }


    let AddComment = () => {
        console.log(model)
        axios.post(`https://jsonplaceholder.typicode.com/comments`, model)
            .then((res) => console.log("Comment Successfully posted ===>", res))
            .catch((er) => console.log(er))
    }
    let UpdateComment = () => {
        axios.put(`https://jsonplaceholder.typicode.com/comments/${params.id}`, model)
            .then((res) => console.log("Comment Successfully Updated ===>", res))
            .catch((er) => console.log(er))
    }

    React.useEffect(() => {
        if (paramsCheck()) {
            getselectedComment()
        }
    }, [])
    return (
        <>

            <div className="d-flex flex-column my-5" style={{ maxWidth: 400 }}>
                <Typography variant="h3" className="my-3">{paramsCheck() ? "Update Comment" : "Add Commnet"}</Typography>
                <TextField id="outlined-basic" className="my-3" value={model && model.name} onChange={(e) => { setmodel({ ...model, name: e.target.value }) }} disabled={paramsCheck()} label="name" variant="outlined" />
                <TextField id="outlined-basic" value={model && model.body} label="Comment" onChange={(e) => { setmodel({ ...model, body: e.target.value }) }} variant="outlined" />
                <Button variant="contained" className="my-3" color="secondary" onClick={() => { paramsCheck() ? UpdateComment() : AddComment() }}>{paramsCheck() ? "Update" : "Add"}</Button>
            </div>
        </>
    )
}
export default FormPage;