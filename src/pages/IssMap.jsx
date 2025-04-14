import { useEffect, useState } from "react"
import axios from 'axios'

const IssMap = () => {

    const [issDatas, setIssDatas] = useState(null);
    const [mapLoading , setMapLoading] = useState(true);
    const issLocate = async () => {
        try {
            const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
            setIssDatas(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    const initMap = async () => {
        if (!issDatas) return;

        const {latitude, longitude} = issDatas;

        const map = L.map('map').setView([latitude, longitude], 3);

        const issIcon = L.icon({
            iconUrl : 'https://cdn-icons-png.freepik.com/512/2388/2388204.png?ga=GA1.1.1735392304.1743175494',
            iconSize : [32, 32], // size of the icon
        });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(map);

        L.marker([latitude, longitude], {icon : issIcon}).addTo(map);
        setMapLoading(false);
    }

    useEffect(() => {
        // Api call iss
        issLocate()
    }, [])

    useEffect(() => {
        //Init map
        initMap()
    }, [issDatas])

    return (
        <main className="h-screen">
                <div id="map" className="w-full h-96 rounded-md mt-6">
                    {mapLoading && (
                    <div className="h-full flex items-center justify-center">
                        <svg className="animate-spin size-10 text-[#64a6a5]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                    )}
                </div>
        </main>
    )}


export default IssMap
