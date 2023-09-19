import axios from "axios";
import React from "react";
import CCard from "../Components/Card"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { Delete, Get } from "../Api/apiHandling";

function Home() {

    const Navigate = useNavigate()
    const [comments, setcomments]: any[] = React.useState()
    const [posts, setposts]: any[] = React.useState()
    let getcomments = async () => {
        const { data } = await Get(`comments`)
        let filtered = []
        for (let index = 0; index < data.length; index = index + 5) {
            filtered.push(data[index])
        }
        setcomments([...filtered])
    }
    let getposts = async () => {
        const { data } = await Get(`posts`)
        setposts([...data])
    }


    let EditComment = (a: number) => Navigate(`/form/${a}`)
    let AddComment = () => Navigate(`/form`)
    let DeleteComment = (a: number) => {
        Delete(`comments` , a)
            .then((res) => console.log("Comment Successfully Deleted ===>", res))
            .catch((er) => console.log(er))
    }



    React.useEffect(() => {
        getposts()
        getcomments()
    }, [])
    return (
        <>
            <div className="d-flex flex-wrap justify-content-between m-5 gap-4">
                {posts && comments && posts.map((x: any, i: number) => (<CCard key={i} Add={AddComment} Edit={EditComment} Delete={DeleteComment} comment={comments[x.id]} title={x.title} body={x.body} />))}
            </div>
        </>
    )
}
export default Home;