(this["webpackJsonpmedical-appointment-control"]=this["webpackJsonpmedical-appointment-control"]||[]).push([[0],{112:function(e,t,a){},174:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),c=(a(96),a(88)),s=a(23),i=a(16),m=a(17),d=a(20),u=a(18),p=a(22),h=a(19),f=a(84),b=a.n(f),E=(a(97),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={menu:!1},a.toggleMenu=a.toggleMenu.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"toggleMenu",value:function(){this.setState({menu:!this.state.menu})}},{key:"render",value:function(){var e=this.state.menu?"show":"";return r.a.createElement("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark"},r.a.createElement("img",{className:"imgCustomize",src:b.a,alt:"Medicine Icon"}),r.a.createElement("a",{className:"navbar-brand",href:"/"},"Appointments"),r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.toggleMenu},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse navbarCustomize "+e},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("a",{className:"nav-item nav-link ",href:"/doctors"},"Doctors"))),r.a.createElement("div",{className:"collapse navbar-collapse navbarCustomize "+e},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("a",{className:"nav-item nav-link ",href:"/patients"},"Patients"))))}}]),t}(n.Component)),v=a(5),g=a.n(v),N=a(14),I=(a(112),function(e){var t=e.patientId,a=e.handleSubmitPatientId,n=e.onChangeInputPatientId,o=e.handleOnKeyPressEnterPatientId;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement("label",null,"Enter patient's ID:"),r.a.createElement("div",{className:"input-group mx-auto "},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search for...",onChange:n,value:t||"",onKeyPress:o}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{className:"btn btn-search",type:"button",onClick:a}," Search"))))}),y=function(e){var t=e.info,a=e.show;return r.a.createElement("div",null,a?r.a.createElement("div",{className:"container mt-2"},r.a.createElement("p",null,"Information of the patient:"),r.a.createElement("div",{className:"container border border-dark rounded "},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"staticName",className:"col-sm-2 col-form-label"},"Name:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"staticName",value:t.name}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"staticLastname",className:"col-sm-2 col-form-label"},"Lastname:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"staticLastname",value:t.lastname})))))):null)},D=a(32),x=a.n(D),w=a(24),P=a.n(w),S=a(33),O=a.n(S),C=a(85),A=a.n(C),k=a(25),j=(a(174),function(e){var t=e.doctorAvailable,a=e.showLabel;return r.a.createElement("div",{className:"container mt-2"},a?t?r.a.createElement("p",{className:"available"},"AVAILABLE"):r.a.createElement("p",{className:"notAvailable"},"NOT AVAILABLE"):null)}),F=function(e){var t=e.patientInfo,a=e.patientID,n=e.doctorInfo;return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-2"},r.a.createElement("p",null," Appointment's Information:"),r.a.createElement("div",{className:"container border border-dark rounded "},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group mb-0  row"},r.a.createElement("label",{htmlFor:"staticPatientID",className:"col-sm-5 col-form-label"},"Patient's ID"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"staticPatientID",value:a}))),r.a.createElement("div",{className:"form-group mb-0  row"},r.a.createElement("label",{htmlFor:"staticPatientName",className:"col-sm-5 col-form-label"},"Patient's name:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"staticPatientName",value:t.name}))),r.a.createElement("div",{className:"form-group mb-0  row"},r.a.createElement("label",{htmlFor:"staticPatientLastname",className:"col-sm-5 col-form-label"},"Patient's lastname:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"staticPatientLastname",value:t.lastname}))),r.a.createElement("div",{className:"form-group mb-0 row"},r.a.createElement("label",{htmlFor:"staticDrLastname",className:"col-sm-5 col-form-label"},"Dr."),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"staticDrLastname",value:n.lastname}))),r.a.createElement("div",{className:"form-group mb-0  row"},r.a.createElement("label",{htmlFor:"appointmentTime",className:"col-sm-5 col-form-label"},"Appointment time:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"appointmentTime",value:n.shiftStart})))))))},T=a(7),M=a.n(T),L=function(){return"_"+Math.random().toString(36).substr(2,9)},B=function(e,t,a){var n=e.doctorId,r=e.shiftStart;return M.a.post("http://localhost:3000/medicalAppointments",{id:L(),doctorId:n,patientId:t,Date:a,Time:r,duration:1}).then((function(e){return console.log("resp.data",e.data),Promise.resolve(e.data)})).catch((function(e){return Promise.reject("Error while trying to create a patient",e)}))},R=function(e,t,a){return M.a.get("http://localhost:3000/medicalAppointments?doctorId=".concat(e,"&Date=").concat(t,"&Time=").concat(a)).then((function(e){return Promise.resolve(e.data)})).catch((function(e){return Promise.reject("Error while trying to get appointment",e)}))},H=(a(81),a(193),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modalShow:!1,doctorAvailable:!1,showLabel:!1,appointmentDate:"",showCreateAppointment:!1},a.handleShow=function(){a.setState({modalShow:!0})},a.handleClose=function(){a.setState({modalShow:!1})},a.handleSubmitCreateAppointment=function(){var e,t,n,r;return g.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,console.log("resp.data"),e=a.state.appointmentDate,t=a.props,n=t.doctorScheduleByRow,r=t.patientID,o.next=6,g.a.awrap(B(n,r,e));case 6:o.sent?a.showMessage():N.NotificationManager.error("There was a problem"),a.handleClose(),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(0),console.log(o.t0);case 14:case"end":return o.stop()}}),null,null,[[0,11]])},a.getDifferenceInDaysBetweenTodayAndAppointmentDate=function(e){var t=new Date,a=e.replace(/-/g," "),n=new Date(a).getTime()-t.getTime();return Math.ceil(n/864e5)},a.onChangeDate=function(e){a.setState({appointmentDate:e.target.value},(function(){a.checkDoctorAvailability()}))},a.showMessage=function(){return A.a.fire({icon:"success",title:"Your Medical Appointment was created",showConfirmButton:!1,timer:1500})},a.checkDoctorAvailability=function(){var e,t,n;return g.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e=a.state.appointmentDate,t=a.props.doctorScheduleByRow,n=a.getDifferenceInDaysBetweenTodayAndAppointmentDate(e),isNaN(n)){r.next=15;break}if(!(n<0)){r.next=10;break}N.NotificationManager.error("Please enter a valid Date"),a.setState({appointmentDate:"",showLabel:!1}),r.next=15;break;case 10:return r.next=12,g.a.awrap(R(t.doctorId,e,t.shiftStart));case 12:0===r.sent.length?a.setState({doctorAvailable:!0,showCreateAppointment:!0}):a.setState({doctorAvailable:!1,showCreateAppointment:!1}),a.setState({showLabel:!0});case 15:r.next=20;break;case 17:r.prev=17,r.t0=r.catch(0),console.log(r.t0);case 20:case"end":return r.stop()}}),null,null,[[0,17]])},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=!!this.state.modalShow,t=this.state,a=t.doctorAvailable,n=t.showLabel,o=t.showCreateAppointment,l=this.props,c=l.doctorScheduleByRow,s=l.patientID,i=l.patientInfo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-success",variant:"primary",onClick:this.handleShow},"+"),r.a.createElement(k.a,{show:e,onHide:this.handleClose},r.a.createElement(k.a.Header,{className:"modal-header",closeButton:!0},r.a.createElement(k.a.Title,null,"Medical Appointment")),r.a.createElement(k.a.Body,{className:"modal-content"},r.a.createElement("div",{className:"form-group"},r.a.createElement(F,{patientInfo:i,patientID:s,doctorInfo:c}),r.a.createElement("label",{htmlFor:"recipient-date",className:"col-form-label"},"Enter Appointment's date:"),r.a.createElement("input",{className:"form-control",type:"date",defaultValue:"19-08-2011",onChange:this.onChangeDate,id:"recipient-date"})),r.a.createElement(j,{showLabel:n,doctorAvailable:a})),r.a.createElement(k.a.Footer,null,o?r.a.createElement("button",{variant:"primary",className:"btn btn-primary",onClick:this.handleSubmitCreateAppointment},"Create Appointment"):r.a.createElement("button",{variant:"primary",className:"btn btn-primary",disabled:!0},"Create Appointment"),r.a.createElement("button",{variant:"secondary",className:"btn btn-danger",onClick:this.handleClose},"Close"))))}}]),t}(n.Component)),z=(a(82),function(e){var t=e.doctorSchedule,a=e.patientInfo,n=e.patientID,o=w.Search.SearchBar,l=[{dataField:"index",text:"",sort:!0},{dataField:"specialty",text:"Specialty",sort:!0},{dataField:"name",text:"name",sort:!0},{dataField:"lastname",text:"Lastname",sort:!0},{dataField:"shiftStart",text:"Shift Start",sort:!0},{dataField:"shiftEnd",text:"Shift End",sort:!0},{dataField:"",text:"Add Appointment",sort:!1,formatter:function(e,o,l){return r.a.createElement("div",null,r.a.createElement(H,{patientInfo:a,patientID:n,doctorScheduleByRow:t[l]}))}}],c=[{dataField:"index",order:"asc"}];return r.a.createElement("div",{className:"container mt-4"},r.a.createElement(P.a,{keyField:"index",data:t,columns:l,search:{customMatchFunc:function(e){var t=e.searchText,a=e.value;return"undefined"!==typeof a&&a.startsWith(t)}}},(function(e){return r.a.createElement("div",null,r.a.createElement(o,Object.assign({},e.searchProps,{placeholder:"Enter search in table "})),r.a.createElement(x.a,Object.assign({bootstrap4:!0},e.baseProps,{classes:"table table-striped table-hover react-bs-table-tool-bar",keyField:"index",data:t,columns:l,pagination:O()(),defaultSorted:c})))})))}),q=a(87),K=a.n(q),W=(a(194),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"maxWidth ",src:K.a,alt:"medical appointment logo"}))}),$=function(e){return M.a.get("http://localhost:3000/patients?patientID=".concat(e)).then((function(e){return Promise.resolve(e.data[0])})).catch((function(e){return Promise.reject("Error while trying to get patient's ID",e)}))},_=function(){return M.a.get("http://localhost:3000/doctorSchedulePerHour?_expand=doctor").then((function(e){return Promise.resolve(e.data)})).catch((function(e){return Promise.reject("Error while trying to get Doctor's schedule",e)}))},V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={patientID:"",infoPatient:"",showInformation:!1,doctorSchedulePerHour:[]},a.fetchInfoPatientAndDoctorSchedulePerHour=function(e){var t,n,r;return g.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,g.a.awrap($(e));case 3:if("undefined"!==typeof(t=o.sent)){o.next=9;break}N.NotificationManager.info("This patient ID was not found."),a.setState({showInformation:!1}),o.next=13;break;case 9:return o.next=11,g.a.awrap(_());case 11:(n=o.sent)&&(r=a.setAttributesForDataTable(n),a.setState({infoPatient:t,showInformation:!0,doctorSchedulePerHour:r}));case 13:o.next=18;break;case 15:o.prev=15,o.t0=o.catch(0),console.log(o.t0);case 18:case"end":return o.stop()}}),null,null,[[0,15]])},a.setAttributesForDataTable=function(e){return e.forEach((function(e,t){e.specialty=e.doctor.specialty,e.lastname=e.doctor.lastname,e.name=e.doctor.name,e.index=t,delete e.doctor})),e},a.handleSubmitPatientId=function(){var e=a.state.patientID;""===e?(N.NotificationManager.error("Please enter a valid patient's ID"),a.setState({showInformation:!1})):a.setState({patientID:e},(function(){a.fetchInfoPatientAndDoctorSchedulePerHour(a.state.patientID)}))},a.handleOnKeyPressEnterPatientId=function(e){var t=a.state.patientID;13===e.charCode&&(""===t?(N.NotificationManager.error("Please enter a valid patient's ID"),a.setState({showInformation:!1})):a.fetchInfoPatientAndDoctorSchedulePerHour(t))},a.onChangeInputPatientId=function(e){a.setState({patientID:e.target.value})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.patientID,a=e.showInformation,n=e.infoPatient,o=e.doctorSchedulePerHour;return r.a.createElement("div",{className:"container-fluid col-xl-8"},r.a.createElement("div",{className:"container mb-2 mt-4 text-center"},r.a.createElement("h2",null,"Schedule appointments")),r.a.createElement("div",{className:"container mb-4"},r.a.createElement("p",{className:"lead mb-0"}," Instruction: "),r.a.createElement("small",{className:"text-muted"},"To create an appointment, first enter an ID of a registered patient.")),r.a.createElement(I,{patientId:t,handleSubmitPatientId:this.handleSubmitPatientId,onChangeInputPatientId:this.onChangeInputPatientId,handleOnKeyPressEnterPatientId:this.handleOnKeyPressEnterPatientId}),r.a.createElement(y,{show:a,info:n}),r.a.createElement(N.NotificationContainer,null),r.a.createElement("hr",null),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mb-4 mt-4 text-center"},r.a.createElement("h4",null," Doctors Schedule")),r.a.createElement("div",{className:"container mb-4"},r.a.createElement("p",{className:"lead mb-0"}," Instruction: "),r.a.createElement("small",{className:"text-muted"},'Below is the schedule of available doctors, you can add in the column "add appointment".')),r.a.createElement(z,{doctorSchedule:o,patientID:t,patientInfo:n})):r.a.createElement(W,null))}}]),t}(n.Component),J=function(){return M.a.get("http://localhost:3000/doctors").then((function(e){return Promise.resolve(e.data)})).catch((function(e){return Promise.reject("Error while trying to get Doctors",e)}))},Y=function(e){var t=e.doctorId,a=e.specialty,n=e.doctorLastname;return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-2"},r.a.createElement("p",null," Doctor's Information:"),r.a.createElement("div",{className:"container border border-dark rounded "},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group mb-0  row"},r.a.createElement("label",{htmlFor:"staticDoctorID",className:"col-sm-5 col-form-label"},"Doctor's ID"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"staticDoctorID",value:t}))),r.a.createElement("div",{className:"form-group mb-0  row"},r.a.createElement("label",{htmlFor:"staticDoctorName",className:"col-sm-5 col-form-label"},"Doctor's lastname:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"staticDoctorName",value:n}))),r.a.createElement("div",{className:"form-group mb-0  row"},r.a.createElement("label",{htmlFor:"staticDoctorSpecialty",className:"col-sm-5 col-form-label"},"Doctor's specialty:"),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"staticDoctorSpecialty",value:a})))))))},Z=function(e){var t=e.doctorId,a=e.doctors,n=e.handleOnChangeSelect;return r.a.createElement("div",{className:"container"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group mt-4"},r.a.createElement("select",{className:"custom-select",onChange:n,value:t},r.a.createElement("option",{key:"placeholder",value:""},"Please select a doctor"),a.map((function(e,t){var a=e.name+"  "+e.lastname;return r.a.createElement("option",{key:t,value:e.id}," ",a)}))))))},G=function(e){var t=e.doctorAppointments,a=w.Search.SearchBar,n=[{dataField:"index",text:"",sort:!0},{dataField:"patientId",text:"Patient's ID",sort:!0},{dataField:"Date",text:"Appointment's Date",sort:!0},{dataField:"Time",text:"Appointment Time",sort:!0},{dataField:"duration",text:"Duration",sort:!0}],o=[{dataField:"index",order:"asc"}];return r.a.createElement("div",{className:"container mt-6"},r.a.createElement(P.a,{keyField:"index",data:t,columns:n,search:{customMatchFunc:function(e){var t=e.searchText,a=e.value;return e.row,"undefined"!==typeof a&&a.startsWith(t)}}},(function(e){return r.a.createElement("div",null,r.a.createElement(a,Object.assign({},e.searchProps,{placeholder:"Enter search in table"})),r.a.createElement(x.a,Object.assign({bootstrap4:!0},e.baseProps,{classes:"table table-striped table-hover react-bs-table-tool-bar",keyField:"index",data:t,columns:n,pagination:O()(),defaultSorted:o})))})))},Q=function(e){return M.a.get("http://localhost:3000/doctors?id=".concat(e)).then((function(e){return Promise.resolve(e.data[0])})).catch((function(e){return Promise.reject("Error while trying to get doctor",e)}))},U=function(e){return M.a.get("http://localhost:3000/doctors?id=".concat(e,"&_embed=medicalAppointments")).then((function(e){return Promise.resolve(e.data[0].medicalAppointments)})).catch((function(e){return Promise.reject("Error while trying to get Doctor's Appointments",e)}))},X=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={doctorId:"",doctorInfo:"",doctors:[],doctorAppointments:[],showDoctorInformation:!1},a.fetchDoctors=function(){var e;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.awrap(J());case 3:(e=t.sent)&&a.setState({doctors:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]])},a.fetchDoctorData=function(){var e,t,n,r;return g.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(o.prev=0,""===(e=a.state.doctorId)){o.next=11;break}return o.next=5,g.a.awrap(Q(e));case 5:return t=o.sent,o.next=8,g.a.awrap(U(e));case 8:n=o.sent,r=a.setAttributesForDataTable(n),t&&r&&a.setState({doctorInfo:t,showDoctorInformation:!0,doctorAppointments:r});case 11:o.next=16;break;case 13:o.prev=13,o.t0=o.catch(0),console.log(o.t0);case 16:case"end":return o.stop()}}),null,null,[[0,13]])},a.setAttributesForDataTable=function(e){return e.forEach((function(e,t){e.index=t,e.duration=e.duration+" hour"})),e},a.handleOnChangeSelect=function(e){""===e.target.value&&a.setState({showDoctorInformation:!1}),a.setState({doctorId:e.target.value},(function(){a.fetchDoctorData()}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchDoctors()}},{key:"render",value:function(){var e=this.state,t=e.doctorId,a=e.doctorInfo,n=e.doctors,o=e.showDoctorInformation,l=e.doctorAppointments;return r.a.createElement("div",{className:"container-fluid col-xl-8"},r.a.createElement("div",{className:"container mb-2 mt-4 text-center"},r.a.createElement("h2",null,"Medical's Schedule Per doctor")),r.a.createElement("div",{className:"container mb-4"},r.a.createElement("p",{className:"lead mb-0"}," Instruction: "),r.a.createElement("small",{className:"text-muted"},"To view a doctor's schedule, first select a doctor.")),r.a.createElement(Z,{doctorId:t,doctors:n,handleOnChangeSelect:this.handleOnChangeSelect}),r.a.createElement("hr",null),o?r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{doctorId:a.id,specialty:a.specialty,doctorLastname:a.lastname}),r.a.createElement("hr",null),r.a.createElement("div",{className:"container mb-4 mt-4 text-center"},r.a.createElement("h4",null," Pending Medical Appointments ")),r.a.createElement(G,{doctorAppointments:l})):r.a.createElement(W,null))}}]),t}(n.Component),ee=a(42),te=a(21),ae={regexs:{IDNumber:/[0-9]{13,}$/,ageNumber:/[0-9]{1,}$/,string:/[A-Za-z\xc1\xc9\xcd\xd3\xda\xd1\xe1\xe9\xed\xf3\xfa\xf1 +,.\u2019'-]{2,}$/}},ne=function(){return"_"+Math.random().toString(36).substr(2,9)},re=function(e,t,a,n){return M.a.post("http://localhost:3000/patients",{id:ne(),patientID:e,name:t,lastname:a,age:Number(n)}).then((function(e){return console.log("resp",e),Promise.resolve(e.data)})).catch((function(e){return console.log("error",e),Promise.reject("Error while trying to create a patient",e)}))},oe=(a(195),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleSubmitCreatePatient=function(){var e,t,n,r,o,l,c;return g.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.validateRequiredInput(),e=a.state,t=e.ID,n=e.name,r=e.lastname,o=e.age,l=e.error,!(Object(te.isEmpty)(l.ID)&&Object(te.isEmpty)(l.name)&&Object(te.isEmpty)(l.lastname)&&Object(te.isEmpty)(l.age))){s.next=14;break}return s.next=5,g.a.awrap($(t));case 5:if(c=s.sent,!Object(te.isEmpty)(c)){s.next=13;break}return s.next=9,g.a.awrap(re(t,n,r,o));case 9:s.sent&&(N.NotificationManager.success("Patient Created!!!"),a.cleanInput()),s.next=14;break;case 13:N.NotificationManager.error("This patient's ID is already exist. Please enter other ID");case 14:case"end":return s.stop()}}))},a.handleOnClose=function(){a.setState({error:{ID:"",name:"",lastname:"",age:""}}),a.cleanInput()},a.cleanInput=function(){a.setState({ID:"",name:"",lastname:"",age:""})},a.validateRequiredInput=function(){var e=a.state,t=e.ID,n=e.name,r=e.lastname,o=e.age,l=a.state.error;Object(te.isEmpty)(t)?l.ID="* This field is required":l.ID="",Object(te.isEmpty)(n)?l.name="* This field is required":l.ID="",Object(te.isEmpty)(r)?l.lastname="* This field is required":l.ID="",Object(te.isEmpty)(o)?l.age="* This field is required":l.ID="",a.setState({error:l})},a.handleOnChangePatientInfo=function(e,t){var n,r=a.state.error,o=t.target.value;switch(e){case"ID":var l=ae.regexs.IDNumber.test(o);r.ID=l?"":"*In this field is only numbers allowed. Example: 0801170012345";break;case"name":var c=ae.regexs.string.test(o);r.name=c?"":"*In this field is only string allowed. Example: some name";break;case"lastname":var s=ae.regexs.string.test(o);r.lastname=s?"":"*In this field is only string allowed. Example: some lastname";break;case"age":var i=ae.regexs.ageNumber.test(o),m=Number(o);r.age=i?m<0||m>120?"*Please enter a valid age":"":"*In this field is only numbers allowed. Example: 20";break;default:console.log("")}a.setState((n={},Object(ee.a)(n,e,o),Object(ee.a)(n,"error",r),n))},a.state={ID:"",name:"",lastname:"",age:"",error:{ID:"",name:"",lastname:""}},a.myRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.myRef.current.focus()}},{key:"render",value:function(){var e=this.state,t=e.ID,a=e.name,n=e.lastname,o=e.age,l=e.error;return r.a.createElement("div",{className:"container-fluid col-xl-8"},r.a.createElement("div",{className:"container mt-2 mb-4"},r.a.createElement("h2",{className:"mb-4"}," Patient's Register"),r.a.createElement("div",{className:"container border border-dark rounded "},r.a.createElement("form",{className:"mb-4"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"mt-2",htmlFor:"ID"},"Patient's ID: "),r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleOnChangePatientInfo.bind(this,"ID"),value:t,id:"ID",placeholder:"Enter Patient's ID",ref:this.myRef}),r.a.createElement("small",{id:"IDError",className:"form-text smallCustomize"},l.ID)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Patient's name: "),r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleOnChangePatientInfo.bind(this,"name"),value:a,id:"name",placeholder:"Enter Patient's name"}),r.a.createElement("small",{id:"IDName",className:"form-text smallCustomize"},l.name)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lastname"},"Patient's lastname: "),r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleOnChangePatientInfo.bind(this,"lastname"),value:n,id:"lastname",placeholder:"Enter Patient's lastname"}),r.a.createElement("small",{id:"lastnameError",className:"form-text smallCustomize"},l.lastname)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"age"},"Patient's age: "),r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleOnChangePatientInfo.bind(this,"age"),value:o,id:"age",placeholder:"Enter Patient's age",max:"100",min:"0"}),r.a.createElement("small",{id:"ageError",className:"form-text smallCustomize"},l.age)),r.a.createElement("div",{className:"text-center mt-2 "},r.a.createElement("button",{className:"btn btn-success",type:"button",onClick:this.handleSubmitCreatePatient}," Create Patient"),r.a.createElement("button",{className:"btn btn-danger ml-2 ",type:"button",onClick:this.handleOnClose}," Cancel"))))),r.a.createElement(N.NotificationContainer,null))}}]),t}(n.Component));a(196);var le=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(E,null)),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:V}),r.a.createElement(s.a,{path:"/doctors",component:X}),r.a.createElement(s.a,{path:"/patients",component:oe}))))};a(199),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/appointment.cc359dd2.svg"},87:function(e,t,a){e.exports=a.p+"static/media/medicalAppointmentImage.d497eb8f.jpg"},91:function(e,t,a){e.exports=a(200)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.3f0d3062.chunk.js.map