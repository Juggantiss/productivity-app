import AddTaskIcon from "@mui/icons-material/AddTask";
import TaskIcon from "@mui/icons-material/Task";
import HistoryIcon from "@mui/icons-material/History";
import BarChartIcon from "@mui/icons-material/BarChart";

export const items = [
  { id: 1, text: "Crear tarea", Icon: AddTaskIcon, route: "/" },
  { id: 2, text: "Mostrar tareas", Icon: TaskIcon, route: "tasks" },
  { id: 3, text: "Historial", Icon: HistoryIcon, route: "history" },
  { id: 4, text: "Gráfica", Icon: BarChartIcon, route: "charts" }
];
