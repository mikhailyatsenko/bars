import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { NeighborhoodSelectProps } from "../types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const NeighborhoodSelect: React.FC<NeighborhoodSelectProps> = ({
  neighborhoods,
  checkedNeighborhoods,
  onChange
}) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="neighborhood-filter">Neighborhood</InputLabel>
      <Select
        labelId="neighborhood-filter"
        id="neighborhood-multiple-checkbox"
        multiple
        onChange={onChange}
        value={checkedNeighborhoods}
        input={<OutlinedInput label="Neighborhoods" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {neighborhoods.map((neighborhood) => (
          <MenuItem key={neighborhood} value={neighborhood}>
            <Checkbox checked={checkedNeighborhoods.includes(neighborhood)} />
            <ListItemText primary={neighborhood} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
