import '../../../../App.css'

type Props = {
    p?: any
}
function Order(props: Props) {
    const { p } = props
    return (
        <>
            <h1 className="text-center">Order</h1>
        </>
    )
}
export default Order;