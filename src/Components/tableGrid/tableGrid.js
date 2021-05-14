import React, { Component } from "react";
import Button from '@material-ui/core/Button';


// Import Material Table
import MaterialTable from 'material-table';

import tableIcons from './tableIcons.js';

class TableGrid extends Component {
  constructor(props) {
    super(props);

    this.handleDetailsButtonClick = this.handleDetailsButtonClick.bind(this);
    this.formateAddress = this.formateAddress.bind(this);
  }

  // formatting the address
  formateAddress(address) {
    return address.suite + ', ' + address.street + ', ' + address.city + ' - ' + address.zipcode;
  }

  // handling the details button click for the corresponding row
  handleDetailsButtonClick(event, data) {
    this.props.openModalPopup(data);
  }

  render() {
    const { data } = this.props;
    
    return (
      <div className="table-grid-container" style={{ maxWidth: '100%' }}>
        <MaterialTable
          icons={tableIcons}
          columns={[
            {
              title: 'NAME',
              field: 'name',
              filterPlaceholder: 'Name'
            },
            {
              title: 'USERNAME',
              field: 'username',
              filterPlaceholder: 'User Name'
            },
            {
              title: 'EMAIL',
              field: 'email',
              filterPlaceholder: 'Email'
            },
            {
              title: 'ADDRESS',
              field: 'address',
              filterPlaceholder: 'Address',
              render: rowData => this.formateAddress(rowData.address),
              customFilterAndSearch: (term, rowData) => {
                return this.formateAddress(rowData.address).toLowerCase().includes(term.toLowerCase()) ? true : false;;
              },
              customSort: (a, b) => {
                let addressA = this.formateAddress(a.address).toString().toLowerCase();
                let addressB = this.formateAddress(b.address).toString().toLowerCase();
                console.log(addressA, addressB);
                return addressA - addressB ? true : false;
              }
            },
            {
              title: 'COMPANY',
              field: 'company.name',
              filterPlaceholder: 'Company'
            },
            {
              title: 'ACTION',
              export: false,
              filtering: false,
              sorting: false,
              field: 'action',
              render: rowData => <Button variant="contained" color='primary' onClick={e => this.handleDetailsButtonClick(e, rowData)}>Details</Button>
            }
          ]}
          data={data}
          title=""
          options={
            {
              filtering: true,
              hideFilterIcons: true,
              pageSizeOptions: [5, 10],
              thirdSortClick: false,
              paginationPosition: 'bottom',
              exportButton: false,
              headerStyle: {
                backgroundColor: '#122665',
                color: '#fff'
              }
            }
          }
          localization={{
            toolbar: {
              searchPlaceholder: 'Search Details...'
            },
            pagination: {
              labelRowsPerPage: 'Rows per Page: '
            }
          }}
        />
      </div>
    );
  }
}

export default TableGrid;