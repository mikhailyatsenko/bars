"use client";

import { useCallback, useState } from "react";
import { NeighborhoodFilterProps } from "../types";
import { NeighborhoodSelect } from "@/entities/NeighborhoodSelect/ui/NeighborhoodSelect";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { SelectChangeEvent } from "@mui/material";

export const NeighborhoodFilter = ({
  searchParams,
  allNeighborhoods,
}: NeighborhoodFilterProps) => {
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
      setCheckedNeighborhoods(  typeof value === 'string' ? value.split(',') : value);

      const newParams = new URLSearchParams(params?.toString());
      if (Array.isArray(value) && value.length) {
        newParams.set("neighborhoods", value.join(","));
      } else {
        newParams.delete("neighborhoods");
      }
      router.push(`?${newParams.toString()}`);
    },
    [params, router]
  );

  return (
    <NeighborhoodSelect
      onChange={onChange}
      neighborhoods={allNeighborhoods}
      checkedNeighborhoods={checkedNeighborhoods}
    />
  );
};
