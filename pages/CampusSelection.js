import { useState } from 'react';
import { useRouter } from 'next/router';

function CampusSelection() {
  const router = useRouter();
  const [selectedCampus, setSelectedCampus] = useState('');

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  const handleNext = () => {
    if (selectedCampus) {
      // Redirect to the next screen based on the selected campus
      router.push(`/campus/${selectedCampus}`);
    } else {
      // Handle invalid selection if needed
      alert('Please select a campus.');
    }
  };




  return (
    <div id="campusDropDownContainer">
      <select id="campusDropdown" onChange={handleCampusChange} value={selectedCampus}>
        <option value="">Select a campus</option>
        <option value="campus1">Campus 1</option>

        {/* Add more options as needed */}
      </select>
      <button id="campusNextButton" onClick={handleNext}>Next</button>
    </div>
  );
}

export default CampusSelection;
