import style from './style.module.css'

export default function Input({
    value = '',
    type = 'text',
    required = true,
    placeholder = '',
    handleChange = () => {},
}) {
    return (
        <input
            className={style.input}
            type={type}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    )
}
