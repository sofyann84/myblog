import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999,
  },
  modal_body: {
    position: "relative",
    background: "#fff",
    textAlign: "center",
    width: "400px",
    height: "170px",
    margin: "10% auto",
    padding: "56px 30px",
  }
}));
export default function Component(props) {
  const classes = useStyles()
  const { isOpen, children } = props;
  if (isOpen) {
    return (
      <div className={classes.modal}>
        <div className={classes.modal_body}>{children}</div>
      </div>
    );
  } else {
    return <></>;
  }
}
