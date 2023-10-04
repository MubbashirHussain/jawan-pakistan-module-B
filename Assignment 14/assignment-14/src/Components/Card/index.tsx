import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
    Data: {
        title: string,
        description?: string,
        duration?: number,
        Openstatus?: boolean | string,
        ActionBtns?: React.ReactElement[]
    },
    sx?: React.CSSProperties,
    ClassName?: string,
}


export default function MediaCard(props: Props) {
    const { Data, ClassName, sx } = props
    let OpenCSS = Data.Openstatus ? "flex items-center px-5 py-2 mx-2 text-sm font-semibold rounded-md bg-green-500 text-white"
        : "flex items-center px-5 py-2 mx-2 text-sm rounded-md bg-red-500 text-white opacity-80"
    return (
        <Card sx={{ ...sx, maxWidth: 345, minWidth: 300, minHeight: 200 }}
            className={"flex flex-col justify-between " + ClassName}>
            <CardContent>
                <div className='flex justify-between items-center'>
                    <Typography gutterBottom variant="h5" component="div">
                        {Data.title}
                    </Typography>
                    <span className={OpenCSS}>{Data.Openstatus ? "Open" : "Close"}</span>

                </div>
                <div className="overflow-hidden">
                    <Typography className="text-ellipsis box whitespace-pre-wrap" sx={{
                        display: '-webkit-box',
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                    }}>
                        {Data.description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions className="flex justify-between">
                {Data.ActionBtns?.map((x: any, i: number) => (<span key={i}>{x}</span>))}
                <p className="px-3 font-semibold text-sm uppercase">Duration <span className='text-blue-500'>{Data.duration} Minutes</span></p>
            </CardActions>
        </Card>
    );
}