"use client";
import React, { useEffect, useRef } from 'react';

let $: any;
let DataTables: any;

if (typeof window !== 'undefined') {
  $ = require('jquery');
  DataTables = require('datatables.net-dt');
}
const ReactDataTables = ({ ...props }: any)  => {

  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (!$ || !DataTables) return;

    const currentTable = $(tableRef.current).DataTable(props);

    return () => {
      if (currentTable) {
        currentTable.destroy();
      }
    }
  }, [tableRef, props]);

  return <table className={'table table-striped'} ref={tableRef} width={'100%'}></table>;
}

export default ReactDataTables;
