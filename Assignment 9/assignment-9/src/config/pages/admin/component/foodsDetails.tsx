import '../../../../App.css'

type Props = {
    p?: any
}
function FoodsDetail(props: Props) {
    const { p } = props
    return (
        <>
            <h1 className="text-center">FoodsDetail</h1>
        </>
    )
}
export default FoodsDetail;