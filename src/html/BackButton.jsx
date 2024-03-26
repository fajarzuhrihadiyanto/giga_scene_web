export default function BackButton({ onClick, ...props }) {
    return (
        <button
            style={{
                backgroundColor: 'white',
                border: 'none',
                padding: '4px',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
            onClick={onClick}
            {...props}
        >
            <p style={{margin: 0}}>back</p>
        </button>
    )
}