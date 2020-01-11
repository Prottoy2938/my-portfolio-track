import React, { useContext } from "react"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { ThemeContext } from "../contexts/themeContext"
import styles from "../styles/mediaCardStyles"

function MediaCard(props) {
  const { classes } = props
  const { isDarkMode } = useContext(ThemeContext)
  const previewButtonStyle = {
    backgroundColor: isDarkMode && "#b9c7de",
    boxShadow: isDarkMode && "none",
  }
  const learnMorebtnStyle = {
    borderImage:
      isDarkMode &&
      "linear-gradient(to right, rgb(35,64,77), rgb(58, 123, 213))",
    borderBottom: isDarkMode && "4px solid",
    borderImageSlice: isDarkMode && "1",
    marginBottom: isDarkMode && "1vh",
  }
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Button
          size="small"
          variant="contained"
          style={previewButtonStyle}
          className={classes.previewButton}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.previewLink || null}
            style={{
              textDecoration: "none",
              color: isDarkMode ? "black" : "#104e52",
            }}
          >
            Preview
          </a>
        </Button>
        <Button
          size="small"
          color="primary"
          className={classes.learnMorebtn}
          style={learnMorebtnStyle}
          href={props.learnMoreLink || null}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
export default withStyles(styles)(MediaCard)
