import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


type Props = {
    label: string,
    Options: any[],
    SelectedValue?: any,
    sx? : {}
}
export default function SelectSmall(props: Props) {
    const { label, Options, SelectedValue  , sx} = props
    const [select, setselect] = React.useState('');

    return (
        <FormControl sx={sx} color="primary" fullWidth size="small" >
            <InputLabel id="demo-select-meduim-label">{label}</InputLabel >
            <Select labelId="demo-select-meduim-label" id="demo-select-small" value={select} label={label} onChange={(e) => {
                SelectedValue(e.target.value)
                setselect(e.target.value);
            }}>
                <MenuItem value="none"><em>None</em></MenuItem>
                {Options.map((x: any, i: number) => {
                    return (
                        <MenuItem key={i} value={x.value}>{x.text}</MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}