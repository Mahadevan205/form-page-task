import React, { useState } from "react";
import "./Formpage.css";
import Select from "react-select";

const Formpage = () => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const options = [
    { value: "Penicillin", label: "Penicillin" },
    { value: "Cephalosporins", label: "Cephalosporins" },
    { value: "Aspirin ", label: "Aspirin " },
    { value: "Pollen ", label: "Pollen" },
    { value: "Dust Mites ", label: "Dust Mites" },
    { value: "Mold Spores ", label: "Mold Spores" },
  ];

  return (
    <>
      <div className="formpage-scroll">
        <div>
          <h2 className="form-heading">Patient Information Form</h2>

          <form action="#" className="form-alignment" onSubmit={handleSubmit}>
            <div className="textfield-box">
              <div className="text-label">
                <label htmlFor="firstname">First Name</label>
                <input type="text" placeholder="Enter first name" required />
              </div>
              <div className="text-label">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" placeholder="Last name" required />
              </div>
              <div className="text-label">
                <label htmlFor="mobilenumber">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  minLength={10}
                  maxLength={10}
                  required
                  placeholder="Enter mobile number"
                ></input>
              </div>
            </div>

            <div className="gender-btn">
              <label htmlFor="gender">Gender</label>
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  required
                />
                Male
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  required
                />
                Female
              </label>
              <label htmlFor="others">
                <input
                  type="radio"
                  id="others"
                  name="gender"
                  value="others"
                  required
                />
                Others
              </label>
            </div>
            <div className="textfield-box">
              <div className="text-label">
                <label htmlFor="email">Email ID</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="text-label">
                <label htmlFor="date">Date of Admission</label>
                <input type="date" required />
              </div>
              <div className="text-label">
                <label htmlFor="emergency-contact">
                  Emergency Contact Name
                </label>
                <input
                  type="text"
                  placeholder="Enter emergency contact name"
                  required
                />
              </div>
            </div>
            <div className="textfield-box">
              <div className="text-label">
                <label htmlFor="date-of-admission">Location</label>
                <div className="d-lg-flex gap-lg-4">
                  <select name="city" id="city" required>
                    <option value="city" hidden>
                      Select City
                    </option>
                    <option value="Porur">Porur</option>
                    <option value="Guindy">Guindy</option>
                    <option value="Velachery">Velachery</option>
                    <option value="Electronic">Electronic City</option>
                    <option value="Jayanagar">Jayanagar</option>
                    <option value="Indiranagar">Indiranagar</option>
                  </select>
                  <select
                    name="district"
                    id="district"
                    required
                  >
                    <option value="" hidden>
                      Select State
                    </option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                  <select
                    name="district"
                    id="district"
                    required
                  >
                    <option value="" hidden>
                      Select Country
                    </option>
                    <option value="india">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-label">
              <label htmlFor="allergies">Do you have any allergies?</label>
              <Select
                isMulti
                name="allergies"
                options={options}
                className="multi-select"
                classNamePrefix="Enter Type of Allergies"
                required
              />
            </div>

            <div className="text-label">
              <label htmlFor="Ahcr">Annual Health Check-Up Report</label>
              <div className="d-flex">
                <input
                  type="file"
                  className="p-0"
                  lang="eng"
                  required
                  onChange={handleFileChange}
                />
                {image && (
                  <div>
                    <img
                      src={image}
                      alt="Uploaded Health Report"
                      style={{ width: "100%", maxWidth: "100px" }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="text-label">
              <label htmlFor="address">Current Address</label>
              <textarea
                name="address"
                id="address"
                required
                placeholder="Current Address"
                rows={4}
                cols={20}
              ></textarea>
            </div>
            <div className="text-label d-block">
              <input
                type="checkbox"
                id="vaccination"
                required
                className="w-auto"
              />
              <label htmlFor="vaccination" className="p-2">
                Have you been vaccinated for COVID-19?
              </label>
            </div>
            <div className="text-label align-items-center">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formpage;
