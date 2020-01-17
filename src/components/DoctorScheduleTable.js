import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ModalAndButton from '../containers/ModalAndButton'

const DoctorSheduleTable = (props) => {
  const { doctorSchedule, patientInfo, patientID } = props
  const { SearchBar } = Search;
    const columns = [
      {
        dataField: 'index',
        text: '',
        sort: true
      },
      {
        dataField: 'speciality',
        text: 'Speciality',
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
        formatter: ( rowContent, row, rowIndex ) => {
            return (  
            <div>   
              <ModalAndButton 
                patientInfo = {patientInfo} 
                patientID = {patientID}
                doctorScheduleByRow={doctorSchedule[rowIndex]}  />
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
            <SearchBar 
            { ...props.searchProps }
            placeholder="Search in table..."  />
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

export default DoctorSheduleTable ;