// // import React from 'react';

// // const Dashboard = () => {
// //   return (
// //     <div className="w-full h-screen p-4 mt-10">
      
// //       <iframe
// //         src="http://localhost:3000/d/cehnzoswhhjwga/flow?orgId=1&from=2025-04-01T20:01:31.754Z&to=2025-04-02T08:01:31.754Z&timezone=browser"
// //         title="Grafana Dashboard"
// //         width="100%"
// //         height="100%"
// //         frameBorder="0"
// //         allowFullScreen
// //       />
// //     </div>
// //   );
// // };

// // export default Dashboard;


// // const Dashboard = () => {
// //     return (
// //       <div className="w-full h-screen">
// //         <iframe
// //           src="http://localhost:3000/d/cehnzoswhhjwga/flow?orgId=1&from=2025-04-01T20:01:31.754Z&to=2025-04-02T08:01:31.754Z&timezone=browser&kiosk=tv"
// //           width="100%"
// //           height="100%"
// //           frameBorder="0"
// //           title="Grafana Dashboard"
// //           style={{ border: 'none' }}
// //         />
// //       </div>
// //     );
// //   };
  
// //   export default Dashboard;
// import Details from "../components/Details";
// import { useState } from "react";
// import { useEffect } from "react";



// const Dashboard = () => {
//   const [dashurl,stedashurl]= useState(null);
//   const { user } = Details();
//   const DashUrl = async () => {
//     switch(user.hospital_id){
//       case 'h1':
//                         stedashurl("http://localhost:3000/d/cei7q4q1hq1ogq/hospital-dashboard-h1?orgId=1&from=2025-04-12T13:05:43.000Z&to=2025-04-24T00:17:43.000Z&timezone=browser&var-admission_type=$__all&var-hospital=AIMS%20Hyderabad&var-bloodtype=$__all&var-medical_condition=$__all&var-age=$__all&var-test_result=$__all&var-doctor=$__all&var-insurance_provider=$__all&var-gender=$__all&var-dept=Cardiologist");
//                         break;
//                     case 'h2':
//                         stedashurl("http://localhost:3000/d/cei7q4q1hq1ogw/hospital-dashboard-h2?orgId=1&from=2025-04-12T13:05:43.000Z&to=2025-04-24T00:17:43.000Z&timezone=browser&var-admission_type=$__all&var-hospital=Apollo%20Jubilee&var-bloodtype=$__all&var-medical_condition=$__all&var-age=$__all&var-test_result=$__all&var-doctor=$__all&var-insurance_provider=$__all&var-gender=$__all&var-dept=Neurologist");
//                         break;
//                     case 'h3':
//                         stedashurl("http://localhost:3000/d/cei7q4q1hq1ogr/hospital-dashboard-h3?orgId=1&from=2025-04-12T13:05:43.000Z&to=2025-04-24T00:17:43.000Z&timezone=browser&var-admission_type=$__all&var-hospital=Sunrise%20Care&var-bloodtype=$__all&var-medical_condition=$__all&var-age=$__all&var-test_result=$__all&var-doctor=$__all&var-insurance_provider=$__all&var-gender=$__all&var-dept=Gastroenterologist");
//                         break;
//                     case 'h4':
//                         stedashurl("http://localhost:3000/d/cei7q4q1hq1ogp/hospital-dashboard-h4?orgId=1&from=2025-04-12T13:05:43.000Z&to=2025-04-23T00:17:43.000Z&timezone=browser&var-admission_type=$__all&var-hospital=Global%20Health&var-bloodtype=$__all&var-medical_condition=$__all&var-age=$__all&var-test_result=$__all&var-doctor=$__all&var-insurance_provider=$__all&var-gender=$__all&var-dept=$__all");
//                         break;
//                       case 'h123':
//                         stedashurl("http://localhost:3000/d/cei7q4q1hq1ogt/hospital-dashboard-h123?orgId=1&from=2025-04-12T13:05:43.000Z&to=2025-04-24T00:17:43.000Z&timezone=browser&var-admission_type=$__all&var-hospital=City%20Hospital&var-bloodtype=$__all&var-medical_condition=$__all&var-age=$__all&var-test_result=$__all&var-doctor=$__all&var-insurance_provider=$__all&var-gender=$__all&var-dept=Cardiologist");
//                         break;
//                     default:
//                       stedashurl("http://localhost:3000/d/cei7q4q1hq1ogq/hospital-dashboard-h1?orgId=1&from=2025-04-12T13:05:43.000Z&to=2025-04-24T00:17:43.000Z&timezone=browser&var-admission_type=$__all&var-hospital=AIMS%20Hyderabad&var-bloodtype=$__all&var-medical_condition=$__all&var-age=$__all&var-test_result=$__all&var-doctor=$__all&var-insurance_provider=$__all&var-gender=$__all&var-dept=Cardiologist");

//     }
//   };
//   useEffect(() => {
//     DashUrl();
//   }, []);
//     return (
//       <div className="w-full h-screen">
//         <iframe
//           src={dashurl}
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           title="Grafana Dashboard"
//           style={{ border: 'none' }}
//         />
//       </div>
//     );
//   };
  
//   export default Dashboard;
  

const Dashboard = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="http://localhost:3000/d/cei7q4q1hq1ogt/hospital-dashboard-h123?orgId=1&from=2025-04-12T13:05:43.000Z&to=2025-04-24T00:17:43.000Z&timezone=browser&var-admission_type=$__all&var-hospital=City%20Hospital&var-bloodtype=$__all&var-medical_condition=$__all&var-age=$__all&var-test_result=$__all&var-doctor=$__all&var-insurance_provider=$__all&var-gender=$__all&var-dept=$__allId=1&from=2025-04-12T13:05:43.000Z&to=2025-04-24T00:17:43.000Z&timezone=browser&var-admission_type=$__all&var-hospital=$__all&var-bloodtype=$__all&var-medical_condition=$__all&var-age=$__all&var-test_result=$__all&var-doctor=$__all&var-insurance_provider=$__all&var-gender=$__all&var-dept=$__all&refresh=5s"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Grafana Dashboard"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Dashboard;