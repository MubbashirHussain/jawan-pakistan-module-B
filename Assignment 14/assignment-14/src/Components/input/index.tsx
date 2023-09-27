import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




type Props = {
    label: string,
    ClassName?: string,
    sx?: React.CSSProperties,
    id?: string
    Variant?: "filled" | "outlined" | "standard"
    type?: React.HTMLInputTypeAttribute;
    Readonly?: boolean,
    Required?: boolean,
    disabled?: boolean,
    fullWidth?: boolean,
    Error?: boolean
    onChangeEvt?: CallableFunction,
    maxRows?: number
    Value?: string,
    Name?: string,
    Multiline?: boolean,
    Size?: "small" | "medium",
    Margin?: "normal" | 'dense',
    PreColors?: "primary" | "secondary" | "error" | "info" | "success" | "warning"
}

export default function BasicTextFields(props: Props) {
    const {
        id,
        sx,
        type,
        Name,
        Size,
        Value,
        Error,
        label,
        Margin,
        maxRows,
        Variant,
        Readonly,
        Required,
        disabled,
        ClassName,
        Multiline,
        fullWidth,
        PreColors,
        onChangeEvt,
    } = props
    return (
        <TextField
            sx={sx}
            name={Name}
            type={type}
            value={Value}
            size={Size}
            error={Error}
            label={label}
            id={id && id}
            margin={Margin}
            variant={Variant}
            color={PreColors}
            disabled={disabled}
            required={Required}
            fullWidth={fullWidth}
            className={ClassName}
            multiline={Multiline}
            InputProps={{ readOnly: Readonly, }}
            maxRows={maxRows ?? undefined}
            onChange={(e:any) => onChangeEvt && onChangeEvt(e)}
        />
    );
}