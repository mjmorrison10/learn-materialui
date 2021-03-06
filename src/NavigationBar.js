import { Box, Container, Link, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    siteTitle: {
        fontWeight: 'bold',
        letterSpacing: 1.5,
        
    },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  menuBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));

function NavigationBar() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Typography 
          component='h1'
          variant='h2'
          className={classes.siteTitle}>Mammoth Interactive</Typography>
          <Box className={classes.menuBox}>
            {["home", "courses", "sign up"].map((menuOption) => (
              <Link
                component="button"
                variant="body1"
                className={classes.menuOption}
              >
                {menuOption.toUpperCase()}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
}

export default NavigationBar;
