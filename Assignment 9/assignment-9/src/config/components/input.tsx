import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

type Props = {
    label: string,
    IconsBtn: any,
    inputValue?: any,
    onBtnClick? :any,
}


export default function CustomizedInputBase(props: Props) {
    const { label, IconsBtn, inputValue , onBtnClick } = props
    
    return (
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }} >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder={label} onChange={(e) => inputValue(e.target.value)} />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={()=>{onBtnClick()}}>
                <IconsBtn />
            </IconButton>
        </Paper>
    );
}
