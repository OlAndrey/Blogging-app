import { makeStyles } from '@mui/styles';

const useSignInStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
    },
    size: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
  
    paper: {
      padding: "1em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
}));

export default useSignInStyles