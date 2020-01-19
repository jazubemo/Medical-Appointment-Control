import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './css/paginator.css'

const DoctorAppointmentsTable = (props) => {
  const { doctorAppointments } = props
  const { SearchBar } = Search;
    const columns = [
      {
        dataField: 'index',
        text: '',
        sort: true
      },
      {
        dataField: 'patientId',
        text: "Patient's ID",
        sort: true
      }, 
      {
        dataField: 'Date',
        text: "Appointment's Date",
        sort: true
      }, 
      {
        dataField: "Time",
        text: "Appointment Time",
        sort: true
      }, 
      {
        dataField: 'duration',
        text: 'Duration',
        sort: true
      }
    ];

    const defaultSorted = [{
      dataField: 'index',
      order: 'asc'
    }];

    function customMatchFunc({
      searchText,
      value,
      row
    }) {
      if (typeof value !== 'undefined' ) {
        return value.startsWith(searchText)  ;
      }
      return false;
    }  
  
  return (
    <div className="container mt-6">
    <ToolkitProvider
      keyField="index"
      data={ doctorAppointments }
      columns={ columns }
      search={ { customMatchFunc}  }
    >
      {
        props => (
          <div>
            <SearchBar 
            { ...props.searchProps }
            placeholder="Search in table..."  />
            <BootstrapTable bootstrap4 
              { ...props.baseProps }
              classes = "table table-striped table-hover react-bs-table-tool-bar"
              keyField="index"
              data={ doctorAppointments } 
              columns={ columns } 
              pagination={ paginationFactory() }
              defaultSorted={ defaultSorted }  />
          </div>
        )
      }
    </ToolkitProvider>  
  </div>
  );
}

export default DoctorAppointmentsTable ;