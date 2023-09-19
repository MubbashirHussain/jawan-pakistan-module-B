import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AnyAaaaRecord } from 'dns';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

type Props = {
    title: string,
    body: string,
    comment: any,
    Edit : Function,
    Delete : Function,
    Add : Function,
}
export default function RecipeReviewCard(props: Props) {
    const { title, body, comment , Edit,Delete ,Add } = props
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography variant='h5'>{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph variant='h5'>Comments</Typography>
                    <div className="border-top border-bottom py-3">
                        <Typography paragraph variant="body1" className="fw-bold">{comment && comment.name}</Typography>
                        <Typography paragraph >{comment && comment.body}</Typography>
                        <button onClick={()=>Add()} className="btn btn-primary me-2">Add</button>
                        <button onClick={()=>Edit(comment.id)} className="btn btn-success me-2">Edit</button>
                        <button onClick={()=>Delete(comment.id)} className="btn btn-danger ms-2">Delete</button>
                    </div>


                </CardContent>
            </Collapse>
        </Card>
    );
}