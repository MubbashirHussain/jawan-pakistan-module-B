import { LineChart } from '@mui/x-charts/LineChart';









const yearFormater = (date: Date) => date.getFullYear().toString();
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format;


type Props = {
    years: any[]
    lineChartsParams: any,
    UKGDPperCapita?: number[],
    GermanyGDPperCapita?: number[],
    FranceGDPperCapita?: number[],
}
export default function Formatting(props: Props) {
    const { years,lineChartsParams} = props
    return (
        <LineChart
            {...lineChartsParams}
            xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormater }]}
            series={lineChartsParams.series.map((s:any) => ({
                ...s,
                valueFormatter: currencyFormatter,
            }))}
        />
    );
}