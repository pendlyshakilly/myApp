import React, { useState } from "react";
import { Pagination } from "@mui/material";
import s from "./SuperPagination.module.css";
import SuperSelect from "../SuperSelect/SuperSelect";

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = "hw15",
}) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage); // пишет студент // вычислить количество страниц

  const onChangeCallback = (event: any, page: number) => {
    onChange(page, itemsCountForPage); // пишет студент
  };

  const onChangeSelect = (event: any) => {
    onChange(page, event);
  };
  return (
    <div className={s.pagination}>
      <Pagination
        id={id + "-pagination"}
        sx={
          {
            // стили для Pagination // пишет студент
          }
        }
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>
        <SuperSelect
          id={id + "-pagination-select"}
          value={itemsCountForPage}
          options={[
            { id: 4, value: 4 },
            { id: 7, value: 7 },
            { id: 10, value: 10 },
          ]}
          onChangeOption={onChangeSelect}
        />
        <span className={s.text2}>показать строк в таблице</span>
      </span>
    </div>
  );
};

export default SuperPagination;
