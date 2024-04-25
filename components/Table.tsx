import Image from 'next/image';
import React from 'react';
import AlertIcon from './AlertIcon';
import { tableHeadingsData, tableRowData } from '@/utils/tableData';
import Button from './Button';
import { shortenText } from '@/utils/helperFunctions';
import { TableHeading, TableRow } from '@/utils/Models';

type Props = {};

const tableRowDataArray: TableRow[] = new Array(5).fill(tableRowData);

const Table = (props: Props) => {
  return (
    <table className='col-start-2 w-full ring-1 divide-y ring-slate-300 text-left bg-white rounded-md overflow-hidden '>
      <thead>
        <tr className='table-row'>{renderTableHeading()}</tr>
      </thead>
      <tbody className='divide-y'>
        {renderTableRow()}
        <tr>
          <td colSpan={7} className='py-2 px-3'>
            <table className='w-full relative'>
              <tbody>
                <tr>
                  <td>
                    <AlertIcon color='#475569' />
                  </td>
                  <td>
                    <p className='font-semibold text-slate-600'>Only X rows are shown. View full list for more</p>
                  </td>
                  <td>
                    <Image
                      src='/x.svg'
                      height={20}
                      width={20}
                      className='absolute top-1/2 -translate-y-1/2 right-0'
                      alt='cross icon'
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td colSpan={7} className='p-3'>
            <div className='flex gap-4'>
              <Button>Show Full List</Button>
              <Button>Show Query</Button>
              <Button>Show Chart</Button>
              <Button>Pin to Dashboard</Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

const renderTableRow = () =>
  tableRowDataArray.map((item, index) => {
    const { id, name, industry, city, state, segment, ownerID } = item;

    const cellClasses = 'py-2 px-4 capitalize';

    return (
      <tr key={index}>
        <td className={cellClasses}>{id}</td>
        <td className={cellClasses}>{name}</td>
        <td className={cellClasses}>{industry}</td>
        <td className={cellClasses}>{shortenText(city)}</td>
        <td className={cellClasses}>{state}</td>
        <td className={cellClasses}>{shortenText(segment)}</td>
        <td className={cellClasses}>{ownerID}</td>
      </tr>
    );
  });

const TableHeadingEl = ({ title, image }: TableHeading) => {
  return (
    <th className='font-normal text-slate-500 py-2 px-4 space-x-[10px]'>
      {title && <span className='capitalize'>{title}</span>}
      {image && <Image src={image} width={16} height={16} className='inline' alt='chevrons-icon' />}
    </th>
  );
};

const renderTableHeading = () =>
  tableHeadingsData.map((item, index) => {
    return <TableHeadingEl key={index} image={item.image} title={item.title} />;
  });
