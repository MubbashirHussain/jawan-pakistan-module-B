import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {
    label: string,
    SelectedDate?: any,
    sx?: {}
}
export default function BasicDatePicker(props: Props) {
    const { label, SelectedDate, sx } = props
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label={label} sx={sx} onChange={(e: any) => { SelectedDate(e.target.value) }} />
        </LocalizationProvider>
    );
}