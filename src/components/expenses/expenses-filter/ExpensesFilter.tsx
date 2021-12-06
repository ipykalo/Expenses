import './ExpensesFilter.css';
import React, { ChangeEvent } from 'react';
import ExpensesFilterProps from './ExpensesFilterProps';

const ExpensesFilter = (props: ExpensesFilterProps) => {
    const onSelectFilter = (event: ChangeEvent<HTMLSelectElement>): void => {
        props.onSelectFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={onSelectFilter}>
                    <option value='all'>all</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;