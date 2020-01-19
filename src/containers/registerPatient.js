import React, { Component } from "react";
import { isEmpty } from 'lodash'
import validations from '../utils/userValidations'
import { NotificationContainer, NotificationManager} from 'react-notifications';
import createPatientService from './../services/createPatientService'
import getPatientByIdService from './../services/getPatientByIdService'
import './css/registerPatient.css'

export default class RegisterPatient extends Component {
    constructor(props) {
    super(props);
    this.state = {
        ID : '',
        name : '',
        lastname : '',
        age : '',
      error: {
        ID : '',
        name : '',
        lastname : ''
      }
    };
    this.myRef = React.createRef();
  }
    
  componentDidMount(){
    this.myRef.current.focus();
  }

    handleSubmitCreatePatient = async () =>{
        this.validateRequiredInput()
        const {ID, name, lastname, age, error} = this.state
        if( isEmpty(error.ID) 
            && isEmpty(error.name) 
            && isEmpty(error.lastname) 
            && isEmpty(error.age)){
            const isPatientExist = await getPatientByIdService(ID)
            if(isPatientExist === ''){
                const patientCreated = await createPatientService(ID, name, lastname, age)
                if( patientCreated ){
                    NotificationManager.success("Patient Created!!!")
                    this.cleanInput()
                }
            }else{
                NotificationManager.error("This patient's ID is already exist. Please enter other ID")
            }    
        }
    }

    cleanInput = ()=>{
        this.setState({
            ID: '',
            name: '',
            lastname: '',
            age: ''
        })
    }

    validateRequiredInput = () =>{
        const { ID, name, lastname, age} = this.state
        let errors = this.state.error   

        isEmpty(ID) ? errors.ID = "* This field is required" : errors.ID = ''
        isEmpty(name) ? errors.name = "* This field is required" : errors.ID = ''
        isEmpty(lastname) ? errors.lastname = "* This field is required" : errors.ID = ''
        isEmpty(age) ? errors.age = "* This field is required" : errors.ID = ''
        
        this.setState({
            error: errors
        })
    }

  handleOnChangePatientInfo = (id, e) =>{

    let { error } = this.state
    let value = e.target.value;
    
    switch (id) {
        case 'ID':
          const validateIDNumber = validations.regexs.IDNumber.test(value)
          if(!validateIDNumber){
            error.ID = "*In this field is only numbers allowed. Example: 0801170012345"
          }else{
            error.ID = ''
          }
          break;
        case 'name':
            const validateNameString = validations.regexs.string.test(value)
            if(!validateNameString){
              error.name = "*In this field is only string allowed. Example: some name"
            }else{
                error.name = ''
              }
          break;
        case 'lastname':
            const validateLastnameString = validations.regexs.string.test(value)
            if(!validateLastnameString){
              error.lastname = "*In this field is only string allowed. Example: some lastname"
            }else{
                error.lastname = ''
              }
          break;
        case 'age':
            const validateAgeNumber = validations.regexs.ageNumber.test(value)
            const ageNumber = Number(value)
            if(!validateAgeNumber){
              error.age = "*In this field is only numbers allowed. Example: 20"
            }else if(ageNumber< 0 || ageNumber > 120){
                    error.age = '*Please enter a valid age'
                }else{
                    error.age = ''
                }
          break;
          default:
            console.log('');
      }
    
    this.setState({
        [id]: value,
        error, 
    });
  }

  render() {

  const { ID, name, lastname, age, error} = this.state

  return (

    <div className="container-fluid col-xl-8" >
      <div className="container mt-2 mb-4" >
        <h2 className="mb-4"> Patient's Register</h2>
        <div className="container border border-dark rounded ">
        <form className="mb-4">
            <div className="form-group">
            <label className="mt-2" htmlFor="ID">Patient's ID: </label>
            <input type="text" 
                className="form-control" 
                onChange={this.handleOnChangePatientInfo.bind(this, 'ID')} 
                value={ID} 
                id="ID"  
                placeholder="Enter Patient's ID"
                ref={this.myRef} />
            <small  id="emailHelp" 
                className="form-text smallCustomize">{error.ID}</small>
            </div>
            <div className="form-group">
                <label htmlFor="name">Patient's name: </label>
                <input type="text" 
                    className="form-control" 
                    onChange={this.handleOnChangePatientInfo.bind(this, 'name')} 
                    value={name} 
                    id="ID"  
                    placeholder="Enter Patient's name" />
                <small id="emailHelp" 
                    className="form-text smallCustomize">{error.name}</small>
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Patient's lastname: </label>
                <input type="text" 
                    className="form-control" 
                    onChange={this.handleOnChangePatientInfo.bind(this, 'lastname')} 
                    value={lastname} 
                    id="lastname"  
                    placeholder="Enter Patient's lastname" />
                <small id="emailHelp" 
                    className="form-text smallCustomize">{error.lastname}</small>
            </div>
            <div className="form-group">
                <label htmlFor="age">Patient's age: </label>
                <input type="text" 
                    className="form-control" 
                    onChange={this.handleOnChangePatientInfo.bind(this, 'age')} 
                    value={age} 
                    id="age"  
                    placeholder="Enter Patient's age"
                    max="100"
                    min="0" />
            <small id="emailHelp" 
                className="form-text smallCustomize">{error.age}</small>
            </div>
            <div className="text-center mt-2 ">
                <button 
                    className="btn btn-success" 
                    type="button" 
                    onClick={this.handleSubmitCreatePatient} > Create Patient</button>
                <button 
                    className="btn btn-danger ml-2 " 
                    type="button" 
                    onClick={this.cleanInput} > Cancel</button>
            </div>
        </form>
        </div>
      </div>
      <NotificationContainer/>
    </div>  );}
}