import '../../../../App.css'

type Props = {
    p?: any
}
function Customer(props: Props) {
    const { p } = props
    return (
        <>
            <h1 className="text-center">Customer</h1>
        </>
    )
}
export default Customer;