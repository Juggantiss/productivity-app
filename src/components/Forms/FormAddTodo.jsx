import {
  Box,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import { styles } from "../../styles/AddTodo";
import { durations } from "../../utils/durationDefault";

const FormAddTodo = () => (
  <Box sx={styles.container} component="form">
    <Typography sx={styles.header} variant="h4" component="div" gutterBottom>
      Agregar tarea
    </Typography>
    <TextField
      sx={styles.input}
      margin="normal"
      id="outlined-multiline-flexible"
      label="Descripción"
      multiline
      maxRows={4}
    />
    <TextField
      sx={styles.input}
      margin="normal"
      id="outlined-select-currency"
      select
      label="Duración"
      defaultValue={30}
      helperText="Por favor selecciona una duración"
    >
      {durations.map((option) => (
        <MenuItem key={option.id} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    <FormControlLabel
      sx={styles.checkbox}
      control={<Checkbox />}
      label="Agregar otra duración"
    />
    <TextField
      sx={styles.input}
      margin="normal"
      id="outlined-basic"
      label="Duración (máximo 2 horas)"
      variant="outlined"
      type="number"
    />
    <LoadingButton
      sx={styles.button}
      color="primary"
      loading={false}
      variant="contained"
      loadingPosition="start"
      startIcon={<SaveIcon />}
    >
      Agregar
    </LoadingButton>
  </Box>
);

export default FormAddTodo;