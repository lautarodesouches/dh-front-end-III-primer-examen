export default function Input({
    value = '',
    type = 'text',
    required = true,
    placeholder = '',
    handleChange = () => {},
}) {
    return (
        <div>
            <input
                type={type}
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
