import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type Props = {
    progressValue: number
}

export default function LinearDeterminate(props: Props) {
    const { progressValue } = props
    // const [progress, setProgress] = React.useState(0);
    // React.useEffect(() => {

    // }, [progressProps])

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progressValue} />
        </Box>
    );
}