import Footer from '@components/footer.js'

function parkingSelection() {


    return(
        <div>
            <iframe
        src="https://uta.modii.co/v2/finder"
        width="100%"
        height="800" // You can adjust the height as needed
        title="UTA Parking Selection"
        allow="fullscreen" // Allow fullscreen for better user experience
        style={{ border: 'none' }} // Optional: Remove iframe border
      ></iframe>

      <Footer/>
        </div>
    )}

    export default parkingSelection