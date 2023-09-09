import { useLocation, useParams } from "react-router-dom"
import CCard from "../Components/Card"
import axios from "axios"
import React from "react"
import { Button } from "@mui/material"
import { isEmptyBindingElement } from "typescript"

function SingleCard() {
    const [List, setList]: any[] = React.useState({})
    const Params = useParams()
    const LC = useLocation()
    console.log(LC.state)

    let getData = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${Params.id}`)
        setList({ ...data })
    }
    React.useEffect(() => { getData() }, [])
    return (
        <>
            <div className="container my-5 d-flex align-items-center flex-column gap-5">
                <h1 className="text-center">Single Card Page</h1>
                {Object.keys(List).length > 0 ? <CCard Data={List} /> : null}
            </div>
        </>
    )
}
export default SingleCard;