import * as React from 'react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import "../../App.css"


type Props = {
  Data: any,
  Click? : any,
  cursor? : string,
}


export default function MediaCard(props: Props) {
  const { Data , Click , cursor} = props
  return (
    <div onClick={Click}>
      <Card  sx={{ minWidth: 340 , maxWidth: 350 , boxShadow: "0 0 15px  #00000017 " , cursor : cursor ? cursor : "auto" }}>
      <CardMedia
        sx={{
          height: 200,
          backgroundSize: "contain",
          backgroundOrigin: "content-box",
          padding: "10px",
        }}
        image={Data.image}
        title={Data.title}
      />
      <CardContent className='d-flex gap-3 flex-column h-100' sx={{ background: "#f5f5f5" }}>
        <Typography gutterBottom variant="body1" className="title">
          {Data.title}
        </Typography>
        <Typography variant="body2" className="discription"color="text.secondary">
          {Data.description}
        </Typography>
        <span>
          <Chip label={Data.category} />
        </span>
        <span className="d-flex justify-content-between align-items-end">
          <Rating name="half-rating-read" defaultValue={Data.rating.rate ? Data.rating.rate : 0 } precision={0.1} readOnly />
          <Button variant='outlined' >${Data.price}</Button>
        </span>
      </CardContent>
    </Card>
    </div>
  );
}