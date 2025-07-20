"use client";

import { useCallback, useState } from "react";
import { FilterNeighborhoodsProps } from "../types";
import { MultiSelect } from "@/shared/components/MultiSelect";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { SelectChangeEvent } from "@mui/material";
import {
  NEIGHBORHOODS_SEARCH_PARAM,
  NEIGHBORHOODS_SELECT_LABEL,
} from "../constants";
import { Box, Button } from "@mui/material";
import { useT } from "@/shared/configs/i18n/client";

export const FilterNeighborhoods = ({
  searchParams,
  allNeighborhoods,
}: FilterNeighborhoodsProps) => {
  const {t} = useT(["common"]);

  const router = useRouter();
  const params = useSearchParams();

  const initialChecked = searchParams.neighborhoods
    ? searchParams.neighborhoods
        .split(",")
        .filter((nHparam) => allNeighborhoods.some((nh) => nHparam === nh))
    : [];

  const [checkedNeighborhoods, setCheckedNeighborhoods] =
    useState(initialChecked);

  const onChange = useCallback(
    (event: SelectChangeEvent<typeof checkedNeighborhoods>) => {
      const {
        target: { value },
      } = event;
      setCheckedNeighborhoods(
        typeof value === "string" ? value.split(",") : value
      );

      const newParams = new URLSearchParams(params?.toString());
      if (Array.isArray(value) && value.length) {
        newParams.set(NEIGHBORHOODS_SEARCH_PARAM, value.join(","));
      } else {
        newParams.delete(NEIGHBORHOODS_SEARCH_PARAM);
      }
      router.push(`?${newParams.toString()}`);
    },
    [params, router]
  );

  const handleReset = useCallback(() => {
    setCheckedNeighborhoods([]);
    const newParams = new URLSearchParams(params?.toString());
    newParams.delete(NEIGHBORHOODS_SEARCH_PARAM);
    router.push(`?${newParams.toString()}`);
  }, [params, router]);

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <MultiSelect
        label={NEIGHBORHOODS_SELECT_LABEL}
        onChange={onChange}
        allItems={allNeighborhoods}
        selectedItems={checkedNeighborhoods}
      />
      <Button variant="outlined" onClick={handleReset}>
        {t("reset")}
      </Button>
    </Box>
  );
};
