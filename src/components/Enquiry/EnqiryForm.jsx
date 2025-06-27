// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../../styles/enqiry/EnquiryForm.css';
// import en1 from '/enquiry/en1.png';
// import en2 from '/enquiry/en2.png';
// import en3 from '/enquiry/en3.png';
// import en4 from '/enquiry/en4.png';

// function EnquiryForm() {
//   const [referenceModel, setReferenceModel] = useState('');
//   const [referenceList, setReferenceList] = useState([]);
//   const [referenceId, setReferenceId] = useState('');
//   const [formData, setFormData] = useState({
//     full_name: '',
//     optional_name: '',
//     company_name: '',
//     phone_no: '',
//     optional_phone_no: '',
//     email: '',
//     optional_email: '',
//     company_address: '',
//     optional_address: '',
//     schedule_date: '',
//     booking_days: ''
//   });

//   // 🔑 Your token
//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5YzZlMzE4NGRkOGQwNWQxMjg5YjgiLCJlbWFpbCI6Im11aGFtbWFkc2hvYWliMjgwM0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJhdXRoVG9rZW4iOnRydWUsImlhdCI6MTc0ODQzNDA4MiwiZXhwIjoxODM0ODM0MDgyfQ.olVsB5_gf6j4qSv8TitQfkoAQj8Qh6RGWzQuTFHqP84';

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   useEffect(() => {
//     if (referenceModel) {
//       fetchReferenceData(referenceModel);
//     }
//   }, [referenceModel]);

//   const fetchReferenceData = async (model) => {
//     let url = '';
//     if (model === 'artist') {
//       url = 'https://karthikcreation.ap-1.evennode.com/api/admin/getAllArtist';
//     } else if (model === 'service') {
//       url = 'https://karthikcreation.ap-1.evennode.com/api/admin/getService';
//     } else if (model === 'topspeedsecurityservice') {
//       url = 'https://karthikcreation.ap-1.evennode.com/api/admin/getAllTopSpeedSecurityService';
//     }

//     try {
//       const response = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       if (response.data.Status && Array.isArray(response.data.data)) {
//         setReferenceList(response.data.data);
//       } else {
//         setReferenceList([]);
//       }
//     } catch (err) {
//       console.error(`Failed to fetch ${model}:`, err);
//       setReferenceList([]);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       reference_model: referenceModel,
//       reference_id: referenceId,
//       ...formData
//     };

//     try {
//       const res = await axios.post(
//         'https://karthikcreation.ap-1.evennode.com/api/user/addUserEnquiry',
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       if (res.data.status) {
//         alert('Enquiry submitted successfully!');
//         setFormData({
//           full_name: '',
//           optional_name: '',
//           company_name: '',
//           phone_no: '',
//           optional_phone_no: '',
//           email: '',
//           optional_email: '',
//           company_address: '',
//           optional_address: '',
//           schedule_date: '',
//           booking_days: ''
//         });
//         setReferenceModel('');
//         setReferenceList([]);
//         setReferenceId('');
//       } else {
//         alert('Failed to submit enquiry');
//       }
//     } catch (err) {
//       console.error('Submit error:', err);
//       alert('An error occurred while submitting the form');
//     }
//   };

//   return (
//     <div className="form-container" data-aos="fade-up">
//       <div className="image-wrapper" data-aos="fade-right">
//         <img src={en1} alt="" className="bg-img img1" />
//         <img src={en2} alt="" className="bg-img img2" />
//         <img src={en3} alt="" className="bg-img img3" />
//         <img src={en4} alt="" className="bg-img img4" />
//       </div>

//       <form className="enquiry-form" data-aos="zoom-in" onSubmit={handleSubmit}>
//         <h2>Client Enquiry Form</h2>
//         <p>Please fill out the form below and we’ll get back to you shortly.</p>
//         <hr />

//         <label>Reference Model</label>
//         <select value={referenceModel} onChange={e => setReferenceModel(e.target.value)} required>
//           <option value="">Select reference model</option>
//           <option value="artist">Artist</option>
//           <option value="service">Service</option>
//           <option value="topspeedsecurityservice">Top Speed Security Service</option>
//         </select>

//         {referenceList.length > 0 && (
//           <>
//             <label>Select {referenceModel} Heading</label>
//             <select
//               value={referenceId}
//               onChange={e => setReferenceId(e.target.value)}
//               required
//             >
//               <option value="">Select</option>
//               {referenceList.map(item => (
//                 <option key={item._id} value={item._id}>
//                   {item.heading}
//                 </option>
//               ))}
//             </select>
//           </>
//         )}

//         <div className="input-row">
//           <div>
//             <label>Full Name</label>
//             <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required placeholder="Enter your full name" />
//           </div>
//           <div>
//             <label>Company Name</label>
//             <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Enter your company name" />
//           </div>
//         </div>

//         <div className="input-row">
//           <div>
//             <label>Phone Number</label>
//             <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} required placeholder="Enter your phone number" />
//           </div>
//           <div>
//             <label>Optional Name</label>
//             <input type="text" name="optional_name" value={formData.optional_name} onChange={handleChange} placeholder="Enter your optional name" />
//           </div>
//         </div>

//         <div className="input-row">
//           <div>
//             <label>Email Address</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" />
//           </div>
//           <div>
//             <label>Optional Mobile Number</label>
//             <input type="tel" name="optional_phone_no" value={formData.optional_phone_no} onChange={handleChange} placeholder="Enter your optional mobile number" />
//           </div>
//         </div>

//         <div className="input-row">
//           <div>
//             <label>Company Address</label>
//             <input type="text" name="company_address" value={formData.company_address} onChange={handleChange} placeholder="Company address" />
//           </div>
//           <div>
//             <label>Optional Email ID</label>
//             <input type="email" name="optional_email" value={formData.optional_email} onChange={handleChange} placeholder="Enter your optional email id" />
//           </div>
//         </div>

//         <div className="input-row">
//           <div>
//             <label>Date of the Event</label>
//             <input type="date" name="schedule_date" value={formData.schedule_date} onChange={handleChange} placeholder="Enter your event date" />
//           </div>
//           <div>
//             <label>Optional Address</label>
//             <input type="text" name="optional_address" value={formData.optional_address} onChange={handleChange} placeholder="Enter your optional address" />
//           </div>
//         </div>

//         <div>
//           <label>Booking Days</label>
//           <input type="number" name="booking_days" value={formData.booking_days} onChange={handleChange} placeholder="Number of booking days" />
//         </div>

//         <div className="checkbox-row">
//           <input type="checkbox" required />
//           <span>I agree to the terms and conditions and privacy policy</span>
//         </div>

//         <button type="submit">Submit Enquiry</button>
//       </form>
//     </div>
//   );
// }

// export default EnquiryForm;
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/enqiry/EnquiryForm.css';
import en1 from '/enquiry/en1.png';
import en2 from '/enquiry/en2.png';
import en3 from '/enquiry/en3.png';
import en4 from '/enquiry/en4.png';

function EnquiryForm() {
  const [referenceModel, setReferenceModel] = useState('');
  const [formData, setFormData] = useState({
    full_name: '',
    optional_name: '',
    company_name: '',
    phone_no: '',
    optional_phone_no: '',
    email: '',
    optional_email: '',
    company_address: '',
    optional_address: '',
    schedule_date: '',
    booking_days: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', {
      reference_model: referenceModel,
      ...formData
    });
    alert('Form submitted locally (API disabled)');
  };

  return (
    <div className="form-container" data-aos="fade-up">
      <div className="image-wrapper" data-aos="fade-right">
        <img src={en1} alt="" className="bg-img img1" />
        <img src={en2} alt="" className="bg-img img2" />
        <img src={en3} alt="" className="bg-img img3" />
        <img src={en4} alt="" className="bg-img img4" />
      </div>

      <form className="enquiry-form" data-aos="zoom-in" onSubmit={handleSubmit}>
        <h2>Client Enquiry Form</h2>
        <p>Please fill out the form below and we’ll get back to you shortly.</p>
        <hr />

        <label>Reference Model</label>
        <select value={referenceModel} onChange={e => setReferenceModel(e.target.value)} required>
          <option value="">Select reference model</option>
          <option value="Karthik Creation Products">Karthik Creation Products</option>
          <option value="Karthik Creation Service">Karthik Creation Service</option>
          <option value="Top Speed Security Service">Top Speed Security Service</option>
        </select>
        <label>Karthik Creation Products</label>
        <select value={referenceModel} onChange={e => setReferenceModel(e.target.value)} required>
          <option value="">German Structures (All Size)</option>
          <option value="maxima-stalls">Maxima Stalls</option>
          <option value="german-pokada">German Pokada (All Size)</option>
          <option value="indian-pagodas">Indian Pagodas (All Size)</option>
          <option value="barricades">Barricades</option>
          <option value="mojo-barricades">Mojo Barricades</option>
          <option value="wooden-tables-6x2">Wooden Tables (6 x 2)</option>
          <option value="wooden-tables-1.5">Wooden Tables (1 & 1/2)</option>
          <option value="stage-setup">Stage - Set Up (All Size)</option>
          <option value="carpets">Carpets (All Colors & Designs)</option>
          <option value="coolers">Coolers</option>
          <option value="tower-ac">Towers A/C</option>
          <option value="split-ac">Split A/C</option>
          <option value="mist-fans">Mist Fans</option>
          <option value="pedestal-fans">Pedestal Fans (All Size)</option>
          <option value="china-canopies">China Canopies</option>
          <option value="cushion-chairs">Cushion Chairs (With Cover & Bow)</option>
          <option value="tiffany-chairs">Tiffany Chairs</option>
          <option value="fmozo">FMOZO</option>
          <option value="vvip-sofa-sets">V.VIP - Sofas Sets (White & Black)</option>
          <option value="vvip-chairs">V.VIP - Chairs (P.M & C.M)</option>
          <option value="vip-tepoys">V.I.P Tepoys</option>
          <option value="wedding-sofas">Wedding Sofas</option>
          <option value="que-manager-gold">QUE Manager - Gold</option>
          <option value="que-manager-silver">QUE Manager - Silver</option>
          <option value="podiums">Podiums</option>
          <option value="led-walls">LED Walls</option>
          <option value="sound-lights">Sound & Lights</option>
          <option value="truss">Truss</option>
          <option value="scaffolding">Scaffolding</option>
          <option value="heater">Heater</option>
          <option value="water-dispensers">Water Dispensers (Hot & Cold)</option>
          <option value="fridge">Fridge</option>
          <option value="e-toilets">E-Toilets</option>
          <option value="bio-hand-wash">Bio Hand Wash</option>
          <option value="cots-beds">Cots & Beds</option>
          <option value="dust-bins">Dust Bins</option>
          <option value="smoking-dustbins">Smoking Dustbins</option>
          <option value="look-walkers">Look Walkers</option>
          <option value="led-mobile-chargers">Led Mobile Chargers</option>
        </select>
        <label>Karthik Creation Service</label>
        <select value={referenceModel} onChange={e => setReferenceModel(e.target.value)} required>
          <option value="">Karthik Creation Service</option>
          <option value="artist">Bouncing Castle</option>
          <option value="artist">Cartoon Characters</option>
          <option value="artist">Antique Two Wheelers for Display</option>
          <option value="artist">Water Fountains</option>
          <option value="artist">Selfies Booth </option>
          <option value="artist">Dholu Kulita</option>


        </select>
        <label>Top Speed Security Service</label>
<select value={referenceModel} onChange={e => setReferenceModel(e.target.value)} required>
  <option value="">Top Speed Security Service</option>
  <option value="baggage-scanner">Baggage Scanner</option>
  <option value="dfmd">DFMD - Door Frame Metal Detector</option>
  <option value="hhmd">HHMD - Hand Held Metal Detector</option>
  <option value="walkie-talkie">Walkie Talkie</option>
  <option value="normal-ambulance">Normal Ambulance + Nurse</option>
  <option value="tt-ambulance">T.T Ambulance + Nurse</option>
  <option value="icu-on-wheels">ICU on Wheels</option>
  <option value="cctv-cameras">C.C T/V Cameras</option>
  <option value="fire-extinguishers">Fire Extinguishers</option>
  <option value="fire-buckets">Fire Buckets</option>
  <option value="traffic-batons">Traffic Batons</option>
  <option value="traffic-cones">Traffic Cones</option>
  <option value="under-car-mirror">Under Car Checking Mirror</option>
  <option value="alcohol-tester">Alchoal Tester</option>
  <option value="megaphone">Mega Phone</option>
  <option value="tow-vehicle">Tow Vehicle</option>
  <option value="que-manager">QUE Manager - Gold / Silver</option>
  <option value="barricades">Barricades</option>
  <option value="mozo-barricades">Mozo Barricades</option>
  <option value="security-officer">Security Officer</option>
  <option value="field-officer">Security Field Officer</option>
  <option value="security-head-guard">Security Head Guard</option>
  <option value="security-guard">Security Guard - Man / Lady</option>
  <option value="bouncer">Bouncer - Man / Lady</option>
  <option value="fire-marshall">Fire Marshall</option>
  <option value="ceremonial-dress">Ceremonial Dressed (Maharaja - Men)</option>
  <option value="qrt-team">Quick Reaction Team</option>
  <option value="hostess">Hostess - Men / Women</option>
  <option value="housekeeping-staff">Housekeeping Staff</option>
  <option value="protocell">Protocell - Safari Men</option>
  <option value="road-blocker">Road Blocker</option>
  <option value="gunman">Gun Man</option>
</select>
<div className="input-row">
          <div>
            <label>Full Name</label>
            <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required placeholder="Enter your full name" />
          </div>
          <div>
            <label>Company Name</label>
            <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="Enter your company name" />
          </div>
        </div>

        <div className="input-row">
          <div>
            <label>Mobile Number</label>
            <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} required placeholder="Enter your phone number" />
          </div>
          <div>
            <label>Optional Mobile Number</label>
            <input type="text" name="optional_name" value={formData.optional_name} onChange={handleChange} placeholder="Enter your optional name" />
          </div>
        </div>

        <div className="input-row">
          <div>
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" />
          </div>
          <div>
            <label>Optional Email Address</label>
            <input type="tel" name="optional_phone_no" value={formData.optional_phone_no} onChange={handleChange} placeholder="Enter your optional mobile number" />
          </div>
        </div>

        <div className="input-row">
          <div>
            <label>Company Address</label>
            <input type="text" name="company_address" value={formData.company_address} onChange={handleChange} placeholder="Company address" />
          </div>
          <div>
            <label>Optional Address</label>
            <input type="email" name="optional_email" value={formData.optional_email} onChange={handleChange} placeholder="Enter your optional email id" />
          </div>
        </div>

        <div className="input-row">
          <div>
            <label>Date of the Event</label>
            <input type="date" name="schedule_date" value={formData.schedule_date} onChange={handleChange} />
          </div>
          <div>
            <label>Event Address</label>
            <input type="text" name="optional_address" value={formData.optional_address} onChange={handleChange} placeholder="Enter your optional address" />
          </div>
        </div>

        <div>
          <label>Event Days</label>
          <input type="number" name="booking_days" value={formData.booking_days} onChange={handleChange} placeholder="Number of booking days" />
        </div>

        <div className="checkbox-row">
          <input type="checkbox" required />
          <span>I agree to the terms and conditions and privacy policy</span>
        </div>

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default EnquiryForm;
