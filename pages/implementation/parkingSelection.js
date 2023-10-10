import Footer from "@components/Footer"

function parkingSelection() {


    return (
        <div>

            <iframe
                src="https://uta.modii.co/v2/finder"
                width="100%"
                height="750" // You can adjust the height as needed
                title="UTA Parking Selection"
                allow="fullscreen" // Allow fullscreen for better user experience
                style={{ border: 'none' }} // Optional: Remove iframe border
            ></iframe>
            <div className="parking-header">
                Welcome to Campus 1 Parking
            </div>
            <Footer/>
        </div>
    )
}

export default parkingSelection