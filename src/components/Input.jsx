import './Input.css';

function Input({ option, desc, name, value, onChange, head }) {
    return (
        <div className="inputWrap Pretendard">
            <input
                className={`nomarInput_${option}`}
                type="text"
                value={value}
                onChange={onChange}
                required
                name={name}
            />
            <label>
                <p className="labelHead">{head}</p>
                <p>{desc}</p>
            </label>
            <span></span>
        </div>
    );
}

export default Input;
