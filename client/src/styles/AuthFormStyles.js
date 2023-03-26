import { makeStyles } from '@mui/styles';

const useAuthFormStyles = makeStyles((theme) => ({
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
    },
    form: {
      width: "100%", // Fix IE 11 issue.
    },
}));

export default useAuthFormStyles