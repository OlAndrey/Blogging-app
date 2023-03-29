import { makeStyles } from '@mui/styles';

const useSignInStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
    },
    size: {
      margin: "0 .5em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
  
    paper: {
      padding: "2.5em 1em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
}));

export default useSignInStyles