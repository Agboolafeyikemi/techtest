import React from 'react';
import { render, screen } from '@testing-library/react';
import Table, { TableType } from './index';
import testData from '../../data.json';

it('renders header', () => {
    render(<Table title="My title" data={testData} style={TableType.StyleOne} />);
    expect(screen.getByText('My title')).toBeInTheDocument();
});