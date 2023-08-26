import '../App.css'
type Props = {
    SelectName: string,
    Options: any[],
    SelectReturn: any
}
function SelectOp(props: Props) {

    const { Options, SelectReturn , SelectName } = props
    return (
        <>
            <select onChange={(e) => { SelectReturn(e.target.value) }} className="btn-primary btn h-100 rounded">
                <option>{SelectName}</option>
                {Options.map((x: any, i: number) => {
                    return (<option className='p-2' value={x} key={i} >{x}</option>)
                })}
            </select>
        </>
    )
}
export default SelectOp;