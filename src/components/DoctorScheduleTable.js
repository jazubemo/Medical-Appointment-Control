import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ModalAndButton from './../containers/ModalAndButton'

const DoctorScheduleTable = (props) => {
  const { doctorSchedule  } = props
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
        dataField: '',//<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
        text: 'Add Appointment',
        formatter: (rowContent, row, rowIndex) => {
            return (  
            <div>   
              <ModalAndButton doctorScheduleByRow={doctorSchedule[rowIndex]}  />
            </div> 
            )}
      }
    ];

      
  
  return (
    <div className="container mt-4">  
    <BootstrapTable bootstrap4 
        classes = "table table-striped table-hover"
        keyField='index' 
        data={  doctorSchedule  } 
        columns={ columns } 
        pagination={ paginationFactory() } />
    </div>
  );
}

export default DoctorScheduleTable ;
