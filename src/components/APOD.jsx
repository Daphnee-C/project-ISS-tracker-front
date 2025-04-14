import { useEffect, useState } from "react"

const APOD = () => {
  const [apod, setApod] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const apiKey = import.meta.env.VITE_NASA_API_KEY || 'lr30CQhJB1WANEenjAdw4EFf83QlIp5zrNUrvOWo'
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

        const res = await fetch(url)
        
        if (!res.ok) {
          const errorBody = await res.text()
          throw new Error(`HTTP error! status: ${res.status}, message: ${errorBody}`)
        }

        const data = await res.json()
        setApod(data);
      } catch (error) {
        console.error("Erreur API détaillée:", error)
        setError(`Impossible de récupérer l'image du jour. ${error.message}`)
      }
    }

    fetchApod()
  }, [])

  if (error) return <p className="text-red-500">{error}</p>
  if (!apod) return <p>Chargement...</p>

  return (
    <div className="flex flex-col items-center text-center p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{apod.title}</h2>
      {apod.media_type === "image" ? (
        <img 
          src={apod.url} 
          alt={apod.title} 
          className="max-w-full rounded-lg shadow-lg object-contain max-h-[600px]" 
        />
      ) : (
        <iframe 
          src={apod.url} 
          title={apod.title} 
          className="w-full h-64 md:h-96 rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      )}
      <p className="text-gray-700 mt-4 text-left">{apod.explanation}</p>
      {apod.copyright && (
        <p className="text-gray-500 mt-2 italic">
          © {apod.copyright}
        </p>
      )}
      <p className="text-gray-600 mt-2">Date : {apod.date}</p>
    </div>
  )
}

export default APOD