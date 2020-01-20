import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ModalAndButton from '../containers/ModalAndButton'
import SearchIcon from './../img/searchIcon.svg'
import './css/doctorAppointmentsTable.css'
import './css/paginator.css'

const DoctorsScheduleTable = (props) => {
  const { doctorSchedule, patientInfo, patientID } = props
  const { SearchBar } = Search;
    const columns = [
      {
        dataField: 'index',
        text: '',
        sort: true
      },
      {
        dataField: 'specialty',
        text: 'Specialty',
        sort: true
      },
      {
        dataField: 'name',
        text: 'name',
        sort: true
      }, 
      {
        dataField: 'lastname',
        text: 'Lastname',
        sort: true
      }, 
      {
        dataField: 'shiftStart',
        text: 'Shift Start',
        sort: true
      }, 
      {
        dataField: 'shiftEnd',
        text: 'Shift End',
        sort: true
      }, 
      {
        dataField: '',
        text: 'Add Appointment',
        sort: false,
        formatter: ( rowContent, row, rowIndex ) => {
            return (  
            <div>   
              <ModalAndButton 
                patientInfo = {patientInfo} 
                patientID = {patientID}
                doctorScheduleByRow={row}  />
            </div> 
            )}
      }
    ];

    const defaultSorted = [{
      dataField: 'index',
      order: 'asc'
    }];

    function customMatchFunc({
      searchText,
      value
    }) {
      if (typeof value !== 'undefined') {
        return value.startsWith(searchText);
      }
      return false;
    }  
  
  return (
    <div className="container mt-4">
    <ToolkitProvider
      keyField="index"
      data={ doctorSchedule }
      columns={ columns }
      search={ { customMatchFunc } }
    >
      {
        props => (
          <div>
            <img className="imgCustomize" src={SearchIcon } alt="Medicine Icon" />
            <SearchBar 
            { ...props.searchProps }
            placeholder="Enter search in table "  />
            <BootstrapTable bootstrap4 
              { ...props.baseProps }
              classes = "table table-striped table-hover react-bs-table-tool-bar"
              keyField="index"
              data={  doctorSchedule  } 
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

export default DoctorsScheduleTable ;