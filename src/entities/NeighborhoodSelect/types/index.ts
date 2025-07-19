import { SelectChangeEvent } from "@mui/material";

export interface NeighborhoodSelectProps {
    checkedNeighborhoods: string[];
    neighborhoods: string[];
    onChange: (event: SelectChangeEvent<string[]>) => void;
}