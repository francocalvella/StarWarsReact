

function Input(props){
    const {label, type, name, placeholder, register} = props

    return(
        <div>
            <table>
                <tr className="form-item">
                    <td>
                        <label className="label" htmlFor="">{label}</label>
                    </td>
                    <td>
                        <input className="input" name={name} type={type||"text"} placeholder={placeholder||""} {...register}/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Input;