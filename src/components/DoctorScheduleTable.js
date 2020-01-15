import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const DoctorScheduleTable = (props) => {

    const columns = [
        {
        dataField: 'index',
        text: ' '
      }, 
      {
        dataField: 'speciality',
        text: 'Speciality'
      }, 
      {
        dataField: 'lastname',
        text: 'Lastname'
      }, 
      {
        dataField: 'shiftStart',
        text: 'Shift Start'
      }, 
      {
        dataField: 'shiftEnd',
        text: 'Shift End'
      }, 
      {
        dataField: '',
        text: 'Add Appointment',
        formatter: (rowContent, row) => {
            return (    
            <button type="button" className="btn btn-success" > + </button>
            )}
      }
    ];

      
  const { doctorSchedule  } = props
  return (
    <div className="container mt-4">
      
    <BootstrapTable bootstrap4 
        classes = "table table-striped"
        keyField='index' 
        data={  doctorSchedule  } 
        columns={ columns } 
        pagination={ paginationFactory() } />
    </div>
  );
}

export default DoctorScheduleTable ;
