import useDataStore from "../store/dataStore"

export default function GeneralInformationPage() {
    const labDescription = useDataStore.useLabDescription()
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                padding: '64px',
                backgroundColor: 'white',
                boxSizing: 'border-box'
            }}
        >
            <h1 style={{margin: 0, marginBottom: '16px'}}>Selamat Datang di halaman Laboratorium Grafika, Interaksi dan Game.</h1>
            <p style={{fontSize: '18pt', margin: 0, textAlign: 'justify'}}>{labDescription}</p>
        </div>
    )
}