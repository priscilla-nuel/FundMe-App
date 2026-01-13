import { InputHTMLAttributes } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    value: string
}

export default function InputField({
    label,
    value,
    onChange,
    type = "integer",
    placeholder,
    className = "",
    disabled,
    required,
    ...props
}: InputFieldProps) {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                className={`
          w-full px-4 py-2 border border-gray-300 rounded-md 
          shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:border-blue-500
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
          ${className}
        `}
                {...props}
            />
        </div>
    )
}