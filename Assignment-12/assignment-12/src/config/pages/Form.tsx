
import { useParams } from "react-router-dom"
import axios from "axios"
import React from "react"
import { Button, TextField, Typography } from "@mui/material"
import { Get, Post, Put } from "../Api/apiHandling"


function FormPage() {
    const [model, setmodel]: any = React.useState({
        "postId": "",
        "id": "",
        "name": "",
        "email": "",
        "body": ""
    })

    let params = useParams()
    let IsParam =  (Object.keys(params).length > 0) ? true : false

    let getselectedComment = async () => {
        const { data } = await Get(`comments`, params.id)
        setmodel({ ...data })
    }


    let AddComment = () => {
        // console.log(model)
        Post(`comments`, model)
            .then((res) => console.log("Comment Successfully posted ===>", res))
            .catch((er) => console.log(er))
    }
    let UpdateComment = () => {
        Put(`comments`, IsParam ? params.id : undefined, model)
            .then((res) => console.log("Comment Successfully Updated ===>", res))
            .catch((er) => console.log(er))
    }

    React.useEffect(() => {
        if (IsParam) {
            getselectedComment()
        }
    }, [])
    return (
        <>

            <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center">
                <Typography variant="h3" className="my-3">{IsParam ? "Update Comment" : "Add Commnet"}</Typography>
                <TextField id="outlined-basic" className="my-3" value={model && model.name} onChange={(e) => { setmodel({ ...model, name: e.target.value }) }} disabled={IsParam} label="name" variant="outlined" />
                <TextField id="outlined-basic" value={model && model.body} label="Comment" onChange={(e) => { setmodel({ ...model, body: e.target.value }) }} variant="outlined" />
                <Button variant="contained" className="my-3" color="secondary" onClick={() => { IsParam ? UpdateComment() : AddComment() }}>{IsParam ? "Update" : "Add"}</Button>
            </div>
        </>
    )
}
export default FormPage;