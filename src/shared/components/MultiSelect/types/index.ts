import { SelectChangeEvent, SxProps, Theme } from "@mui/material";

export interface MultiSelectProps {
    selectedItems: string[];
    allItems: string[];
    label: string;
    sx?: SxProps<Theme>
    onChange: (event: SelectChangeEvent<string[]>) => void;
}