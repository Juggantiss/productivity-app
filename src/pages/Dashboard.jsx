import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Layout from "../containers/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <Typography variant="h2" component="div" gutterBottom>
        Bienvenido que tengas un día productivo
      </Typography>
      <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
    </Layout>
  );
};

export default Dashboard;
