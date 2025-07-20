import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { MultiSelectProps } from "../types";
import {
  LABEL_SUFFIX,
  SELECT_ITEM_HEIGHT,
  SELECT_ITEM_PADDING_TOP,
  SELECT_MENU_WIDTH,
  SELECT_SUFFIX,
  SELECT_VISIBLE_ITEMS,
} from "../constants";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight:
        SELECT_ITEM_HEIGHT * SELECT_VISIBLE_ITEMS + SELECT_ITEM_PADDING_TOP,
      width: SELECT_MENU_WIDTH,
    },
  },
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
  allItems,
  label,
  selectedItems,
  onChange,
  sx = {width: SELECT_MENU_WIDTH}
}) => {
  return (
    <FormControl size="small" sx={sx}>
      <InputLabel id={`${label}${LABEL_SUFFIX}`}>{label}</InputLabel>
      <Select
        labelId={`${label}${LABEL_SUFFIX}`}
        id={`${label}${SELECT_SUFFIX}`}
        multiple
        onChange={onChange}
        value={selectedItems}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {allItems.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={selectedItems.includes(item)} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
